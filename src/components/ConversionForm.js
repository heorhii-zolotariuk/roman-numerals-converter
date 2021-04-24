import { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { toRoman, toInteger } from '../utils/roman-numerals'

function ConversionForm() {
    const [romanNumeral, setRomanNumerals] = useState(null);
    const [integer, setInteger] = useState('');

    return (
        <div className="conversion-form">
            <div className="conversion-form__item">
                <h4 className="conversion-form__item-title">Convert Arabic Number to Roman Numeral</h4>
                <TextField
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    placeholder='Enter Arabic Number'
                    value={romanNumeral}
                    onChange={(e) => setRomanNumerals(e.target.value)}
                />
                <TextField
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    placeholder='Roman Numeral'
                    disabled={true}
                    value={toRoman(romanNumeral)}
                />
            </div>

            <div className="conversion-form__item">
                <h4 className="conversion-form__item-title">Convert Roman Numeral to Arabic Number</h4>
                <TextField
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    placeholder='Enter Roman Numeral'
                    value={integer}
                    onChange={(e) => setInteger(e.target.value)}
                />
                <TextField
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    placeholder='Arabic Number'
                    disabled={true}
                    value={toInteger(integer)}
                />
            </div>

        </div>
    );
}

export default ConversionForm;
