function countLettersIndex(str) {
  var letters = {}

  for (var i = 0; i < str.length; i++){
    if (letters[str.charAt(i)]) {
      letters[str.charAt(i)].push(i);
    } else {
      letters[str.charAt(i)] = [i];
    }
  }
return letters
}

console.log(countLettersIndex("banana"));
