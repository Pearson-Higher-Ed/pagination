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
  const maxButtons = 5;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('shallowly renders the component owner using React TestUtils', () => {
    renderer.render(
      <ComponentOwner
        activePage={1}
        items={3}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children.length).toEqual(3);
    expect(pagination.props.children[1].length).toEqual(4);
    expect(pagination.props.children[0].props.children[1].props.children).toEqual('Prev');
    expect(pagination.props.children[2].props.children[1].props.children).toEqual('Next');
  });

  it('handles large # of buttons (ellipses at end)', () => {
    renderer.render(
      <ComponentOwner
        activePage={1}
        items={50}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1].length).toEqual(maxButtons + 2);
    expect(pagination.props.children[1][maxButtons].props.children).toEqual('...');
  })

  it('handles large # of buttons (ellipses at beginning)', () => {
    renderer.render(
      <ComponentOwner
        activePage={50}
        items={50}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1].length).toEqual(maxButtons + 2);
    expect(pagination.props.children[1][1].props.children).toEqual('...');
  })

  it('handles large # of buttons (ellipses at both ends)', () => {
    renderer.render(
      <ComponentOwner
        activePage={25}
        items={50}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    expect(pagination.props.children[1].length).toEqual(maxButtons + 2);
    expect(pagination.props.children[1][1].props.children).toEqual('...');
    expect(pagination.props.children[1][maxButtons].props.children).toEqual('...');
  })

  it('handles fewer pages than maxButtons', () => {

  });

  it('handles onSelect', () => {

  });

  it('handles defaults', () => {

  });
});
