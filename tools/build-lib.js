"use strict";


const shell = require('shelljs');
// const chalk = require('chalk');


const LIB_DIR = `dist/lib`;


const FILES = [
  `src/ngx-button/package.json`,
  `CHANGELOG.md`,
  `LICENSE.md`,
  `README.md`
]


shell.cp(`-Rf`, FILES, `${LIB_DIR}`);
