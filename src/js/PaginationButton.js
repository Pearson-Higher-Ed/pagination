import React from 'react';

const PaginationButton = ({children, active}) => (
  <button className={active ? 'active': ''}>
    {children}
  </button>
);

export default PaginationButton;
