const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split(/\r?\n/);

  const overlaps = lines.filter((line) => {
    const [elf1, elf2] = line.split(',');
    const [elf1Min, elf1Max] = elf1.split('-').map(Number);
    const [elf2Min, elf2Max] = elf2.split('-').map(Number);
    if (elf1Min >= elf2Min && elf1Max <= elf2Max) {
      return true;
    }
    if (elf2Min >= elf1Min && elf2Max <= elf1Max) {
      return true;
    }

    return false;
  });
  console.log('overlaps: ', overlaps.length);
} catch (err) {
  console.error(err);
}
