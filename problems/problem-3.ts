// Problem 3:
// Create a TypeScript function called countWordOccurrences 
// that accepts a sentence (string) and a word (string). The function should return 
// the number of times the word appears in the sentence, ignoring case. Use the simple 
// sentence without punctuation as input.

const countWordOccurrences = (sentence: string, word: string) : string => {
    let counts = 0;
    const toLowerCaseSentenceSplitBySpace = sentence.toLowerCase().split(' ');
    const countWord = toLowerCaseSentenceSplitBySpace.filter((count, i )=> {
        if(count === word){
            return counts = counts + 1;
        }
        console.log(count, i)
    })
    console.log(countWord, counts)
    return `sentence: ${sentence} and word: ${word}`;
}

const c = countWordOccurrences("I i i i love typescript", "i");

// console.log(c)

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// Sample Input:

// Sample Output:
// 1;