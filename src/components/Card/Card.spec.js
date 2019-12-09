import React from 'react';
import { shallow, render } from 'enzyme';
import Card from './index';

describe('Atom - Card', () => {
  it('should preserve structure', () => {
    const component = <Card />;
    expect(component).toMatchSnapshot();
  });

});
