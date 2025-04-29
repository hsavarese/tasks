import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function gainAttempts() {
        const num = parseInt(request);
        if (!isNaN(num)) {
            setAttemptsLeft(attemptsLeft + num);
        }
    }

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <input
                type="number"
                value={request}
                onChange={(e) => {
                    setRequest(e.target.value);
                }}
            />
            <button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                use
            </button>
            <button onClick={gainAttempts}>gain</button>
        </div>
    );
}
