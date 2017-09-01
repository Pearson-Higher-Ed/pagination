import MyPagination, { Pagination } from '../main'; // to demo direct API usage
import React from 'react';
import ReactDOM from 'react-dom';

// When available on npm, consumer usage would be similar to:
// import MyPagination from '@pearson-components/[component-name]'

function init() {

  // Demo direct API
  new MyPagination({
    elementId: 'demo-target1',
    activePage: 2,
    pages: 50,
    maxButtons: 10
  });

  // Demo as React component
  const onSelect = () => console.log('selected');
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
    <Pagination pages={20} activePage={1} paginationType="compact" onSelect={onSelect} >
      1-10 of 200
    </Pagination>,
    document.getElementById('demo-target7')
  );

  ReactDOM.render(
    <Pagination pages={20} activePage={20} paginationType="compact"
                nextTitle="next" prevTitle="précédent"
                onSelect={onSelect}>
      Page 20 of 20
    </Pagination>,
    document.getElementById('demo-target8')
  );
}

window.onload = init;
