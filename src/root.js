import cmd from "commander";

cmd.option("-v, --verbose", "set the output to be verbose");

cmd.command("ping").action(() => {
  console.log("pong");
});

export default cmd;
