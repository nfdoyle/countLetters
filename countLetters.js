function countLetters(string) {
  var letters = {}
  var str = string.split(' ').join('');

  for (var i = 0; i < str.length; i++){
    if (letters[str.charAt(i)]) {
      letters[str.charAt(i)]++;
    } else {
      letters[str.charAt(i)] = 1
    }
  }
return letters
}

console.log(countLetters("banana banana"));
