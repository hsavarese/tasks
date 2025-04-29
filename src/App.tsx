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
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

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
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}

export default App;
