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
    pages: 50,
    maxButtons: 10
  });


  const onSelect = () => console.log('selected');
  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination pages={100} activePage={1} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target2')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination pages={5} activePage={1} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target3')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination pages={100} activePage={99} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target4')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination pages={100} activePage={40} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target5')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination pages={20} activePage={1} maxButtons={3} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target6')
  );

  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination pages={20} activePage={1} paginationType="compact"
                  onSelect={onSelect} compactText="1-10 of 200"/>
    </IntlProvider>,
    document.getElementById('demo-target7')
  );

  ReactDOM.render(
    <IntlProvider locale="fr">
      <Pagination pages={20} activePage={20} paginationType="compact"
                  nextTitle="next" prevTitle="précédent"
                  onSelect={onSelect} compactText="Page 20 of 20"/>
    </IntlProvider>,
    document.getElementById('demo-target8')
  );
}

window.onload = init;
