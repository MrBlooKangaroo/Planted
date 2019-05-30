---
to: "<%= additionalFeatures.includes('styles.css') ? `src/components/${folder}/${component}/styles.css` : null %>"
---
.root {
  border: 1px solid var(--black);
}
