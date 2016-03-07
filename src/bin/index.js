#!/usr/bin/env node

import yargs from 'yargs';
import pkg from './../../package.json';
import {mapKeys, camelCase} from 'lodash';
import log from './../utils/log';

import Component from './../../lib';
const defaults = Component.defaults;

const argv = yargs
  .usage('Usage: $0 <command> [options]')
  .command('init-pki', 'Removes & re-initializes the PKI dir for a clean PKI')
  .demand(1)
  .command('say', 'Say something', () => {
    yargs
      .option('message', {description: 'Message to say', type: 'string', default: defaults.message})
      .option('level', {description: 'Message level', type: 'string', default: defaults.message})
      .help('h').alias('h', 'help');
  })
  .help('h').alias('h', 'help')
  // .epilog('copyright 2015')
  .version(pkg.version)
  .argv;

const module = new Component(mapKeys(argv, (value, key) => camelCase(key)));
switch (argv._[0]) {
  case 'say':
    module.say()
    .then(() => {
      log.info('Done saying.');
      process.exit(0);
    });
    break;
  default:
}
