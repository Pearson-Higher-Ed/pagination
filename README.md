# Pagination ReactJS control
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/pagination.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/pagination)

Provides a [React](http://facebook.github.io/react) pagination component. Shows page buttons up to the maxButtons value as well as a Prev and Next button. Will show ellipses button(s) when applicable. Will highlight the activePage. Will always show first and last page buttons.

## Usage

This project supports [Node v4+](https://nodejs.org) and npm 2+ installed in your development toolchain.

Install and save in your package.json:

    npm install @pearson-components/pagination --save

Import Pagination component:

    import Pagination from '@pearson-components/pagination';

### React props

- `pages` (number) is the total number of pages (required).
- `activePage` (number) defaults to 1.  Corresponds to highlighted page button and is centered in component unless it's near the beginning or end of page list.
- `onSelect` (function) callback fired when a button is clicked (required).
- `maxButtons` (number) defaults to 5. Determines the number of page buttons to show. Prev and Next buttons are always shown. First and Last page buttons are always shown. The number of buttons in between will not exceed maxButtons.
- `prevTitle` (string) defaults to 'previous' and is the title of the (<) button. For i18n, set to translation of 'previous' 
- `nextTitle` (string) defaults to 'next' and is the title of the (>) button. For i18n, set to translation of 'next'
- `paginationType` (string) defaults to 'standard'.  May be either 'standard' or 'compact'
- `compactText` (string) only used if paginationType is 'compact'.  For i18n, suggested to be translated value of 'Page {activePage} of {pages}', but can be any text

### External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or
available from a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

## Next Step

If you are a contributor to this component's development, see guidance on [contributing](README.contribute.md).
