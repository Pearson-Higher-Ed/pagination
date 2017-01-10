import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './src/js/component-owner';
import PaginationButton from './src/js/PaginationButton';

// i18n, set up for French out-of-the-box
import {addLocaleData, IntlProvider} from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import frJson from './translations/fr.json';
const translations = {
  'fr' : frJson
};

const onSelect = (eventKey) => {
  document.dispatchEvent(new CustomEvent('o-pagination-select', {
    detail: {
      selectedPage: eventKey
    }
  }))
};

export default class PaginationContainer {

  constructor(config) {
    document.addEventListener('o-pagination-setActive', )
    addLocaleData(frLocaleData);
    this.init(config);
  }

  init(config) {

    const locale = config.locale ? config.locale : 'en';

    ReactDOM.render(
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Pagination {...config} onSelect={onSelect} />
      </IntlProvider>,
      document.getElementById(config.elementId)
    );
  }

}

//
// For events, use the Origami naming convention of pre-pending with 'o.'
//
document.body.addEventListener('o.InitPagination', e => new PaginationContainer(e.detail));

export { Pagination, PaginationButton }
