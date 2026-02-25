import pino from "pino";
import { AppConfig } from "./config";

export function createLogger(config: AppConfig) {

  return pino({
    level: config.logging.level,
    base: null,
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        ignore: "pid,hostname",
        translateTime: "HH:MM:ss",
      },
    },
  });
}
