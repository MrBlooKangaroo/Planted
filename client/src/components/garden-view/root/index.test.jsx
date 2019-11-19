import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'jest-enzyme';
import GardenView from '.';
import HeaderRow from '../HeaderRow';

configure({ adapter: new Adapter() });
afterEach(cleanup);

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  headers: { authorization: localStorage.getItem('token') },
});

describe('Garden Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      nooks: [{ name: 'Foyer' }, { name: 'Bathroom' }],
    };
    wrapper = mount(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <GardenView {...props} />
        </BrowserRouter>
      </ApolloProvider>,
    );
  });

  it('should mount the Garden component', () => {
    const GardenComponent = wrapper.find(GardenView);
    expect(GardenComponent).toExist();
  });

  it('should mount the HeaderRow component', () => {
    const headerRowComponent = wrapper.find(HeaderRow);
    expect(headerRowComponent).toExist();
  });

  it('should be passed all required props', async () => {
    expect(wrapper.props().nooks).toBeDefined();
    expect(wrapper.props().nooks.length).toBe(2);
  });

  it('should render a div with the className of gardenContainer', () => {
    const plantTypeList = wrapper.find('div.gardenContainer');
    expect(plantTypeList).toBeDefined();
  });
});
