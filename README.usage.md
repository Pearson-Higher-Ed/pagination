# Usage

This project supports [Node v4+](https://nodejs.org) and npm 2+ installed in your development toolchain.

Install and save in your package.json:

    npm install @pearson-components/[component-name] --save

## External Dependencies

React and ReactDOM (v0.14 or v15) are external dependencies required to use this component. They are npm-installable or
available from a third-party [CDN](https://cdnjs.com/libraries/react/).

This component targets the styling in the [Pearson Elements SDK](https://www.npmjs.com/package/pearson-elements).

## Cross-browser Compatibility

The following [Polyfill.io](https://cdn.polyfill.io/v2/docs/examples) service is recommended for consuming this
component cross-browser:

```html
<script src="https://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent,Intl.~locale.en,Intl.~locale.fr"></script>
```

The CustomEvent polyfill is for Internet Explorer, and the Intl.js polyfill is for Safari. As you support more languages,
add them to the list of features requested.

If your browser already supports a feature, this service automatically optimizes and does not bring down unnecessary code.

## How to Consume in an Application

See the /demo directory for example usage.

The transpiled, minified bundle will be available in /node_modules/@pearson-components in the component
/build directory after you have npm installed this component in your project.

Eventing example:

```js
	// Fires when user clicks a page button. Provides a corresponding page number. Sets activePage.
	document.addEventListener('o-pagination-setActive', (event) => console.log(event.detail.activePage))

	// Use this event to manually set activePage
	document.dispatchEvent(new CustomEvent('o-pagination-setActive', {detail: {activePage: 1}}))
```

Direct API example:

```js
	// Constructor
	new Pagination({
		elementId: 'ID of element to attach to',
		items: 'number of pages total',
		activePage: '(optional) defaults to 1'
	});
```

### Component Configuration

```js
	// Default export is vanilla JS class. Destructure to use React component directly.
	import {PaginationIntl} from 'Pagination';

    <PaginationIntl
    	locale="en"
    	items={100}
    	activePage={1}
    	maxButtons={7}
    	onSelect={(eventKey, event) => {console.log(eventKey)}}
    />
```

### Eventing

<table>
    <tr>
        <th>Event</th><th>detail</th>
    </tr
    <tr>
        <td>o-pagination-setActive</td><td>Fires on every page button click. Alternatively, can be dispatched with `{detail: {activePage: 1}}` to set activePage.</td>
    </tr>
</table>
