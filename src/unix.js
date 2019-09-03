#!/usr/bin/env node
import cmd from "commander";

cmd.arguments("<str...>").action(str => {
  const input = str.join(" ");
  const number = parseInt(input, 10);

  if (Number.isNaN(number) || `${number}` !== input) {
    let date;

    try {
      date = new Date(input);
    } catch (e) {
      console.log("Invalid date format");
      process.exit(1);
    }

    console.log(Math.floor(date.getTime()) / 1000);
  } else {
    const date = new Date(number * 1000);
    console.log(date.toISOString());
  }
});

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.outputHelp();
  process.exit(1);
}
