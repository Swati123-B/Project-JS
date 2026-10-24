const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

const freq = new Map();
for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);
for (const [num, count] of freq)
{
    console.log( `${num}  appears  ${count}  times `);
}