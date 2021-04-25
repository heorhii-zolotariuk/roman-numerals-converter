import TextField from '@material-ui/core/TextField';


function ChallengeStep({ stepValue, setStepAnswer, stepIndex, submitted }) {

    return (
        <div className="challenge-step">
            <TextField
                className="challenge-step__input"
                variant="outlined"
                type="text"
                value={stepValue.task}
                disabled={true}
            />
            <TextField
                className="challenge-step__input"
                error={submitted && !stepValue.correct}
                variant="outlined"
                type="text"
                placeholder='Enter Roman Numeral'
                onChange={!submitted ? (e) => setStepAnswer(stepIndex, e.target.value) : null}
                value={stepValue.answer}
            />
        </div>
    );
}

export default ChallengeStep;
