import { useState } from 'react'
import TextField from '@material-ui/core/TextField';

import { toRoman, toArabic } from '../utils/roman-numerals'

function ConversionForm() {
    const [romanNumeral, setRomanNumerals] = useState("");
    const [arabicNumber, setArabicNumber] = useState("");

    return (
        <div className="conversion-form">
            <div className="conversion-form__item">
                <h3 className="conversion-form__item-title">Convert Arabic Number to Roman Numeral</h3>
                <TextField
                    label="Arabic Number"
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    placeholder="Enter Arabic Number"
                    value={arabicNumber}
                    onChange={(e) => setArabicNumber(e.target.value)}
                />
                <TextField
                    className="conversion-form__item-input"
                    label="Roman Numeral"
                    variant="outlined"
                    type="text"
                    placeholder="Roman Numeral"
                    disabled={true}
                    value={toRoman(arabicNumber)}
                />
            </div>

            <div className="conversion-form__item">
                <h3 className="conversion-form__item-title">Convert Roman Numeral to Arabic Number</h3>
                <TextField
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    label="Roman Numeral"
                    placeholder="Enter Roman Numeral"
                    value={romanNumeral}
                    onChange={(e) => setRomanNumerals(e.target.value)}
                />
                <TextField
                    className="conversion-form__item-input"
                    variant="outlined"
                    type="text"
                    label="Arabic Number"
                    placeholder="Arabic Number"
                    disabled={true}
                    value={toArabic(romanNumeral)}
                />
            </div>

        </div>
    );
}

export default ConversionForm;
