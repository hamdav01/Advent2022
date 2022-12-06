const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt', 'utf8').split('');
  let index;
  const jumps = 14;
  for (let i = 0; i < data.length; i++) {
    const values = data.slice(i, i + jumps);
    const set = new Set(values);
    if (set.size === jumps) {
      index = i + jumps;
      break;
    }
  }

  console.log('answer: ', index);
} catch (err) {
  console.error(err);
}
