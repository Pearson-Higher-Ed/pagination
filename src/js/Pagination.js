import '../scss/pagination.scss';
import React from 'react';
import PropTypes from 'prop-types';
import PaginationButton from './PaginationButton';
import uuid from 'uuid';

class Pagination extends React.Component {
  static propTypes = {
    pages: PropTypes.number.isRequired,
    activePage: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    maxButtons: PropTypes.number,
    prevTitle: PropTypes.string,
    nextTitle: PropTypes.string,
    compactText: PropTypes.string,
    paginationType: PropTypes.oneOf(['standard', 'compact'])
  };

  static defaultProps = {
    maxButtons: 5,
    activePage: 1,
    prevTitle: 'previous',
    nextTitle: 'next',
    paginationType: 'standard'
  };

  // add screen resize listener
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  createPrevNext() {
    const i_id='_'+uuid.v1();

    return [(
      <PaginationButton
        key="prev"
        className={"prev"}
        active={false}
        disabled={this.props.activePage === 1}
        onSelect={this.props.onSelect}
        eventKey={this.props.activePage - 1}>
        <span className="pagination-prev">
          <svg focusable="false"
               role="img"
               aria-labelledby = {i_id}
               className = "pe-icon--chevron-back-sm-18">
            <title id={i_id}>{this.props.prevTitle}</title>
            <use xlinkHref="#chevron-back-sm-18"></use>
          </svg>
        </span>
      </PaginationButton>
    ), (
      <PaginationButton
        key="next"
        className={"next"}
        active={false}
        disabled={this.props.activePage === this.props.pages}
        onSelect={this.props.onSelect}
        eventKey={this.props.activePage + 1}>
        <span className="pagination-next">
          <svg focusable="false"
               role="img"
               aria-labelledby = {'pe'+i_id}
               className = "pe-icon--chevron-next-sm-18">
            <title id={'pe'+i_id}>{this.props.nextTitle}</title>
            <use xlinkHref="#chevron-next-sm-18"></use>
          </svg>
        </span>
      </PaginationButton>
    )];
  }

  createEllipsis(key) {
    return (
      <PaginationButton
        key={key}
        disabled={true}
        className="ellipsis"
      >
        <svg focusable="false"
             role="img"
             className="pe-icon--ellipsis-18">
          <use xlinkHref="#ellipsis-18"></use>
        </svg>
      </PaginationButton>
    )
  }

  createFirstLast() {
    if (this.props.pages === 1) {
      return [
        (
          <PaginationButton
            key="firstItem"
            active={this.props.activePage === 1}
            onSelect={this.props.onSelect}
            eventKey={1}>
            <span>1</span>
          </PaginationButton>
        )
      ]
    } else {
      return [(
        <PaginationButton
          key="firstItem"
          active={this.props.activePage === 1}
          onSelect={this.props.onSelect}
          number={1}
          eventKey={1}>
          <span>1</span>
        </PaginationButton>
      ), (
        <PaginationButton
          key="maxpages"
          active={this.props.activePage === this.props.pages}
          onSelect={this.props.onSelect}
          eventKey={this.props.pages}
          number={this.props.pages}
        >
          <span>{this.props.pages}</span>
        </PaginationButton>
      )];
    }
  }


  renderPageButtons(smallScreen) {
    const [prev, next] = this.createPrevNext();

    if (this.props.paginationType === 'compact') {
      const compactText = (
        <span key="compact" className="compact-text">
          {this.props.compactText}
        </span>
      );
      return [prev, compactText, next];
    }

    const [first, last] = this.createFirstLast();
    const totalPages = [...Array(this.props.pages)].map((x, i) => i);

    // if no buttons to the left when only displaying maxButtons, don't show ellipses on left
    // if no buttons to the right when only displaying maxButtons, don't show ellipses on right
    // otherwise show ellipses on left and/or right

    //change display button number in the case of screen smaller than 768px
    let displayButtons = this.props.maxButtons;
    if (smallScreen == true) {
      displayButtons = 3;
      if (this.props.pages < 5) {
        displayButtons = this.props.pages - 2;
      }
    } else {
      if (this.props.pages < this.props.maxButtons + 2) {
        displayButtons = this.props.pages - 2;
      }
    }


    let startPage = (this.props.activePage - 1) - parseInt(displayButtons / 2, 10);
    if (this.props.activePage <= parseInt(displayButtons / 2, 10) + 1) {
      startPage = 1;
    }
    if (this.props.activePage >= this.props.pages - parseInt(displayButtons / 2, 10)) {
      startPage = this.props.pages - displayButtons - 1;
    }

    const endPage = (startPage + displayButtons);

    const pageButtons = totalPages.slice(startPage, endPage).map((item) => {
      return (
        <PaginationButton
          active={this.props.activePage === (item +1)}
          key={item+1}
          eventKey={item+1}
          onSelect={this.props.onSelect}
          number={item + 1}>
          <span>{item +1}</span>
        </PaginationButton>
      );
    });

    if (startPage > 1) {
      pageButtons[0] = this.createEllipsis("frontEllipses");
    }

    const checkBackEllipses = displayButtons > 0;

    if (checkBackEllipses && last.props.eventKey > pageButtons[displayButtons - 1].props.eventKey + 1) {
      pageButtons[displayButtons - 1] = this.createEllipsis("backEllipses");
    }
    return [prev, first, ...pageButtons, last, next];
  }

  render() {
    const { width } = this.state;
    const isSmallScreen = width <= 768;
    if (isSmallScreen) {
      return (
        <nav aria-label="pagination" data-reactroot="" className="pe-pagination">
          {this.renderPageButtons(true)}
        </nav>
      );
    } else {
      return (
        <nav aria-label="pagination" data-reactroot="" className="pe-pagination">
          {this.renderPageButtons(false)}
        </nav>
      );
    }
  }
}

export default Pagination;
