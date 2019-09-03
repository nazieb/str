#!/usr/bin/env node
import cmd from "commander";

cmd
  .command("enc <str>")
  .description("Encode string to base64")
  .action(str => {
    const buff = Buffer.from(str);
    console.log(buff.toString("base64"));
  });

cmd
  .command("dec <str>")
  .description("Decode base64 string")
  .action(str => {
    const buff = Buffer.from(str, "base64");
    console.log(buff.toString());
  });

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.outputHelp();
  process.exit(1);
}
