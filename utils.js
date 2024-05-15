import chalk from "chalk";

export function getYearDifference(fromDate) {
  var ageDifMs = Date.now() - fromDate;
  var ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}

export const log = console.log;

export const logNewLine = () => log("\n");

const logTitle = chalk.bgBlue.white.bold;
const logTitleField = chalk.bgWhite.black;

const logTitleAndValue = (title, value, ...rest) =>
  log(
    logTitle(title),
    chalk.black.bgGray("----"),
    logTitleField(value),
    ...rest
  );

export const logTitleValueTable = (data) => {
  let meta = {
    maxCol: 0,
    maxLen: new Map(),
  };

  const printerArgs = [];

  for (let rowIdx = 0; rowIdx < data.length; rowIdx++) {
    const currentRow = data[rowIdx];
    const maxColsForCurrentRow = currentRow.length;
    const loggerArgsForRow = [];

    if (meta.maxCol < maxColsForCurrentRow) meta.maxCol = maxColsForCurrentRow;

    for (let colIdx = 0; colIdx < maxColsForCurrentRow; colIdx++) {
      const colValue = currentRow[colIdx];
      const valueStrLength = colValue.length;
      if (
        !meta.maxLen.has(colIdx) ||
        meta.maxLen.get(colIdx) < valueStrLength
      ) {
        meta.maxLen.set(colIdx, valueStrLength);
      }
      loggerArgsForRow.push(colValue);
    }
    printerArgs.push(loggerArgsForRow);
  }

  printerArgs.forEach((args) => {
    const paddedArgs = args.map((str, colIdx) => {
      const paddDiff = meta.maxLen.get(colIdx) - str.length;

      return " " + str + Array(paddDiff + 2).join(" ");
    });
    logTitleAndValue(...paddedArgs);
  });
};

export const textWithLink = (text, url) => {
  return [`${text} `, chalk.black.bgWhiteBright("" + url + " ")];
};
