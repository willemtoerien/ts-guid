import { emptyGuid } from './emptyGuid';
import { isGuid } from './isGuid';

describe('isGuid', () => {
  test('For valid guids.', () => {
    expect(isGuid(emptyGuid)).toBeTruthy();
  });

  test('For invalid guids.', () => {
    expect(isGuid('nonsense')).toBeFalsy();
  });
});
