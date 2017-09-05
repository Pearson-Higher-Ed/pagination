import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './src/js/component-owner';
import PaginationButton from './src/js/PaginationButton';

const onSelect = (eventKey) => {
  document.dispatchEvent(new CustomEvent('o-pagination-setActive', {
    detail: {
      activePage: eventKey
    }
  }));
};

export default class PaginationContainer {

  constructor(props) {
    ReactDOM.render(
      <Pagination {...props} onSelect={onSelect} />,
      document.getElementById(props.elementId)
    );
  }
}
//
// For events, use the Origami naming convention of pre-pending with 'o.'
//
document.body.addEventListener('o.InitPagination', e => new PaginationContainer(e.detail));

export { Pagination, PaginationButton };
