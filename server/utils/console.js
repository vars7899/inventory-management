import color from "colors";

export const writeToConsole = (given_text) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(given_text);
};

export const errorToConsole = (given_text) => {
  console.log(color.red(`ERROR --> ${given_text}`));
};
