// 1. Write a function that evaluates if that word is compund or not.
// 2. Compound words examples: hotdog, goodbye, newspaper.
// 3. Not compound words: catdog, hello, news

/**
 * @param {string} compoundWord
 * @returns {boolean}
 */

 //1. The function will retunr false or true if there is or is not a ocmpunt word
 //2. We will need an array to compare data against a dictionary ['goodbye', 'newspaper', 'hotdog']
 //3. We can have another dictionary with words ['good', 'bye', 'news', 'paper', 'hot', 'dog']
 //4. We should iterate over each caracter in the given string
 //5. We can save those words in toan array.

 const wordDictionary = [
    'good',
    'bye',
    'news',
    'paper',
    'hot',
    'dog',
    'goodbye',
    'hotdog',
    'newspaper',
    'new',
    'cat'
];

const checkIfCompound = function (compoundWord) {

   if (!wordDictionary.includes(compoundWord)) return false;


    for ( let keyWord = 1;  keyWord < compoundWord.length; keyWord ++ ) {
        let firstWord = compoundWord.substring(0, keyWord);
        console.log('firstWord', firstWord);

        if (wordDictionary.includes(firstWord)) {

            if (wordDictionary.includes(compoundWord.substring(keyWord, compoundWord.length ))) {
                return true;
            }
        }
    }

    return false;
}

console.log(checkIfCompound('hotdog'));

