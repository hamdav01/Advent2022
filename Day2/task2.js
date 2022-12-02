const fs = require('fs');

const Result = {
  Loss: 0,
  Draw: 3,
  Win: 6,
};

const Tool = {
  Rock: 1,
  Paper: 2,
  Scissor: 3,
};

const mapIntoTool = (value) => {
  switch (value) {
    case 'A':
      return Tool.Rock;
    case 'B':
      return Tool.Paper;
    case 'C':
      return Tool.Scissor;
  }
};

const mapIntoResult = (value) => {
  switch (value) {
    case 'X':
      return Result.Loss;
    case 'Y':
      return Result.Draw;
    case 'Z':
      return Result.Win;
  }
};

const getResult = (resultNotMapped, elfNotMapped) => {
  const elf = mapIntoTool(elfNotMapped);
  const result = mapIntoResult(resultNotMapped);
  switch (elf) {
    case Tool.Scissor:
      return getScissorResult(result) + result;
    case Tool.Paper:
      return getPaperResult(result) + result;
    case Tool.Rock:
      return getRockResult(result) + result;
  }
};

const getRockResult = (result) => {
  switch (result) {
    case Result.Win:
      return Tool.Paper;
    case Result.Loss:
      return Tool.Scissor;
    default:
      return Tool.Rock;
  }
};
const getScissorResult = (result) => {
  switch (result) {
    case Result.Win:
      return Tool.Rock;
    case Result.Loss:
      return Tool.Paper;
    default:
      return Tool.Scissor;
  }
};
const getPaperResult = (result) => {
  switch (result) {
    case Result.Win:
      return Tool.Scissor;
    case Result.Loss:
      return Tool.Rock;
    default:
      return Tool.Paper;
  }
};

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  const lines = data.split(/\r?\n/);

  const totalScore = lines.reduce((totalScore, currentValue) => {
    const [elf, me] = currentValue.split(' ');
    return getResult(me, elf) + totalScore;
  }, 0);
  console.log(`Your totalscore is: ${totalScore}`);
} catch (err) {
  console.error(err);
}
