/**
 * Checks if an object is a guid.
 * @param obj The object to check.
 * @returns True if the object is a guid.
 */
export function isGuid(obj: any): boolean {
  if (typeof obj !== 'string') {
    return false;
  }

  const pattern = '^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-(4|0)[0-9A-Fa-f]{3}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$';
  const validator = new RegExp(pattern, 'i');
  return validator.test(obj);
}
