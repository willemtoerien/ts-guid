import { isGuid } from './isGuid';
import { newGuid } from './newGuid';

describe('newGuid', () => {
  test('Guids are generated correctly.', () => {
    const guid = newGuid();
    expect(isGuid(guid)).toBeTruthy();
  });
});
