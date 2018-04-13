import React from 'react';
import Pagination from './Pagination';

export default class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activePage: props.activePage,
      compactText: props.compactText };
  }

  setActive = (eventKey) => {
    this.setState({ activePage: eventKey  });
    this.setState({ compactText: `Page ${eventKey} of ${this.props.pages}`});
  };

  render() {
    return (
      <Pagination
        pages={this.props.pages}
        activePage={this.state.activePage}
        onSelect={this.setActive}
        maxButtons={this.props.maxButtons}
        prevTitle={this.props.prevTitle}
        nextTitle={this.props.nextTitle}
        compactText={this.state.compactText}
        paginationType={this.props.paginationType}
      />
    );
  }
}
