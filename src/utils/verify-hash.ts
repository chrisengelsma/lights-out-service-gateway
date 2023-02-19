import bcrypt from 'bcrypt';

/**
 * Verifies a string against a hash.
 * @param str  the string compare.
 * @param hash the hash to compare
 * @returns true, if hash is verified; false, otherwise.
 */
export async function verifyHash(str: string, hash: string) {
  try {
    return bcrypt.compare(str, hash);
  } catch (e) {
    return e;
  }
}
