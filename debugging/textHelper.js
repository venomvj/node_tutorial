const fs = require('fs');
const readFile = () => {
    let data = fs.readFileSync("sentences.txt");
    let sentences = data.toString();
    return sentences;
}

const getWords = (text) => {
    let allSentences = text.split('\n');
    let flatSentences = allSentences.join(' ');
    let words = flatSentences.split(' ');
    words = words.map((word) => {
        word.trim().toLowerCase();
    });
    return words;
    
}