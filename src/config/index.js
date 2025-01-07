/* eslint-disable no-undef */
const config = {
  projectUrl: String(process.env.PROJECT_URL),
  projectId: String(process.env.PROJECT_ID),
  databaseId: String(process.env.DATABASE_ID),
  collectionId: String(process.env.COLLECTION_ID),
  bucketId: String(process.env.BUCKET_ID),
};

export default config;
