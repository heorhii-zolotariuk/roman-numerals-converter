const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const hasDuplicates = (array) => {
    return (new Set(array)).size !== array.length;
}

const getArrayOfRandomNumbers = (min, max, length) => {
    const generatedArray = Array.from({length: length}, () => getRandomNumber(min, max));

    if (hasDuplicates(generatedArray)) {
        return getArrayOfRandomNumbers(min, max, length);
    }

    return generatedArray;
}

export {
    getArrayOfRandomNumbers
}