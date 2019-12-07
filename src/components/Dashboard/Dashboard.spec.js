import React from 'react';

import Dashboard from './index';

describe('Atom - Card', () => {
  it('should preserve structure', () => {
    const component = <Dashboard />;
    expect(component).toMatchSnapshot();
  });
});
