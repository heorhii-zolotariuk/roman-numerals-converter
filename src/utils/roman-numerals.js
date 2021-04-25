const lookup = new Map([
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
]);

const toRoman = (integer) => {
    let romanNumerical = "";

    if (!integer) {
        return romanNumerical;
    }

    lookup.forEach(function(value, key) {
        while ( integer >= value ) {
            romanNumerical += key;
            integer -= value;
        }
    });

    return romanNumerical;
}

const toArabic = (romanNumeral) => {
    let arabicNumber = 0;

    if (!romanNumeral) {
        return "";
    }

    if(romanNumeral){
        const charsArray = romanNumeral.toUpperCase().split('');

        charsArray.forEach((char, index) =>{
            arabicNumber += lookup.get(char) < lookup.get(charsArray[index+1]) ? -lookup.get(char) : lookup.get(char);
        });
    }

    return arabicNumber;
}

export {
    toRoman,
    toArabic
}