const sumAll = function(i1, i2) {
  let sum=0;
  if (i1<0 || i2<0 || !Number.isInteger(i1) || !Number.isInteger(i2)) return 'ERROR';
  for(i=Math.min(i1,i2); i<=Math.max(i1,i2); i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
