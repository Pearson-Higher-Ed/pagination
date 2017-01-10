import '../scss/pagination.scss';
import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import PaginationButton from './PaginationButton';
import { messages } from './defaultMessages';

class ComponentOwner extends React.Component {
  static propTypes = {
    items: PropTypes.number.isRequired,
    activePage: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    maxButtons: PropTypes.number
  };

  static defaultProps = {
    maxButtons: 5,
    activePage: 1
  };

  constructor(props) {
    super(props);
    this.state = this.calculateState(props);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    document.addEventListener('o-pagination-setActive', this.setActive);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.calculateState(nextProps));
  }

  setActive(event) {
    this.setState({
      activePage: event.detail.activePage
    });
  }

  calculateState(props) {
    return {
      activePage: props.activePage
    }
  }

  createFirstLast() {
    return [(
      <PaginationButton
        key="firstItem"
        active={this.state.activePage === 1}
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
        active={this.state.activePage === this.props.items}
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

    let displayButtons = this.props.maxButtons;
    if (this.props.items < this.props.maxButtons + 2) {
      displayButtons = this.props.items - 2;
    }

    let startPage = (this.state.activePage - 1) - parseInt(displayButtons / 2, 10);
    if (this.state.activePage <= parseInt(displayButtons / 2, 10) + 1) {
      startPage = 1;
    }
    if (this.state.activePage >= this.props.items - parseInt(displayButtons / 2, 10)) {
      startPage = this.props.items - displayButtons - 1;
    }

    const endPage = (startPage + displayButtons);

    const pageButtons = totalItems.slice(startPage, endPage).map((item) => {
      return (
        <PaginationButton
          active={this.state.activePage === (item + 1)}
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

    if (startPage > 1) {
      pageButtons[0] = (
        <PaginationButton
          key="frontEllipses"
          disabled={true}
        >
          <span className="pe-sr-only">
            <FormattedMessage {...messages.pagination} />
          </span>
          <span aria-hidden="true">
            ...
          </span>
        </PaginationButton>
      );
    }

    const checkBackEllipses = displayButtons > 0;

    if (checkBackEllipses && last.props.eventKey > pageButtons[displayButtons - 1].props.eventKey + 1) {
      pageButtons[displayButtons - 1] = (
        <PaginationButton
          key="backEllipses"
          disabled={true}
        >
          <span className="pe-sr-only">
            <FormattedMessage {...messages.pagination} />
          </span>
          <span aria-hidden="true">
            ...
          </span>
        </PaginationButton>
      );
    }
    return [first, ...pageButtons, last];
  }

  render() {
    return (
      <div className="paginationGroup">
        <PaginationButton
          active={false}
          disabled={this.state.activePage === 1}
          onSelect={this.props.onSelect}
          eventKey={this.state.activePage - 1}
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
          disabled={this.state.activePage === this.props.items}
          onSelect={this.props.onSelect}
          eventKey={this.state.activePage + 1}
        >
          <span className="pe-sr-only">
            <FormattedMessage {...messages.nextButton} />
          </span>
          <span aria-hidden="true">
            Next
          </span>
        </PaginationButton>
      </div>
    );
  }
}

export default ComponentOwner;
