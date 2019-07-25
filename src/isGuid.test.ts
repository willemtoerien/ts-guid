import { emptyGuid } from './emptyGuid';
import { isGuid } from './isGuid';

describe('isGuid', () => {
  test('For valid guids.', () => {
    expect(isGuid(emptyGuid)).toBeTruthy();
    expect(isGuid('BA696052-41F6-4A63-A62F-D014745F04F6')).toBeTruthy();
    expect(isGuid('2622FC61-B97C-4214-8244-F3186BF80D40')).toBeTruthy();
  });

  test('For invalid guids.', () => {
    expect(isGuid('70dcbeddbc4e4547b50cbe1bef04d488')).toBeFalsy();
    expect(isGuid('70dcbedd-bc4e-5547-b50c-be1bef04d488')).toBeFalsy();
    expect(isGuid('70dgbedd-bc4e-4547-b50c-be1bef04d488')).toBeFalsy();
    expect(isGuid('70dcbedd-bc4e-4547-b50c-be1bef04d48')).toBeFalsy();
  });
});
