import bcrypt from 'bcrypt';

/**
 * Generates a hash from a provided string.
 * The salt is incorporated with the hash (encoded in base-64 format).
 * @param str        the string to hash.
 * @param saltRounds the number of salt rounds, defaults to 10.
 * @returns the hash.
 */
export async function generateHash(str: string, saltRounds: number = 10) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(str, salt);
  } catch (e) {
    return e;
  }
}
