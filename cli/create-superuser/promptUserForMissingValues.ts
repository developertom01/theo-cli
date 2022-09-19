import { ParsedSuperUserCliArgument } from "./parseCliArgument";
import inquirer, { QuestionTypeName } from "inquirer";

interface InquirerQuestionType<T = any> {
  type: QuestionTypeName;
  name: string;
  message: string;
  default?: T;
}

interface PromptAnswersType {
  username: string;
  password: string;
}

export const promptForMissingValues = async (
  options: ParsedSuperUserCliArgument
) => {
  const questions: InquirerQuestionType[] = [];
  if (!options.username) {
    questions.push({
      name: "username",
      message: "Please provide username",
      type: "input",
    });
  }
  if (!options.password) {
    questions.push({
      name: "password",
      message: "Please provide a password",
      type: "password",
    });
  }

  return inquirer.prompt<PromptAnswersType>(questions);
};
