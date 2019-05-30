---
to: src/components/<%= folder %>/<%= component %>/index.test.jsx
---
<% let componentName = h.inflection.camelize([folder, component].join('-').replace(/-/g, '_')) -%>
<% let hasHooks = additionalFeatures.includes('hooks') -%>
import React from 'react';
import { cleanup, <%= hasHooks ? 'fireEvent, ' : null %>render } from 'react-testing-library';
import { <%= componentName %>, text } from './index';

afterEach(cleanup);

describe('<%= componentName %>', () => {
  let getByText, props;

  beforeEach(() => {
    props = {
      title: 'Title Prop',
    };
    ({ getByText } = render(<<%= componentName %> {...props} />));
  });

  it('should render name text', () => {
    getByText(text.name);
  });

  it('should render title prop', () => {
    getByText(props.title);
  });
<% if (hasHooks) { -%>
  it('should have a clickable button', () => {
    fireEvent.click(getByText(text.notClicked));
    getByText(text.clicked);
  });
<% } -%>

  it('should fail', () => {
    expect(true).toBe(false);
  });
});
