const fs = require('fs');

const getValue = (charCodeValue) => {
  if (charCodeValue >= 97 && charCodeValue <= 122) {
    return charCodeValue - 96;
  }
  return charCodeValue - 38;
};

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split(/\r?\n/);

  const score = lines.reduce((score, line) => {
    const middle = Math.floor(line.length / 2);
    const s1 = line.substring(0, middle);
    const s2 = line.substring(middle);
    const common = s1.split('').find((char) => s2.includes(char));
    return score + getValue(common.charCodeAt(0));
  }, 0);
  console.log(`Your total priority is: ${score}`);
} catch (err) {
  console.error(err);
}
