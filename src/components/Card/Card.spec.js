import React from 'react';

import Card from './index';

describe('Atom - Card', () => {
  it('should preserve structure', () => {
    const component = <Card />;
    expect(component).toMatchSnapshot();
  });
});
