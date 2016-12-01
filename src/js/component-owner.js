import '../scss/pagination.scss';
import React, {PropTypes} from 'react';
import PaginationButton from './PaginationButton';

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
      <PaginationButton>
        1
      </PaginationButton>
    );

    const last = (
      <PaginationButton>
        5
      </PaginationButton>
    );

    const pageButtons = Array.from(Array(this.props.items).keys()).slice(1, this.props.maxButtons - 1).map((item) => {
      return (
        <PaginationButton
          active={this.props.activePage === item}
          key={item}
        >
          {item + 1}
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
          Prev
        </PaginationButton>
          {this.renderPageButtons()}
        <PaginationButton
          active={false}
        >
          Next
        </PaginationButton>
      </div>
    )
  }

}

export default ComponentOwner;
