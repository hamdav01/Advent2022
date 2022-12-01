const fs = require('fs');

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split(/\r?\n/);

  const result = lines.reduce(
    ({ values, value }, currentValue) => {
      return currentValue === ''
        ? {
            values: [...values, value],
            value: 0,
          }
        : { values, value: +currentValue + value };
    },
    {
      values: [],
      value: 0,
    }
  );
  const values = [...result.values, result.value];
  values.sort((a, b) => b - a);
  const [value1, value2, value3] = values;
  const totalCalories = value1 + value2 + value3;
  console.log(`The highest calorie value is: ${totalCalories}`);
} catch (err) {
  console.error(err);
}
