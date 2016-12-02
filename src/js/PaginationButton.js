import React from 'react';

const PaginationButton = ({children, active, onSelect}) => (
  <button
    className={active ? 'active pe-btn pagination': 'pe-btn pagination'}
    onClick={onSelect}
  >
    {children}
  </button>
);

export default PaginationButton;
