#!/usr/bin/env node
var program = require('commander');
var AvengersData = require('./index.js')
let query  = new AvengersData()

program
  .version('0.0.1')
  .option('-s','--spiderman', 'Get spiderman information')

if(program.spiderman) {
  query.getAvengers
}

program.parse(process.argv)

