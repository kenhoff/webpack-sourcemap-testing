const validate = require('sourcemap-validator');
const fs = require('fs');

let min = fs.readFileSync(`dist/bundle.js`, 'utf-8');
let map = fs.readFileSync(`dist/bundle.js.map`, 'utf-8');
validate(min, map);
