const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split(/\r?\n/);
  const findIndex = lines.findIndex((value) => value === '');
  const [currentKeys, ...datas] = lines.slice(0, findIndex).reverse();
  const moves = lines.slice(findIndex + 1, lines.length);
  const arrayOfvalues = [];

  const keys = currentKeys.split('');
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key !== ' ') {
      arrayOfvalues[key - 1] = [];
      datas.forEach((value) => {
        const newValue = value.split('');
        if (newValue[i] !== ' ') {
          arrayOfvalues[key - 1].push(newValue[i]);
        }
      });
    }
  }
  moves.forEach((moveString) => {
    const [move, from, to] = moveString
      .split(' ')
      .filter((value) => Number(value));
    const length = arrayOfvalues[from - 1].length;
    const values = arrayOfvalues[from - 1].splice(length - move, length);
    arrayOfvalues[to - 1].push(...values);
  });
  console.log(
    'answer: ',
    arrayOfvalues.map((value) => value[value.length - 1]).join('')
  );
} catch (err) {
  console.error(err);
}
