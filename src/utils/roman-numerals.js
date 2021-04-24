const lookup = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
]);

const toRoman = (integer) => {
    let romanNumerical = '';

    lookup.forEach(function(value, key) {
        while ( integer >= value ) {
            romanNumerical += key;
            integer -= value;
        }
    });

    return romanNumerical;
}

const toInteger = (romanNumeral) => {
    let integer = 0;

    if(romanNumeral){
        const charsArray = romanNumeral.toUpperCase().split('');

        charsArray.forEach((char, index) =>{
            integer += lookup.get(char) < lookup.get(charsArray[index+1]) ? -lookup.get(char) : lookup.get(char);
        });
    }

    return integer || '';
}

export {
    toRoman,
    toInteger
}