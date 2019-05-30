---
to: src/components/<%= folder %>/<%= component %>/index.jsx
---
<% let componentName = h.inflection.camelize([folder, component].join('-').replace(/-/g, '_')) -%>
<% let componentNameBase = componentName + 'Base' -%>
<% let hasHooks = additionalFeatures.includes('hooks') -%>
<% let hasStyles = additionalFeatures.includes('styles.css') -%>
import React<%= hasHooks ? ', { useCallback, useState }' : null %> from 'react';
<% if (hasStyles) { -%>
import styles from './styles.css';
<% } -%>

export const text = {
<% if (hasHooks) { -%>
  clicked: 'Clicked',
  notClicked: 'Not Clicked',
<% } -%>
  name: '<%= componentName %> component',
};

export const <%= hasHooks ? componentNameBase : componentName %> = ({ <%= hasHooks ? 'isClicked, onClick, ' : null %>title }) => (
  <div<%= hasStyles ? ' className={styles.root}' : null %>>
    <span>{text.name}</span>
    <p>{title}</p>
<% if (hasHooks) { -%>
    <button onClick={onClick}>
      {isClicked ? text.clicked : text.notClicked}
    </button>
<% } -%>
  </div>
);

<% if (hasHooks) { -%>
export const <%= componentName %> = ({ title }) => {
  const [isClicked, setState] = useState(false);
  const onClick = useCallback(() => setState(!isClicked), [isClicked])

  return (
    <<%= componentNameBase %>
      isClicked={isClicked}
      onClick={onClick}
      title={title}
    />
  );
};
<% } -%>