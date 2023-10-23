function reverseWords(sentence) {

    const words = sentence.split(' ');
  
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = "Hi.. My Name Is Ankit";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
  