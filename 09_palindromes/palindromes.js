function isAlpha(s) {
  return /^[a-zA-Z]$/.test(s);
}

const palindromes = function (s) {
  let i=0; let j=s.length-1;
  do {
    while (!isAlpha(s[i])) i++;
    while (!isAlpha(s[j])) j--;
    if (i>=j) return true;
    if (s[i].toLowerCase() != s[j].toLowerCase()) return false;
    i++;
    j--;
  } while(true);
};


// Do not edit below this line
module.exports = palindromes;
