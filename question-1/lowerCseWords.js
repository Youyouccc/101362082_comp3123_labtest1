function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        // Check if the input is an array
        if (!Array.isArray(mixedArray)) {
            return reject(new Error("Input must be an array."));
        }

        // Filter the array and make it to lower case
        const lowerCasedWords = mixedArray
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());
        
        // Resolve with the lowercasewords
        resolve(lowerCasedWords);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
