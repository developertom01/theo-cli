import {
  parseCliArgument,
  ParsedSuperUserCliArgument,
} from "./parseCliArgument";
import { ArgError } from "arg";
import { replaceWithEnvVariables } from "./replaceWithEnvVariables";
import { promptForMissingValues } from "./promptUserForMissingValues";
import { dbOperation } from "./db_operation";
import chalk from "chalk";
import { cleanUp } from "./cleanup";

export const createSuperUserCli = async (args: string[]) => {
  let parsedArgument: ParsedSuperUserCliArgument;
  try {
    parsedArgument = parseCliArgument(args);
  } catch (error) {
    if (error instanceof ArgError) {
      console.log(error.message);
    } else {
      console.log("Unknown error occured");
    }
    process.exit(1);
  }
  parsedArgument = replaceWithEnvVariables(parsedArgument);
  const promptAnswers = await promptForMissingValues(parsedArgument);
  const fullOptions = {
    ...parsedArgument,
    ...promptAnswers,
  };

  try {
    await dbOperation(fullOptions.username, fullOptions.password);
  } catch (error) {
    console.log(chalk.red("Creating superuser failed"));
  }
  await cleanUp();
};
