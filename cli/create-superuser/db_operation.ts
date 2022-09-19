import dbManager from "./database_manager";
import User from "./model";
import chalk from "chalk";
import { Roles } from "./model/types";

export const dbOperation = async (username: string, password: string) => {
  await dbManager.connectDb("mongodb://localhost:27017/libary-project?");
  console.log("not connection");

  let superuser = await User.findOne({ role: Roles.admin });
  if (superuser) {
    throw Error("Superuser already exists");
  }
  console.log(
    `${chalk.blue("Creating superuser with username")} ${chalk.yellow(
      username
    )}`
  );
  superuser = await User.create({ username, password, role: Roles.admin });
  console.log(chalk.blue("Superuser created successfully"));
};
