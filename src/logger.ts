import pino from "pino";
import { AppConfig } from "./config";

export function createLogger(config: AppConfig) {
  return pino({
    level: config.logging.level,
    transport: {
      target: "pino-pretty",
      options: { colorize: true }
    }
  });
}
