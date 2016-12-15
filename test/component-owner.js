/* global describe it expect */

import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import {IntlProvider} from 'react-intl';
import TestUtils from 'react-addons-test-utils';
import ComponentOwner from '../src/js/component-owner';

expect.extend(expectJSX);

describe('Component Owner Suite', () => {
  let renderer;
  let intlProvider;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    intlProvider = new IntlProvider({ locale: 'en' }, {});
  });

  it('shallowly renders the component owner using React TestUtils', () => {

    const { intl } = intlProvider.getChildContext();

    renderer.render(
      <ComponentOwner
        items={3}
        intl={intl}
        activePage={1}
      />
      , { intl }
    );


    const pagination = renderer.getRenderOutput();
    expect(pagination.props.children[0].props.children[1].props.children).toEqual('Prev');
    expect(pagination.props.children[2].props.children[1].props.children).toEqual('Next');
  });
});
