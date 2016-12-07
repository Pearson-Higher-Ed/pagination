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
    maxButtons: 7
  };

  createFirstLast() {
    return [(
      <PaginationButton
        key="firstItem"
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
        key="maxItems"
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


    // if no buttons to the left when only displaying maxButtons, don't show ellipses on left
    // if no buttons to the right when only displaying maxButtons, don't show ellipses on right

    // otherwise show ellipses on left and/or right

    const startPage = (this.props.activePage - 1) - parseInt(this.props.maxButtons / 2, 10);
    const endPage = (startPage + this.props.maxButtons);

    const pageButtons = totalItems.slice(startPage, endPage).map((item) => {
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

    if (startPage > 2) {
      pageButtons[0] = (
        <PaginationButton
          key="frontEllipses"
          disabled={true}
        >
          ...
        </PaginationButton>
      );
    }

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
