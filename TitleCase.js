

// Title Case a Sentence
// Returned the provided string with the first letter of each word capitalized. 


function titleCase(str) {
  var arr=str.toLowerCase().split(" ");
  str = arr.map(function(val) {return val.charAt(0).toUpperCase() + val.substr(1);}).join(" ");
    return str;
  }

titleCase("I'm a little tea pot");