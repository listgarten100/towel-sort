
// You should implement your task here.
//start task
module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  let arr = [];
  matrix.forEach((elem, i) => {
    if(i % 2 !== 0) {
      elem.reverse();
    }
    elem.forEach(elem => {
      arr.push(elem);
    });
  });
  return arr;
};
