const sumAll = function(i1, i2) {
  let sum=0;
  if (i1<0 || i2<0 || !Number.isInteger(i1) || !Number.isInteger(i2)) return 'ERROR';
  // for(i=Math.min(i1,i2); i<=Math.max(i1,i2); i++) sum += i;
  let imin = Math.min(i1,i2);  let imax = Math.max(i1,i2);
  sum = (imax*(imax+1) - imin*(imin-1))/2;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
