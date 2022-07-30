const removeFromArray = function(arr, ...targets) {
  return arr.filter(e => targets.indexOf(e)<0);
};

// Do not edit below this line
module.exports = removeFromArray;
