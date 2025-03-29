import React, { useState } from "react";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    const startQuiz = () => {
        setInProgress(true);
        setAttempts(attempts - 1);
    };

    const stopQuiz = () => {
        setInProgress(false);
    };

    const addMulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <p>Attempts left: {attempts}</p>
            <button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </button>
            <button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </button>
            <button onClick={addMulligan} disabled={inProgress}>
                Mulligan
            </button>
        </div>
    );
}
