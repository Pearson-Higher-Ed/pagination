import Pagination from '../index';
import React from 'react';
import ReactDOM from 'react-dom';

// When available on npm, consumer usage would be similar to:
// import MyPagination from '@pearson-components/[component-name]'

function init() {

  class PaginationContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { activePage: props.activePage };
    }

    setActive = (eventKey) => {
      this.setState({ activePage: eventKey  });
    };

    render() {
      return (
        <Pagination pages={this.props.pages} activePage={this.state.activePage} onSelect={this.setActive} />
      );
    }
  }

  // Demo inside a React Container
  ReactDOM.render(
    <PaginationContainer pages={100} activePage={1} />,
    document.getElementById('demo-target1')
  );

  const onSelect = () => {};

  // Demo as stateless React component
  ReactDOM.render(
    <Pagination pages={100} activePage={1} onSelect={onSelect} />,
    document.getElementById('demo-target2')
  );

  ReactDOM.render(
    <Pagination pages={5} activePage={1} onSelect={onSelect} />,
    document.getElementById('demo-target3')
  );

  ReactDOM.render(
    <Pagination pages={100} activePage={99} onSelect={onSelect} />,
    document.getElementById('demo-target4')
  );

  ReactDOM.render(
    <Pagination pages={100} activePage={40} onSelect={onSelect} />,
    document.getElementById('demo-target5')
  );

  ReactDOM.render(
    <Pagination pages={20} activePage={1} maxButtons={3} onSelect={onSelect} />,
    document.getElementById('demo-target6')
  );

  ReactDOM.render(
    <Pagination pages={20} activePage={1} paginationType="compact"
                compactText="Page 1 or 20 (or whatever text you want in here)" onSelect={onSelect} />,
    document.getElementById('demo-target7')
  );
}

window.onload = init;
