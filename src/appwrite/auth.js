import { Client, Account, ID } from "appwrite";
import config from "../config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.projectUrl).setProject(config.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
}
