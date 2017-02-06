
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.



function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var step = 0;
  for (var i=0; i<arr.length; i+=size) {
  newArray.push(arr.slice(step, size+step));
  step += size;
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);
