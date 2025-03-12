import { write } from "bun";
import { parseArgs } from "util";

const main = async () => {
  const args = parseArgs({
    args: Bun.argv,
    allowPositionals: true,
    strict: true,
  });
  const now = new Date();

  const migrationName = `${now.getTime()}_${args.positionals.pop()}`;
  await write(
    `${__dirname}/prisma/${migrationName}/migration.sql`,
    `-- ${migrationName}`
  );
};

main();
