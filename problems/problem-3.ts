// Problem 3:
// Create a TypeScript function called countWordOccurrences 
// that accepts a sentence (string) and a word (string). The function should return 
// the number of times the word appears in the sentence, ignoring case. Use the simple 
// sentence without punctuation as input.


const countWordOccurrences = (sentence: string, word: string) : number => {
    let counts = 0;
    const toLowerCaseSentenceSplitBySpace = sentence.toLowerCase().split(' ');
    toLowerCaseSentenceSplitBySpace.filter(countWord => {
        if(countWord === word.toLowerCase()){
            counts = counts + 1;
        }
    })
    return counts;
}

const wordOccurrences = countWordOccurrences("i i i i i i i i i i i i I i i i i I i i i love typescript and TypeScript and Typescript and TYPESCRIPT", "typescript");
console.log(wordOccurrences);


// Input: "I love typescript", "typescript"
// Output: 1

// Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;