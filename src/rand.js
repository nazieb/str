#!/usr/bin/env node
import cmd from "commander";
import shortid from "shortid";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";
import { error, output } from "./output";

cmd.arguments("<method>").action(method => {
  switch (method) {
    case "shortid":
      output(shortid.generate());
      break;

    case "uuidv1":
      output(uuidv1());
      break;

    case "uuidv4":
    case "":
      output(uuidv4());
      break;

    default:
      error(`Unknown method ${method}`);
  }
});

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.outputHelp();
  process.exit(1);
}
