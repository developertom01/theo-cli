import databaseManager from "./database_manager";

export const cleanUp = async () => {
  await databaseManager.closeConnection();
  process.exit(1);
};
