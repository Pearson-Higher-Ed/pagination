import { Pagination, PaginationContainer, CompactGroupedContainer } from '../index';
import React from 'react';
import ReactDOM from 'react-dom';

function init() {
  // to Demo how QA would test
  document.body.dispatchEvent(new CustomEvent('o.InitPagination', {
    detail: {
      elementId: 'pagination-target',
      props: {
        activePage: 1,
        pages: 100
      }
    }
  }));

  // standard type demo
  ReactDOM.render(
    <Pagination pages={100} activePage={1} />,
    document.getElementById('demo-stateless1')
  );

  // Compact Group Demo
  ReactDOM.render(
    <Pagination pages={10} activePage={1} paginationType="compact" compactText="1-10 of 100" />,
    document.getElementById('demo-stateless2')
  );

  // Compact Page Demo
  ReactDOM.render(
    <PaginationContainer pages={10} activePage={10} paginationType="compact" compactText="Page 10 of 10" />,
    document.getElementById('demo-stateless3')
  );

  // Stateful demos
  ReactDOM.render(
    <PaginationContainer pages={100} activePage={1} />,
    document.getElementById('demo-target1')
  );

  ReactDOM.render(
    <PaginationContainer pages={100} activePage={1} />,
    document.getElementById('demo-target2')
  );

  ReactDOM.render(
    <PaginationContainer pages={5} activePage={1} />,
    document.getElementById('demo-target3')
  );

  ReactDOM.render(
    <PaginationContainer pages={100} activePage={99} />,
    document.getElementById('demo-target4')
  );

  ReactDOM.render(
    <PaginationContainer pages={100} activePage={40} />,
    document.getElementById('demo-target5')
  );

  ReactDOM.render(
    <PaginationContainer pages={100} activePage={1} maxButtons={3} />,
    document.getElementById('demo-target6')
  );

}

window.onload = init;
