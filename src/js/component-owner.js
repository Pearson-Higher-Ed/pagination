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

  createFirstLast() {
    return [(
      <PaginationButton
        key={0}
        active={this.props.activePage === 1}
        onSelect={this.props.onSelect}
        eventKey={1}
      >
        <div>
          <span className="pe-sr-only">
            <FormattedMessage {...messages.activePage} />
          </span>
          1
        </div>
      </PaginationButton>
    ), (
      <PaginationButton
        key={this.props.maxButtons}
        active={this.props.activePage === this.props.items}
        onSelect={this.props.onSelect}
        eventKey={this.props.items}
      >
        <div>
        <span className="pe-sr-only">
          <FormattedMessage {...messages.activePage} />
        </span>
        {this.props.items}
        </div>
      </PaginationButton>
    )];
  }

  renderPageButtons() {
    const [first, last] = this.createFirstLast();

    const totalItems = Array.from(Array(this.props.items).keys());
    const pageButtons = totalItems.slice(1, this.props.maxButtons - 1).map((item) => {
      return (
        <PaginationButton
          active={this.props.activePage === (item + 1)}
          key={item}
          eventKey={item + 1}
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
          disabled={this.props.activePage === 1}
          onSelect={this.props.onSelect}
          eventKey={this.props.activePage - 1}
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
          disabled={this.props.activePage === this.props.items}
          onSelect={this.props.onSelect}
          eventKey={this.props.activePage + 1}
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
