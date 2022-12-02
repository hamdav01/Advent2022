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
    case 'X':
      return Tool.Rock;
    case 'B':
    case 'Y':
      return Tool.Paper;
    case 'C':
    case 'Z':
      return Tool.Scissor;
  }
};

const getResult = (meNotMapped, elfNotMapped) => {
  const elf = mapIntoTool(elfNotMapped);
  const me = mapIntoTool(meNotMapped);
  switch (me) {
    case Tool.Scissor:
      return getScissorResult(elf) + me;
    case Tool.Paper:
      return getPaperResult(elf) + me;
    case Tool.Rock:
      return getRockResult(elf) + me;
  }
};

const getRockResult = (elf) => {
  switch (elf) {
    case Tool.Scissor:
      return Result.Win;
    case Tool.Paper:
      return Result.Loss;
    default:
      return Result.Draw;
  }
};
const getScissorResult = (elf) => {
  switch (elf) {
    case Tool.Paper:
      return Result.Win;
    case Tool.Rock:
      return Result.Loss;
    default:
      return Result.Draw;
  }
};
const getPaperResult = (elf) => {
  switch (elf) {
    case Tool.Rock:
      return Result.Win;
    case Tool.Scissor:
      return Result.Loss;
    default:
      return Result.Draw;
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
