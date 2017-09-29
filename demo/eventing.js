import ReactDOM from 'react-dom';
import React    from 'react';

import { PaginationContainer } from '../index';


document.body.addEventListener('o.InitPagination', e => {
  ReactDOM.render(
    React.createElement(PaginationContainer, e.detail.props, e.detail.props.children)
    , document.getElementById(e.detail.elementId)
  );
});
