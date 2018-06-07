/**
 * Checks if an object is a guid.
 * @param obj The object to check.
 * @returns True if the object is a guid.
 */
export function isGuid(obj: any): boolean {
  if (typeof obj !== 'string') {
    return false;
  }

  const validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
  return validator.test(obj);
}
