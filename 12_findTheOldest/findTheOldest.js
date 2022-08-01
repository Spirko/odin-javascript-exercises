const findTheOldest = function(arr) {
  return arr.reduce((oldest, current) => age(current) > age(oldest)?current:oldest);
};

function age(person) {
  return (('yearOfDeath' in person)?person.yearOfDeath:(new Date().getFullYear()))
           - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
