import React from 'react';
import { shallow } from 'enzyme';
import { RestrictedContentExample } from '../../../src/features/demo';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<RestrictedContentExample />);
  expect(renderedComponent.find('.demo-restricted-content-example').length).toBe(1);
});
