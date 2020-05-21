#!/usr/bin/env node
import cmd from "./root";

cmd
  .command("base64", "Process base64 strings", { executableFile: "base64" })
  .command("case", "Convert string to different casing", {
    executableFile: "case"
  })
  .command(
    "unix",
    "Convert UNIX timestamp to human readable format, and vice-versa",
    { executableFile: "unix" }
  )
  .command("rand", "Generate random string", { executableFile: "rand" });

if (!process.argv.slice(2).length) {
  cmd.outputHelp();
  process.exit(1);
}

cmd.parse(process.argv);
