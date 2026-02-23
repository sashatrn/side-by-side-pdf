import fs from "fs";
import path from "path";
import { Logger } from "pino";

export type CliOptions = {
  inputPath: string;
};

export function parseCliArgs(argv: string[], logger: Logger): CliOptions {
  const input = argv[2];

  if (!input) {
    logger.error("No XML file provided.");
    logger.info("Usage: node dist/index.js <file.xml>");
    process.exit(1);
  }

  const absolutePath = path.resolve(process.cwd(), input);

  if (!fs.existsSync(absolutePath)) {
    logger.error({ path: absolutePath }, "XML file not found.");
    process.exit(1);
  }

  return {
    inputPath: absolutePath,
  };
}
