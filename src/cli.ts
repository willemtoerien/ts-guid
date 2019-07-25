#!/usr/bin/env node

import { isGuid } from './isGuid';
import { newGuid } from './newGuid';

const [, , ...args] = process.argv;

function getArg(arg: string): number {
  return args.filter((x) => x.toLowerCase() === arg)[0] ? args.indexOf(arg) : -1;
}

const help = getArg('-h');
if (help > -1) {
  console.log('Usages:');
  console.log('\tts-guid (-u)\n\tPrints a new GUID. If -u is specified, the GUID is in uppercase.\n');
  console.log('\tts-guid -t <GUID>\n\tTests a GUID if it is valid.\n');
  console.log('\tts-guid -h\n\tPrints the help menu.');
  process.exit(0);
}

const testing = getArg('-t');
if (testing > -1) {
  // tslint:disable-next-line: no-shadowed-variable
  const guid = args[testing + 1];
  console.log(`Testing GUID: ${guid}`);
  const valid = isGuid(guid) ? 'Valid' : 'Invaild';
  console.log(valid);
  process.exit(0);
}

let guid = newGuid();
const isUpper = args.filter((x) => x.toLowerCase() === '-u')[0] ? true : false;
if (isUpper) {
  guid = guid.toUpperCase();
}
console.log(guid);
