// // Business Logic

// function wordCounter(text) {
//     if (text.trim().length === 0) {
//     return 0;
//     }
//     let wordCount = 0;
//     const textArray = text.split(" ");
//     textArray.forEach(function(element) {
//         if (!Number(element)) {
//     wordCount++;
//         }
//     });
//     return wordCount;
// }

// // Number of occurrences in text

// //Business Logic
function numberOfOccurrencesInText(word, text) {
    if (word.trim().length === 0) {
      return 0;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

// function includesRarestLetter(word) {
//     if (word.toLowerCase().includes("q")) {
//     return true;
//     }
//     return false;
// }

// UI Logic

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});


///////////////////////////////////////////////////////////
// //Business Logic
// function omitOffensiveLanguage(text, wordsToOmit) {
//     const textArray = text.split(" ");
    
//     const filteredWords = textArray.filter(word => !wordsToOmit.includes(word));
//     const cleanText = omitOffensiveLanguage(text, wordsToOmit)
    
//         const result = filteredWords.join(" ");
//         return result;
//     };
  
    


