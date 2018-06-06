export * from './isGuid';
export * from './newGuid';
export * from './emptyGuid';

declare global {
  /** A  {@linkcode Guid} type adds a check if the value is a {@linkcode Guid}. */
  type Guid = string & { isGuid: true };
}
