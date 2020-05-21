#!/usr/bin/env node
import cmd from "commander";
import { error, output } from "./output";

cmd.arguments("<str...>").action(str => {
  const input = str.join(" ");
  const number = parseInt(input, 10);

  if (Number.isNaN(number) || `${number}` !== input) {
    let date;

    try {
      date = new Date(input);
    } catch (e) {
      error("Invalid date format");
    }

    output(Math.floor(date.getTime()) / 1000);
  } else {
    const date = new Date(number * 1000);
    output(date.toISOString());
  }
});

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.outputHelp();
  process.exit(1);
}
