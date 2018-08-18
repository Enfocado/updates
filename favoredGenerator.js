const fs = require('fs');
const makeFavoredIds = (pathToFile) => {
  // Data generation plan:
  const stream = fs.createWriteStream(pathToFile);
  const arrNums = [];
  for (let idx = 0; idx < 50000; idx++) {
    let rando = Math.random();
    // 50 % chance that one of the top 1000 will be picked.
    if (rando > 0.5) {
      let subFrom10M = Math.floor(Math.random() * 1000);
      let insertion = 10000000 - subFrom10M;
      arrNums.push(insertion);
    } else if (rando > 0.3) {
    // 20 % chance that one of the next 9000 will be picked
      let subFrom = Math.floor(Math.random() * 10000);
      let insertion = 9999000 - subFrom;
      arrNums.push(insertion);
    } else {
    // 30 % chance that any other number will be picked.
      let insertion = Math.ceil(Math.random() * 9990000);
      arrNums.push(insertion);
    }
  }
  // write each number into a csv.
  const str1 = 'num';
  stream.once('open', (fd) => {
    stream.write(str1 + '\n');
    for (let idx = 0; idx < arrNums.length; idx++) {
      stream.write(arrNums[idx] + '\n');
    }
    stream.end();
  });
};

makeFavoredIds('favouredID.csv');