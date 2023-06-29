import log from "loglevel";
import chalk, { ChalkInstance } from "chalk";
import prefix from "loglevel-plugin-prefix";

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
};
type ColorKey = keyof typeof colors;
if (process.env.NODE_ENV == "development") {
  log.setLevel("debug");
}

prefix.reg(log);

prefix.apply(log, {
  format(level, name, timestamp) {
    return `${chalk.gray(`[${timestamp}]`)} ${colors[
      level.toUpperCase() as ColorKey
    ](level)} ${chalk.green(`${name}:`)}`;
  },
});

export { log as logger };
