import React from 'react';
import { mount } from 'enzyme';
import PaginationButton from '../src/js/PaginationButton';
import PaginationContainer from '../src/js/PaginationContainer';

describe('PaginationContainer Owner Suite', () => {

  it('render the pagination Container using defaults', () => {
    const wrapper = mount(
      <PaginationContainer
        activePage={1}
        pages={5}
      />
    );

    // should look like this: (<) 1 2 3 4 5 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(7);

    // verify the (<) button
    expect(buttons.first().props().disabled).toEqual(true);
    expect(buttons.first().find('.pagination-prev .pe-icon--chevron-back-sm-18').exists()).toEqual(true);
    expect(buttons.first().find('title').text()).toEqual('previous');

    // verify some buttons in the middle
    expect(buttons.at(1).props().active).toEqual(true);
    expect(buttons.at(1).text()).toEqual('1');
    expect(buttons.at(5).props().active).toEqual(false);
    expect(buttons.at(5).text()).toEqual('5');

    // verify the (>) button
    expect(buttons.last().props().disabled).toEqual(false);
    expect(buttons.last().find('.pagination-next .pe-icon--chevron-next-sm-18').exists()).toEqual(true);
    expect(buttons.last().find('title').text()).toEqual('next');
  });

  it('click the Last Page button and see the pages change', () => {
    const wrapper = mount(
      <PaginationContainer
        activePage={1}
        pages={100}
      />
    );

    // should look like this: (<) 1 2 3 4 5 ... 100 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(9);
    expect(buttons.at(6).text()).toEqual('\u2026');
    expect(buttons.at(7).text()).toEqual('100');

    // click the Last Page button and then should look like this: (<) 1 ... 96 97 98 99 100 (>)
    buttons.at(7).simulate('click');
    const newButtons = wrapper.find(PaginationButton);
    expect(newButtons.at(2).text()).toEqual('\u2026');
    expect(newButtons.at(3).text()).toEqual('96');
  });

});
