import 'source-map-support/register';

import Promise from 'bluebird';
import {pick, defaults} from 'lodash';
import log from './utils/log';
try { require('debug-utils'); } catch (err) {/**/}

export default class EasyRSA {
  static defaults = {
    cwd: process.cwd(),
    message: 'world',
    level: 'info'
  };
  constructor(argv) {
    this.config = defaults({}, pick(argv, ...Object.keys(EasyRSA.defaults)), EasyRSA.defaults);
    this.dir = this.config.pkiDir;
  }
  say() {
    return new Promise((resolve, reject) => {
      log[this.config.level]('Hello %s ;)', this.config.message);
    });
  }
}
