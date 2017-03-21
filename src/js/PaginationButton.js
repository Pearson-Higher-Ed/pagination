import React from 'react';

const PaginationButton = ({children, active, onSelect, disabled, eventKey}) => {
  const select = (event) => {
    return onSelect(eventKey, event);
  };

  return (
    <button
      className={active ? 'active pe-btn pagination': 'pe-btn pagination'}
      onClick={select}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
