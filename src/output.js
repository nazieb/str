/* eslint-disable no-console */
import clipboardy from "clipboardy";

export function output(value) {
  clipboardy.writeSync(value);
  console.log(value);
}

export function error(text) {
  console.log("\x1b[31m", "Error: ", "\x1b[37m", text);
  process.exit(1);
}
