import '../scss/pagination.scss';
import React, {PropTypes} from 'react';
import {FormattedMessage} from 'react-intl';
import PaginationButton from './PaginationButton';
import {messages} from './defaultMessages';

class ComponentOwner extends React.Component {
  static propTypes = {
    items: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    maxButtons: PropTypes.number
  };

  static defaultProps = {
    maxButtons: 5
  };

  renderPageButtons() {
    const first = (
      <PaginationButton key={0}>
        <div>
          <span className="pe-sr-only">
            <FormattedMessage {...messages.activePage} />
          </span>
          1
        </div>
      </PaginationButton>
    );

    const last = (
      <PaginationButton key={this.props.maxButtons}>
        <div>
        <span className="pe-sr-only">
          <FormattedMessage {...messages.activePage} />
        </span>
        {this.props.items}
        </div>
      </PaginationButton>
    );

    const pageButtons = Array.from(Array(this.props.items).keys()).slice(1, this.props.maxButtons - 1).map((item) => {
      return (
        <PaginationButton
          active={this.props.activePage === item}
          key={item}
          onSelect={this.props.onSelect}
        >
          <div>
            <span className="pe-sr-only">
              <FormattedMessage {...messages.activePage} />
            </span>
            {item + 1}
          </div>
        </PaginationButton>
      );
    });

    return [first, ...pageButtons, last];
  }

  render() {
    return (
      <div>
        <PaginationButton
          active={false}
        >
          <span className="pe-sr-only">
            <FormattedMessage {...messages.prevButton} />
          </span>
          <span aria-hidden="true">
            Prev
          </span>
        </PaginationButton>
          {this.renderPageButtons()}
        <PaginationButton
          active={false}
        >
          <span className="pe-sr-only">
            <FormattedMessage {...messages.nextButton} />
          </span>
          <span aria-hidden="true">
            Next
          </span>
        </PaginationButton>
      </div>
    )
  }

}

export default ComponentOwner;
