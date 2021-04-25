import { useState } from 'react';
import { getArrayOfRandomNumbers } from '../../utils/random-numbers';
import { toInteger } from '../../utils/roman-numerals';
import ChallengeStep from './ChallengeStep';
import ChallengeSettings from './ChallengeSettings';
import ChallengeFooter from './ChallengeFooter';

function Challenge() {
    const [submitted, setSubmitted] = useState(false);
    const [stepsCount, setStepsCount] = useState(5);
    const [stepsValue, setStepsValue] = useState(getArrayOfRandomNumbers(1, 3999, stepsCount).map((number) => ({
        task: number,
        answer: '',
        correct: false
    })));

    const setDefaultStepsValue = (stepsCount) => {
        const updatedStepsValue = getArrayOfRandomNumbers(1, 3999, stepsCount).map((number) => ({
            task: number,
            answer: '',
            correct: false
        }));

        setStepsValue(updatedStepsValue);
    }

    const setStepAnswer = (index, value) => {
        const updatedStepsValue = stepsValue.map((stepValue, stepIndex) => stepIndex !== index ? stepValue : { ...stepValue, answer: value });

        setStepsValue(updatedStepsValue);
    };

    const updateSteps = (updatedStepsCount) => {
        setStepsCount(updatedStepsCount);
        resetTasks(updatedStepsCount);
    }

    const submitAnswers = () => {
        setSubmitted(true);

        const updatedStepsValue = stepsValue.map(stepValue => {
            if (stepValue.task === toInteger(stepValue.answer)) {
                return { ...stepValue, correct: true }
            }

            return stepValue;
        });

        setStepsValue(updatedStepsValue);
    }

    const calculateResult = () => {
        if (!submitted) {
            return null
        }

        const correctAnswersCount = stepsValue.filter((stepValue) => stepValue.correct).length;

        return `${correctAnswersCount} out of ${stepsCount}`
    }

    const resetTasks = (stepsCount) => {
        setSubmitted(false);
        setDefaultStepsValue(stepsCount);
    }

    return (
        <div className="challenge-container">
            <h3 className="challenge-container__header">Challenge Yourself</h3>
            <ChallengeSettings
                submitted={submitted}
                stepsCount={stepsCount}
                setStepsCount={updateSteps}
                resetTasks={() => resetTasks(stepsCount)}
            />
            {
                !!stepsCount
                    ? stepsValue.map((stepValue, index) => <ChallengeStep
                        key={stepValue.task}
                        submitted={submitted}
                        stepValue={stepsValue[index]}
                        stepIndex={index}
                        setStepAnswer={setStepAnswer}
                    />)
                    : 'Please enter steps count'
            }
            <ChallengeFooter submitted={submitted} submitAnswers={submitAnswers} result={calculateResult()}/>
        </div>
    );
}

export default Challenge;
