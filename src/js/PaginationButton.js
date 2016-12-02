import React from 'react';

const PaginationButton = ({children, active, onSelect, disabled}) => (
  <button
    className={active ? 'active pe-btn pagination': 'pe-btn pagination'}
    onClick={onSelect}
    disabled={disabled}
  >
    {children}
  </button>
);

export default PaginationButton;
