/* global describe it beforeEach */

import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import { IntlProvider } from 'react-intl';
import TestUtils from 'react-addons-test-utils';
import ComponentOwner from '../src/js/component-owner';

expect.extend(expectJSX);
let called = false;
const onSelect = () => {
  called = true;
  return;
}

describe('Component Owner Suite', () => {
  let renderer;
  const maxButtons = 5;
  const items = 5;
  const activePage = 2;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('1. shallowly renders the component owner using React TestUtils', () => {
    renderer.render(
      <ComponentOwner
        activePage={activePage}
        items={items}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children.length).toEqual(3);
    expect(pagination.props.children[1].length).toEqual(maxButtons);
    expect(pagination.props.children[0].props.children[1].props.children.props.defaultMessage).toEqual('Prev');
    expect(pagination.props.children[2].props.children[1].props.children.props.defaultMessage).toEqual('Next');
  });

  it('2. handles large # of buttons (ellipses at end)', () => {
    renderer.render(
      <ComponentOwner
        activePage={1}
        items={100}
        onSelect={onSelect}
        maxButtons={5}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1][0].key).toEqual('firstItem');
    expect(pagination.props.children[1][maxButtons].key).toEqual('backEllipses');
    expect(pagination.props.children[1][maxButtons].props.disabled).toEqual(true);
    expect(pagination.props.children[1][maxButtons].props.children[1].props.children).toEqual('...');
    expect(pagination.props.children[1][maxButtons + 1].props.children[1]).toEqual(100);
  });

  it('3. handles large # of buttons (ellipses at beginning)', () => {
    renderer.render(
      <ComponentOwner
        activePage={99}
        items={100}
        onSelect={onSelect}
        maxButtons={5}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1][0].key).toEqual('firstItem');
    expect(pagination.props.children[1][1].key).toEqual('frontEllipses');
    expect(pagination.props.children[1][1].props.disabled).toEqual(true);
    expect(pagination.props.children[1][1].props.children[1].props.children).toEqual('...');
  });

  it('4. handles large # of buttons (ellipses at both ends)', () => {
    renderer.render(
      <ComponentOwner
        activePage={40}
        items={100}
        onSelect={onSelect}
        maxButtons={5}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1][0].key).toEqual('firstItem');
    expect(pagination.props.children[1][1].key).toEqual('frontEllipses');
    expect(pagination.props.children[1][maxButtons].key).toEqual('backEllipses');
    expect(pagination.props.children[1][maxButtons + 1].props.children[1]).toEqual(100);
  })

  it('5. handles fewer pages than maxButtons', () => {
    renderer.render(
      <ComponentOwner
        activePage={1}
        items={3}
        onSelect={onSelect}
        maxButtons={5}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1].length).toEqual(3);
    expect(pagination.props.children.length).toEqual(3);
  });

  it('6. handles onSelect', () => {
    const container = TestUtils.renderIntoDocument(
      <IntlProvider locale="en">
        <ComponentOwner
          activePage={1}
          items={3}
          onSelect={onSelect}
          maxButtons={5}
        />
      </IntlProvider>
    );

    const paginationButton = TestUtils.scryRenderedDOMComponentsWithTag(container, 'button')[4];
    TestUtils.Simulate.click(paginationButton);

    expect(called).toEqual(true);
  });

  it('7. handles defaults (maxButtons not set)', () => {
    renderer.render(
      <ComponentOwner
        activePage={1}
        items={5}
        onSelect={onSelect}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children.length).toEqual(3);
    expect(pagination.props.children[1].length).toEqual(5);
  });
});
