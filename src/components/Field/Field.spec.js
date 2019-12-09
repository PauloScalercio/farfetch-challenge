import React from 'react';
import { shallow, render } from 'enzyme';

import { Input, Typography } from '@material-ui/core';

import Field from './index';

describe('Atom - Field', () => {
  it('should preserve structure', () => {
    const component = <Field />;
    expect(component).toMatchSnapshot();
  });
  
  it('Should render Typography when props editable is false', () => {

      const props ={
        key: 'placeholder',
        user: {
          name:'placeholder',
          country: 'placeholder',
          email: 'placeholder',
          id: 'placeholder',
          postalCodeAndCity: 'placeholder / placeholder',
        },
        editable: false,
        disabled: false,
      }
      const component = shallow(<Field {...props} />);

      expect(component.exists('Input')).toBe(false);
  })
  it('Should render input when props editable is true', () => {

    const props ={
      key: 'placeholder',
      user: {
        firstName: 'placeholder',
        lastName:'placeholder',
        city: 'placeholder',
        country: 'placeholder',
        email: 'placeholder',
        id: 'placeholder',
        postalCode: 'placeholder',
      },
      editable: true,
      disabled: false,
    }
    const component = render(<Field {...props} />);
    expect(component.name).not.toBe('Typography');
})


});
