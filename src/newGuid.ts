/**
 * Generates a new {@linkcode Guid}.
 * @returns The newly generated {@linkcode Guid}.
 */
export function newGuid(): Guid {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character: string) => {
    const random = Math.random() * 16 | 0;
    const value = character === 'x' ? random : (random & 0x3 | 0x8);
    return value.toString(16);
  }) as Guid;
}
