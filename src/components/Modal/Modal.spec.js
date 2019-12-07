import React from 'react';

import Modal from './index';

describe('Atom - Card', () => {
  it('should preserve structure', () => {
    const component = <Modal />;
    expect(component).toMatchSnapshot();
  });
});
