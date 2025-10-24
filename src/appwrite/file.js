import config from "../config";
import { Client, Storage, ID } from "appwrite";

export class FileService {
  client = new Client();
  bucket;

  constructor() {
    this.client.setEndpoint(config.projectUrl).setProject(config.projectId);

    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.bucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFileView(config.bucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: getFilePreview() :: ", error);
      return false;
    }
  }
}

const fileService = new FileService();

export default fileService;
