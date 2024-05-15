#!/usr/bin/env node

import chalk from "chalk";

import { S_Introduction, contactMe } from "./strings.js";
import { log, logNewLine, logTitleValueTable } from "./utils.js";

log(chalk.whiteBright.bold(S_Introduction));
logNewLine();
log(chalk.bgBlack.white("Connect with me at:"));
logTitleValueTable(contactMe);
logNewLine();
