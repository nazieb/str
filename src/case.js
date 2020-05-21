#!/usr/bin/env node
import cmd from "commander";
import strCase from "change-case";
import { output, error } from "./output";

cmd.arguments("<casing> <str...>").action((casing, str) => {
  const method = `${casing}Case`;

  if (typeof strCase[method] !== "function") {
    error("Invalid case");
  }

  output(strCase[method](str.join(" ")));
});

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.outputHelp();
  process.exit(1);
}
