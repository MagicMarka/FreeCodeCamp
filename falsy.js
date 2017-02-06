
// Remove all falsy values from an array.


function bouncer(arr) {
  function isTrue (value) {
   if (value)
   return true;
  }
  newArray = arr.filter(isTrue);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
