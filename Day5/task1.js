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
    for (let i = 0; i < move; i++) {
      const value = arrayOfvalues[from - 1].pop();
      arrayOfvalues[to - 1].push(value);
    }
  });
  console.log(
    'answer: ',
    arrayOfvalues.map((value) => value[value.length - 1]).join('')
  );
} catch (err) {
  console.error(err);
}
