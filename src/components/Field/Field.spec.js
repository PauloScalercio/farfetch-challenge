import React from 'react';

import Field from './index';

describe('Atom - Card', () => {
  it('should preserve structure', () => {
    const component = <Field />;
    expect(component).toMatchSnapshot();
  });
});
