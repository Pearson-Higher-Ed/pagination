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
  const items = 5;
  const activePage = 2;
  const lowerMiddlePage = 1 + Math.floor((maxButtons + 2) / 2);
  const upperMiddlePage = items - Math.ceil(maxButtons / 2);
  let displayButtons = maxButtons;
  if (items < maxButtons + 2) {
    displayButtons = items - 2;
  }

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

    if (items >= maxButtons + 2) {
      expect(pagination.props.children[1].length).toEqual(maxButtons + 2);
    }

    expect(pagination.props.children[0].props.children[1].props.children).toEqual('Prev');
    expect(pagination.props.children[2].props.children[1].props.children).toEqual('Next');
  });

  it('2. handles large # of buttons (ellipses at end)', () => {
    renderer.render(
      <ComponentOwner
        activePage={activePage}
        items={items}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    if (items > maxButtons + 2 && activePage < upperMiddlePage) {
      expect(pagination.props.children[1][displayButtons].props.children).toEqual('...');
    }
    if (items <= maxButtons + 2 || activePage >= upperMiddlePage) {
      expect(pagination.props.children[1][displayButtons].props.children.props.children[1]).toEqual(items - 1);
    }
  })

  it('3. handles large # of buttons (ellipses at beginning)', () => {
    renderer.render(
      <ComponentOwner
        activePage={activePage}
        items={items}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    if (items > maxButtons + 2 && activePage > lowerMiddlePage) {
      expect(pagination.props.children[1][1].props.children).toEqual('...');
    }
    if (items <= maxButtons + 2 || activePage <= lowerMiddlePage) {
      expect(pagination.props.children[1][1].props.children.props.children[1]).toEqual(2);
    }
  })

  it('4. handles large # of buttons (ellipses at both ends)', () => {
    renderer.render(
      <ComponentOwner
        activePage={activePage}
        items={items}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    if (items > maxButtons + 2 && activePage > lowerMiddlePage && activePage < upperMiddlePage) {
      expect(pagination.props.children[1][1].props.children).toEqual('...');
      expect(pagination.props.children[1][maxButtons].props.children).toEqual('...');
    }
  })

  it('5. handles fewer pages than maxButtons', () => {
    renderer.render(
      <ComponentOwner
        activePage={activePage}
        items={items}
        onSelect={onSelect}
        maxButtons={maxButtons}
      />
    );

    const pagination = renderer.getRenderOutput();

    if (items < maxButtons + 2) {
      expect(pagination.props.children[1].length).toEqual(items);
      for (let i = 0; i < items; i++) {
        expect(pagination.props.children[1][i].props.children.props.children[1]).toEqual.toString(i + 1);
      }
    }
    
  });

  it('6. handles onSelect', () => {

  });

  it('7. handles defaults', () => {

  });
});
