/* global describe it beforeEach */

import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ComponentOwner from '../src/js/component-owner';

expect.extend(expectJSX);
const onSelect = () => true;

describe('Component Owner Suite', () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('shallowly renders the component owner using React TestUtils', () => {
    renderer.render(
      <ComponentOwner
        activePage={1}
        items={3}
        onSelect={onSelect}
        maxButtons={5}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children.length).toEqual(3);
    expect(pagination.props.children[1].length).toEqual(4);
    expect(pagination.props.children[0].props.children[1].props.children).toEqual('Prev');
    expect(pagination.props.children[2].props.children[1].props.children).toEqual('Next');
  });

  it('handles large buttons (showing ellipses)', () => {

  })

  it('hanldes fewer pages than maxButtons', () => {

  });

  it('handles onSelect', () => {

  });

  it('handles defaults', () => {

  });
});
