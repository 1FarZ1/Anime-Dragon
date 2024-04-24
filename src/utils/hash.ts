import * as bcrypt from 'bcrypt';
export class HashingHelper {
  private static readonly saltRounds = 10;
  static async hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, this.saltRounds);
    return hashedPassword;
  }
  static async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const isPasswordMatching = await bcrypt.compare(password, hashedPassword);
    return isPasswordMatching;
  }
}
