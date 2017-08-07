import '../scss/pagination.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import PaginationButton from './PaginationButton';
import { messages } from './defaultMessages';
import uuid from 'uuid';

class Pagination extends Component {
  static propTypes = {
    items: PropTypes.number.isRequired,
    activePage: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    maxButtons: PropTypes.number,
    intl: intlShape.isRequired
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

  createPrevNext({intl}) {
    const prevTitle = intl.formatMessage(messages.previousButton);
    const nextTitle = intl.formatMessage(messages.nextButton);
    const i_id='_'+uuid.v1();

    return [(
      <PaginationButton
        key="prev"
        active={false}
        disabled={this.state.activePage === 1}
        onSelect={this.props.onSelect}
        eventKey={this.state.activePage - 1}>
        <span className="pagination-prev">
          <svg focusable="false"
               role="img"
               aria-labelledby = {i_id}
               className = "pe-icon--chevron-back-sm-18">
            <title id={i_id}> {prevTitle} </title>
            <use xlinkHref="#chevron-back-sm-18"></use>
          </svg>
        </span>
      </PaginationButton>
    ), (
      <PaginationButton
        key="next"
        active={false}
        disabled={this.state.activePage === this.props.items}
        onSelect={this.props.onSelect}
        eventKey={this.state.activePage + 1}>
        <span className="pagination-next">
          <svg focusable="false"
               role="img"
               aria-labelledby = {'pe'+i_id}
               className = "pe-icon--chevron-next-sm-18">
            <title id={'pe'+i_id}> {nextTitle} </title>
            <use xlinkHref="#chevron-next-sm-18"></use>
          </svg>
        </span>
      </PaginationButton>
    )];
  }

  createFirstLast() {

    return [(
      <PaginationButton
        key="firstItem"
        active={this.state.activePage === 1}
        onSelect={this.props.onSelect}
        eventKey={1}>
        <span>1</span>
      </PaginationButton>
    ), (
      <PaginationButton
        key="maxItems"
        active={this.state.activePage === this.props.items}
        onSelect={this.props.onSelect}
        eventKey={this.props.items}>
        <span>{this.props.items}</span>
      </PaginationButton>
    )];
  }


  renderPageButtons() {
    const [prev, next] = this.createPrevNext();
    const [first, last] = this.createFirstLast();
    const totalItems = [...Array(this.props.items)].map((x, i) => i);

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
          active={this.state.activePage === (item)}
          key={item}
          eventKey={item}
          onSelect={this.props.onSelect}>
          <span>{item}</span>
        </PaginationButton>
      );
    });

    if (startPage > 1) {
      pageButtons[0] = (
        <PaginationButton
          key="frontEllipses"
          disabled={true}
          className="ellip">
          <span>
            {'\u2026'}
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
          className="ellip">
          <span>
            {'\u2026'}
          </span>
        </PaginationButton>
      );
    }
    return [prev, first, ...pageButtons, last, next];
  }

  render() {
    return (
      <nav aria-label="pagination" data-reactroot="" className="pe-pagination">
        {this.renderPageButtons()}
      </nav>
    );
  }
}

export default injectIntl(Pagination);
