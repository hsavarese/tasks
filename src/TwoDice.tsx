import React, { useState } from "react";

// Simulate rolling a six-sided die
function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    const isSame = leftDie === rightDie;
    const isSnakeEyes = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <span data-testid="left-die">🎲 {leftDie}</span>{" "}
            <span data-testid="right-die">🎲 {rightDie}</span>
            <div>
                <button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </button>
                <button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </button>
            </div>
            {isSame && <div>{isSnakeEyes ? "Lose" : "Win"}</div>}
        </div>
    );
}
