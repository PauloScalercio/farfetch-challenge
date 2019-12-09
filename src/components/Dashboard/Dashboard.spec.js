import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './index';

describe('Atom - Dashboard', () => {
  it('should preserve structure', () => {
    const component = <Dashboard />;
    expect(component).toMatchSnapshot();
  });
  it('Should render one card when prop user is passed with one element', () => {
    const props = {
      user: {
        firstName: 'placeholder',
        lastName:'placeholder',
        city: 'placeholder',
        country: 'placeholder',
        email: 'placeholder',
        id: 'placeholder',
        postalCode: 'placeholder',
      },
      handleCheckout: jest.fn(),
      handleUpdateUser: jest.fn(),

    }
    const component = shallow(<Dashboard {...props}/>);
    expect(component.children().length).toBe(1);
  });
});
