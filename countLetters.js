function countLetters(str) {
  var letters = {}

  for (var i = 0; i < str.length; i++){
    if (letters[str.charAt(i)]) {
      letters[str.charAt(i)]++;
    } else {
      letters[str.charAt(i)] = 1
    }
  }
return letters
}

console.log(countLetters("banana"));
