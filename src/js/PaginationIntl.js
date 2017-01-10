import '../scss/pagination.scss';
import React, { PropTypes } from 'react';
import frJson from '../../translations/fr.json';
import { addLocaleData, IntlProvider } from 'react-intl';
import frLocaleData from 'react-intl/locale-data/fr';
import Pagination from './component-owner';
const translations = {
  'fr': frJson
};
addLocaleData(frLocaleData);

class PaginationIntl extends React.Component {
  static propTypes = {
    locale: PropTypes.string,
    items: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    maxButtons: PropTypes.number
  };

  static defaultProps = {
    locale: 'en'
  };


  render() {
    const {locale, ...rest} = this.props;
    return (
      <IntlProvider locale={locale} messages={translations[locale]}>
        <Pagination {...rest} />
      </IntlProvider>
    );
  }
}

export default PaginationIntl;
