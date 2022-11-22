import { compare, hash } from 'bcrypt';

const SALT_ROUNDS = 10;

class Crypto {
  hashPassword(password) {
    return hash(password, SALT_ROUNDS);
  }

  verifyPassword(password, hash) {
    return compare(password, hash);
  }
}

export default new Crypto();
