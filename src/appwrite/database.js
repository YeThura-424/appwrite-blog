import config from "../config";
import { Client, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(config.projectUrl).setProject(config.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  /**
   *
   * @param {*} slug // unique id or any thing that is unique in that collection
   * @returns
   */
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }

  /**
   *
   * @param {*} queries // one or more queries to filter out the collection
   * @returns
   */
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.databaseId,
        config.collectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  /**
   *
   * @param {*} param0 // all the attributes values that is going to be created
   * @returns
   */
  async createPost({ title, slug, content, image, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.databaseId,
        config.collectionId,
        slug,
        {
          title,
          content,
          image,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost() :: ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.databaseId,
        config.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateDocument() :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.databaseId,
        config.collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteDocument() :: ", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
