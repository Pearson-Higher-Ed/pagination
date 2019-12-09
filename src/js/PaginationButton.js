import React from 'react';

const PaginationButton = ({children, active, onSelect, disabled, className, eventKey, number, lastnumber}) => {
  const select = (event) => {
    return onSelect(eventKey, event);
  };

  return (
    <button
      className={className}
      type="button"
      {...active ? {'aria-current': 'page'} :
        className === 'prev' ? {'aria-label': "Previous page"} :
          className === "ellipsis" ? {'aria-label': "Additional pages"} :
          className === 'next' ? {'aria-label': "Next page"} : {'aria-label': "page " + number}
      }
      onClick={select}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
