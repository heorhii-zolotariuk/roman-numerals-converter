import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { toRoman, toInteger } from '../utils/romanNumerals'

function Form() {
    const [romanNumeral, setRomanNumerals] = useState(0);
    const [integer, setInteger] = useState('');

    return (
        <div className="form">
            <TextField
                variant="outlined"
                type="text"
                placeholder='Enter Integer'
                value={romanNumeral}
                onChange={(e) => setRomanNumerals(e.target.value)}
            />
            <TextField
                variant="outlined"
                type="text"
                placeholder='Roman Numeral'
                disabled={true}
                value={toRoman(romanNumeral)}
            />

            <hr/>
            <TextField
                variant="outlined"
                type="text"
                placeholder='Enter Roman Numeral'
                value={integer}
                onChange={(e) => setInteger(e.target.value)}
            />
            <TextField
                variant="outlined"
                type="text"
                placeholder='Integer'
                disabled={true}
                value={toInteger(integer)}
            />
        </div>
    );
}

export default Form;
