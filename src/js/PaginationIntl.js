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
    config: PropTypes.object,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    locale: 'en'
  };


  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={translations[this.props.locale]}>
        <Pagination data={this.props.config} items={100} activePage={1} onSelect={this.props.onSelect} />
      </IntlProvider>
    );
  }
}

export default PaginationIntl;
