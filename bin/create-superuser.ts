import { createSuperUserCli } from "../cli";

(async () => {
  await createSuperUserCli(process.argv);
})();
