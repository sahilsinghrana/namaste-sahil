#!/usr/bin/env node

import { S_Introduction, contactMe } from "./strings.js";
import { log, logNewLine, logTitleValueTable } from "./utils.js";

import Logger from "./src/lib/colorizelog/index.js";

Logger.white.bold.log(S_Introduction);
logNewLine();
Logger.bgBlack.white.log("Connect with me at:");
logTitleValueTable(contactMe);
logNewLine();
