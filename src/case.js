#!/usr/bin/env node
import cmd from "commander";
import strCase from "change-case";

cmd.arguments("<casing> <str...>").action((casing, str) => {
  const method = `${casing}Case`;

  if (typeof strCase[method] !== "function") {
    console.log("Invalid case");
    process.exit(1);
  }

  console.log(strCase[method](str.join(" ")));
});

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.outputHelp();
  process.exit(1);
}
