// Find the Longest Word in a String


function findLongestWord(str) {
  var arr=str.split(" ");
  var result=arr[0];
  for (var i=1; i<arr.length; i++) {
    if (result.length<arr[i].length) {
    	result=arr[i];
    }
    
  }
  return result.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
