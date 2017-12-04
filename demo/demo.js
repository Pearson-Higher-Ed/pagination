import { Pagination, PaginationContainer } from '../index';
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

  const onSelect = (eventKey) => {
    console.log('page is', eventKey);
    ReactDOM.render(
      <Pagination pages={100} activePage={eventKey} onSelect={onSelect} />,
      document.getElementById('demo-stateless1')
    );
  };

  // standard type demo
  ReactDOM.render(
    <Pagination pages={100} activePage={1} onSelect={onSelect} />,
    document.getElementById('demo-stateless1')
  );

  const onSelectCompact = (eventKey) => {
    console.log('page is', eventKey);
    const compactText = `Page ${eventKey} of 10`;
    ReactDOM.render(
      <Pagination
        pages={10}
        activePage={eventKey}
        onSelect={onSelectCompact}
        paginationType="compact"
        compactText={compactText}
      />,
      document.getElementById('demo-stateless2')
    );
  };

  // Compact Group Demo
  ReactDOM.render(
    <Pagination
      pages={10}
      activePage={10}
      paginationType="compact"
      compactText="Page 10 of 10"
      onSelect={onSelectCompact}
    />,
    document.getElementById('demo-stateless2')
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

  // Compact Page Demo
  ReactDOM.render(
    <PaginationContainer pages={10} activePage={10} paginationType="compact" compactText="Page 10 of 10" />,
    document.getElementById('demo-target7')
  );

}

window.onload = init;
