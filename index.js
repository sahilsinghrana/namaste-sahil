#!/usr/bin/env node

import { S_Introduction, contactMe } from "./src/strings.js";
import { log, logNewLine, logTitleValueTable } from "./src/utils.js";

import Logger from "./src/lib/colorizelog/index.js";

Logger.green.bold.bgBlack.log(S_Introduction);
logNewLine();
Logger.bgBlack.white.log("Connect with me at:");
logTitleValueTable(contactMe);
logNewLine();
