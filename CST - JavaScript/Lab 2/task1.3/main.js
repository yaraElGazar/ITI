function largetsWord(sentence) {
    var splittedSentence = sentence.split(' ');

    var max = splittedSentence[0].length;
    var maxWord = splittedSentence[0];

    for(var i = 1; i < splittedSentence.length; i++) {
        if(splittedSentence[i].length > max){
            max = splittedSentence[i].length;
            maxWord = splittedSentence[i];
        }
    }
    return maxWord;
}

var sentence = prompt("Enter the sentence");
var word = largetsWord(sentence);

document.write("The largest word is: "+word);