import { ParsedSuperUserCliArgument } from "./parseCliArgument";
import dotenv from "dotenv";

dotenv.config();

export const replaceWithEnvVariables = (
  options: ParsedSuperUserCliArgument
) => {
  if (!options.username) {
    options.username = process.env.SUPERUSER_USERNAME;
  }
  if (!options.password) {
    options.username = process.env.SUPERUSER_PASSWORD;
  }

  return options;
};
