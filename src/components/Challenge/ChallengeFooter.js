import Button from '@material-ui/core/Button';

function ChallengeFooter({ submitAnswers, result, submitted }) {
    return (
        <div className="challenge-footer">
            <Button
                className="challenge-footer__button"
                variant="outlined"
                color="primary"
                disabled={submitted}
                onClick={submitAnswers}
            >Submit</Button>
            {result && <div className="challenge-footer__results">
                <span>Result: {result}</span>
            </div>}
        </div>
    );
}

export default ChallengeFooter;
