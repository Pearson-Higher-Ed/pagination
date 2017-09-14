import Pagination from '../index';
import React from 'react';
import ReactDOM from 'react-dom';

// When available on npm, consumer usage would be similar to:
// import MyPagination from '@pearson-components/[component-name]'

function init() {

  // Demo of a standard type control inside a React Container
  //
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

  ReactDOM.render(
    <PaginationContainer pages={100} activePage={1} />,
    document.getElementById('demo-target1')
  );

  // Demo of a compact group control inside a React Container
  //
  class CompactPaginationContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activePage: props.activePage,
        compactText: this.compactText(1, this.props.groupSize, this.props.totalItems)
      };
    }

    compactText = (eventKey = 1, groupSize, totalItems) => {
      const startNum = groupSize * (eventKey - 1) + 1;
      const endNum = (eventKey * groupSize < totalItems) ? eventKey * groupSize : totalItems;
      return `${startNum}-${endNum} of ${totalItems}`;
    };

    setActive = (eventKey) => {
      this.setState({
        activePage: eventKey,
        compactText: this.compactText(eventKey, this.props.groupSize, this.props.totalItems)
      });
    };

    render() {
      return (
        <Pagination pages={this.props.pages}
                    activePage={this.state.activePage}
                    onSelect={this.setActive}
                    compactText={this.state.compactText}
                    paginationType="compact"
        />
      );
    }
  }

  // Compact Group Demo inside a React Container
  ReactDOM.render(
    <CompactPaginationContainer pages={6} activePage={1} groupSize={10} totalItems={54} />,
    document.getElementById('demo-target2')
  );

  const onSelect = () => {};

  // Demo as stateless React component
  ReactDOM.render(
    <Pagination pages={100} activePage={1} onSelect={onSelect} />,
    document.getElementById('demo-target3')
  );

  ReactDOM.render(
    <Pagination pages={5} activePage={1} onSelect={onSelect} />,
    document.getElementById('demo-target4')
  );

  ReactDOM.render(
    <Pagination pages={100} activePage={99} onSelect={onSelect} />,
    document.getElementById('demo-target5')
  );

  ReactDOM.render(
    <Pagination pages={100} activePage={40} onSelect={onSelect} />,
    document.getElementById('demo-target6')
  );

  ReactDOM.render(
    <Pagination pages={20} activePage={1} maxButtons={3} onSelect={onSelect} />,
    document.getElementById('demo-target7')
  );

  ReactDOM.render(
    <Pagination pages={20} activePage={1} paginationType="compact"
                compactText="Page 1 or 20 (or whatever text you want in here)" onSelect={onSelect} />,
    document.getElementById('demo-target8')
  );
 
}

window.onload = init;
