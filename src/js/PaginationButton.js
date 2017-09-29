import React from 'react';

const PaginationButton = ({children, active, onSelect, disabled, className, eventKey}) => {
  const select = (event) => {
    return onSelect(eventKey, event);
  };

  return (
    <button
      className={className}
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
