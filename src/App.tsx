import React, { useState } from "react";
import "./App.css";
import { RevealAnswer } from "./RevealAnswer";
import { ChangeType } from "./ChangeType";
import { CycleHoliday } from "./CycleHoliday";
import { StartAttempt } from "./StartAttempt";
import { TwoDice } from "./TwoDice";

function Counter(): React.JSX.Element {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>Current count: {count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
}

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hunter Savarese. Hello World
            </p>
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
        </div>
    );
}

export default App;
