
const numLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['o', 'p', 'q', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

function numToWord(digits) {
    if (!digits.length) return [];
    const lettersArr = digits.split('').map(digit => numLetters[digit] || [''])
    let combinations = [''];
    for (let i = 0; i < lettersArr.length; i++) {
        let digitLetters = lettersArr[i];
        let tempArr = []
        for (let j = 0; j < digitLetters.length; j++) {
            let currentLetter= digitLetters[j];
            for (let k = 0; k < combinations.length; k++) {
                let combination = combinations[k]
                tempArr.push(combination + currentLetter)
            }
        }
    combinations = tempArr
    }
    return combinations
}


module.exports = numToWord;