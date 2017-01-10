# pagination

## Summary

Provides pagination links component. Shows page buttons up to the maxButtons value as well as a Prev and Next button. Will show ellipses button(s) when applicable. Will highlight the activePage. Will always show first and last page buttons.

## Usage

Constructor (vanilla JS)

```javascript
	// Constructor
	new Pagination({
		elementId: 'ID of element to attach to',
		items: 'number of pages total',
		activePage: '(optional) defaults to 1'
	});

	// Fires when user clicks a page button. Provides a corresponding page number. Sets activePage.
	document.addEventListener('o-pagination-select', (event) => console.log(''))

	// Use this event to manually set activePage
	document.dispatchEvent(new CustomEvent('o-pagination-setActive', {detail: {activePage: 1}}))
```
React props

- `items` (number) shows ...
- `activePage` (number) corresponds to highlighted page button and is centered in component unless it's near the beginning or end of page list
- `onSelect` (function) callback fired when a button is clicked
- `maxButtons` (number) defaults to 7. Determines the number of page buttons to show

## Next Step

If you are a consumer of this component, see guidance on [usage](README.usage.md).

If you are a contributor to this component's development, see guidance on [contributing](README.contribute.md).
