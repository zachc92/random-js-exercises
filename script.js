function capitalize(word){
    let newWord = word.toLowerCase();
    let firstLetter = newWord.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    newWord = firstLetter + newWord.slice(1);
    return newWord;
}

alert(capitalize("BEEP"));

function lastLetter(word){
    let last = word.length;
    return word.slice(last-1, last);
}

alert(lastLetter("last letter"));