import React from 'react';
import { shallow, mount } from 'enzyme';
import Pagination from '../src/js/Pagination';
import PaginationButton from '../src/js/PaginationButton';

describe('Pagination Owner Suite', () => {

  it('render the pagination control using defaults', () => {
    const wrapper = shallow(
      <Pagination
        onSelect={() => (1)}
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
    expect(buttons.at(1).dive().text()).toEqual('1');
    expect(buttons.at(5).props().active).toEqual(false);
    expect(buttons.at(5).dive().text()).toEqual('5');

    // verify the (>) button
    expect(buttons.last().props().disabled).toEqual(false);
    expect(buttons.last().find('.pagination-next .pe-icon--chevron-next-sm-18').exists()).toEqual(true);
    expect(buttons.last().find('title').text()).toEqual('next');
  });

  it('handles large # of buttons (ellipses at end)', () => {
    const wrapper = shallow(
      <Pagination
        activePage={1}
        pages={100}
        onSelect={() => (1)}
      />
    );

    // should look like this: (<) 1 2 3 4 5 ... 100 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(9);
    expect(buttons.at(1).props().active).toEqual(true);
    expect(buttons.at(2).dive().text()).toEqual('2');
    expect(buttons.at(6).dive().text()).toEqual('\u2026');
    expect(buttons.at(7).dive().text()).toEqual('100');
  });

  it('handles large # of buttons (ellipses at beginning)', () => {
    const wrapper = shallow(
      <Pagination
        activePage={99}
        pages={100}
        onSelect={() => (1)}
      />
    );

     // should look like this: (<) 1 ... 96 97 98 99 100 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(9);
    expect(buttons.at(2).dive().text()).toEqual('\u2026');
    expect(buttons.at(3).dive().text()).toEqual('96');
    expect(buttons.at(6).dive().text()).toEqual('99');
    expect(buttons.at(6).props().active).toEqual(true);
    expect(buttons.at(7).dive().text()).toEqual('100');
  });

  it('handles large # of buttons (ellipses at both ends)', () => {
    const wrapper = shallow(
      <Pagination
        activePage={40}
        pages={100}
        onSelect={() => (1)}
      />
    );

    // should look like this: (<) 1 ... 39 40 41 ... 100 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(9);
    expect(buttons.at(2).dive().text()).toEqual('\u2026');
    expect(buttons.at(4).dive().text()).toEqual('40');
    expect(buttons.at(4).props().active).toEqual(true);
    expect(buttons.at(6).dive().text()).toEqual('\u2026');
    expect(buttons.at(7).dive().text()).toEqual('100');
  });

  it('handles fewer pages than maxButtons', () => {
    const wrapper = shallow(
      <Pagination
        pages={3}
        onSelect={() => (1)}
      />
    );

    // should look like this: (<) 1 2 3 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(5);
    expect(buttons.at(3).dive().text()).toEqual('3');
  });

  it('handles onSelect', () => {
    const mockFn = jest.fn();
    const wrapper = mount(
      <Pagination
        pages={5}
        onSelect={mockFn}
      />
    );

    const buttons = wrapper.find(PaginationButton);
    buttons.at(3).simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  });

  it('handles maxButtons set)', () => {
    const wrapper = shallow(
      <Pagination
        pages={10}
        maxButtons={15}
        onSelect={() => (1)}
      />
    );

    // should look like this: (<) 1 2 3 4 5 6 7 8 9 10 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(12);
    expect(buttons.at(10).dive().text()).toEqual('10');
  });

  it('shows compact style)', () => {
    const wrapper = shallow(
      <Pagination
        pages={20}
        onSelect={() => (1)}
        paginationType="compact"
        compactText="Page 1 of 20"
      />
    );

    // should look like this: (<) Page 1 of 20 (>)
    const buttons = wrapper.find(PaginationButton);
    expect(buttons.length).toEqual(2);
    expect(wrapper.find('.compact-text').text()).toEqual('Page 1 of 20');
  });


});
