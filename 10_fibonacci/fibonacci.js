const fibonacci = function(n) {
  if (n===1) return 1;
  if (n===2) return 1;
  n = parseInt(n);
  if (n<0) return 'OOPS';
  f0 = 0;
  f1 = 1;
  for(let i=1; i<n; i++) {
    [f0, f1] = [f1, f0+f1];
  }
  return f1;
};

// Do not edit below this line
module.exports = fibonacci;
