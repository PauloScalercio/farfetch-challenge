import React from 'react';

import Button from './index';

describe('Atom - Button', () => {
  it('should preserve structure', () => {
    const component = <Button />;
    expect(component).toMatchSnapshot();
  });
});
