import MyPagination, { Pagination } from '../main'; // to demo direct API usage
import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';

// When available on npm, consumer usage would be similar to:
// import MyPagination from '@pearson-components/[component-name]'

function init() {

  // Demo direct API
  new MyPagination({
    elementId: 'demo-target1',
    locale: 'fr',
    activePage: 2,
    items: 50,
    maxButtons: 10
  });


  const onSelect = () => console.log('selected');
  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={100} activePage={1} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target2')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={5} activePage={1} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target3')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={100} activePage={99} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target4')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={100} activePage={40} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target5')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={20} activePage={1} maxButtons={3} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target6')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={20} activePage={1} maxButtons={3} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target7')
  );
}

window.onload = init;
