import arg from "arg";

export interface ParsedSuperUserCliArgument {
  username?: string;
  password?: string;
}

export const parseCliArgument = (
  rawArgs: string[]
): ParsedSuperUserCliArgument => {
  const args = arg(
    {
      "--username": String,
      "--password": String,
      "--help": String,
      "-u": "--username",
      "-p": "--password",
      "-h": "--help",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    password: args["--password"],
    username: args["--username"],
  };
};
