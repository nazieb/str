import clipboardy from "clipboardy";

export default function output(value) {
  clipboardy.writeSync(value);
  console.log(value);
}
