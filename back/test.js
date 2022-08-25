const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split('');
    console.log("Word array in getWordCount: ");
    console.log(wordArray);
    return wordArray.length;
}