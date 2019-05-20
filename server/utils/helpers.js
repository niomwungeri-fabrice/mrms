import { hashSync, genSaltSync } from "bcrypt";

export const hashedPassword = async password => {
  const salt = await genSaltSync(
    parseFloat(process.env.BCRYPT_HASH_ROUNDS) || 10
  );
  return hashSync(password, salt);
};
