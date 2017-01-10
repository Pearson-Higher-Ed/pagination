import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './src/js/component-owner';
import PaginationButton from './src/js/PaginationButton';
import PaginationIntl from './src/js/PaginationIntl';

// i18n, set up for French out-of-the-box
import frJson from './translations/fr.json';
const translations = {
  'fr' : frJson
};

const onSelect = (eventKey) => {
  document.dispatchEvent(new CustomEvent('o-pagination-setActive', {
    detail: {
      activePage: eventKey
    }
  }));
};

export default class PaginationContainer {

  constructor(config) {
    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <PaginationIntl {...config} locale={locale} messages={translations[locale]} onSelect={onSelect} />,
      document.getElementById(config.elementId)
    );
  }

}
//
// For events, use the Origami naming convention of pre-pending with 'o.'
//
document.body.addEventListener('o.InitPagination', e => new PaginationContainer(e.detail));

export { Pagination, PaginationButton, PaginationIntl };
