import MyComponent, { Pagination } from '../main'; // to demo direct API usage
import React from 'react';
import { IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';

// When available on npm, consumer usage would be similar to:
// import MyComponent from '@pearson-components/[component-name]'

function init() {

  // Demo direct API
  new MyComponent({
    elementId: 'demo-target2',
    greeting: 'Bonjour le monde!',
    locale: 'fr'
  });


  const onSelect = () => console.log('selected');
  ReactDOM.render(
    <IntlProvider locale="en">
      <Pagination items={7} activePage={2} onSelect={onSelect} />
    </IntlProvider>,
    document.getElementById('demo-target1')
  );
}

window.onload = init;
