/**
 * Checks if an object is a {@linkcode Guid}.
 * @param obj The object to check.
 * @returns True if the object is a {@linkcode Guid}.
 */
export function isGuid(obj: any): obj is Guid {
  if (obj.isGuid) {
    return true;
  }

  if (typeof obj !== 'string') {
    return false;
  }

  const validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
  return validator.test(obj);
}
