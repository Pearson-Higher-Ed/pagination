import React from 'react';

const PaginationButton = ({children, active, onSelect, disabled, eventKey}) => {
  const select = (event) => {
    return onSelect(eventKey, event);
  };

  return (
    <button
      type="button"
      {...active ? {'aria-current': 'page'} : {}}
      onClick={select}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
