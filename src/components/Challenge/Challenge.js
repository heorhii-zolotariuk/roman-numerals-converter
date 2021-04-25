import { useState } from 'react';

import { getArrayOfRandomNumbers } from '../../utils/random-numbers';
import { toArabic } from '../../utils/roman-numerals';

import ChallengeStep from './ChallengeStep';
import ChallengeSettings from './ChallengeSettings';
import ChallengeFooter from './ChallengeFooter';

function Challenge() {
    const getDefaultStepsValue = (stepsCount) => {
        return getArrayOfRandomNumbers(1, 3999, stepsCount).map((number) => ({
            task: number,
            answer: "",
            correct: false
        }))
    }

    const [submitted, setSubmitted] = useState(false);
    const [stepsCount, setStepsCount] = useState(5);
    const [stepsValue, setStepsValue] = useState(getDefaultStepsValue(stepsCount));

    const setStepAnswer = (index) => (value) => {
        const updatedStepsValue = stepsValue.map((stepValue, stepIndex) => {
            if (stepIndex === index) {
                return { ...stepValue, answer: value };
            }

            return stepValue;
        });

        setStepsValue(updatedStepsValue);
    }

    const updateStepsCount = (updatedStepsCount) => {
        setStepsCount(updatedStepsCount);
        resetTasks(updatedStepsCount);
    }

    const submitAnswers = () => {
        setSubmitted(true);

        const updatedStepsValue = stepsValue.map(stepValue => {
            if (stepValue.task === toArabic(stepValue.answer)) {
                return { ...stepValue, correct: true };
            }

            return stepValue;
        });

        setStepsValue(updatedStepsValue);
    }

    const getResultMessage = () => {
        if (!submitted) {
            return null;
        }

        const correctAnswersCount = stepsValue.filter((stepValue) => stepValue.correct).length;

        return `${correctAnswersCount} out of ${stepsCount}`;
    }

    const resetTasks = (stepsCount) => {
        setSubmitted(false);
        setStepsValue(getDefaultStepsValue(stepsCount));
    }

    return (
        <div className="challenge-container">
            <h3 className="challenge-container__header">Challenge Yourself</h3>
            <ChallengeSettings
                submitted={submitted}
                stepsCount={stepsCount}
                setStepsCount={updateStepsCount}
                resetTasks={() => resetTasks(stepsCount)}
            />
            {
                !!stepsCount
                    ? stepsValue.map((stepValue, index) => <ChallengeStep
                        key={stepValue.task}
                        submitted={submitted}
                        stepValue={stepsValue[index]}
                        setStepAnswer={setStepAnswer(index)}
                    />)
                    : <div className="challenge-container__no-data-message">Please enter steps count</div>
            }
            <ChallengeFooter submitted={submitted} submitAnswers={submitAnswers} result={getResultMessage()}/>
        </div>
    );
}

export default Challenge;
