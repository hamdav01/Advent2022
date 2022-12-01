const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split(/\r?\n/);

  const result = lines.reduce(
    ({ highestValue, value }, currentValue) => {
      return currentValue === ''
        ? {
            highestValue: Math.max(highestValue, value),
            value: 0,
          }
        : { highestValue, value: +currentValue + value };
    },
    {
      highestValue: 0,
      value: 0,
    }
  );
  console.log(`The highest calorie value is: ${result.highestValue}`);
} catch (err) {
  console.error(err);
}
