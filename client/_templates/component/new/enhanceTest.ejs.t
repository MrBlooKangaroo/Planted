---
to: "<%= additionalFeatures.includes('enhance') ? `src/components/${folder}/${component}/__tests__/enhance.js` : null %>"
---
import { title } from '../enhance';

describe('title', () => {
  it('should return a title', () => {
    const props = {};
    const result = title(props);
    expect(result).toBe('Title Prop');
  });

  it('should fail', () => {
    expect(true).toBe(false);
  });
});
