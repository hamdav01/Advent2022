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

  let score = 0;
  for (let i = 0; i < lines.length - 1; i += 3) {
    const line1 = lines[i];
    const line2 = lines[i + 1];
    const line3 = lines[i + 2];
    const common = line1
      .split('')
      .find((char) => line2.includes(char) && line3.includes(char));
    score += getValue(common.charCodeAt(0));
  }

  console.log(`Your total priority is: ${score}`);
} catch (err) {
  console.error(err);
}
