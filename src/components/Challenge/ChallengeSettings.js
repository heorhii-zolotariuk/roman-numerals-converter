import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ChallengeStep({ stepsCount, setStepsCount, resetTasks, submitted }) {
    return (
        <div className="challenge-settings">
            <TextField
                className="challenge-settings__input"
                label="Steps Count"
                variant="outlined"
                type="text"
                disabled={submitted}
                value={stepsCount}
                onChange={(e) => setStepsCount(e.target.value)}
            />
            <Button
                className="challenge-step__button"
                variant="outlined"
                color="primary"
                onClick={resetTasks}
            >Reset</Button>
        </div>
    );
}

export default ChallengeStep;
