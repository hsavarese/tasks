import React, { useState } from "react";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                Reveal Answer
            </button>
            {visible && <div data-testid="answer-text">42</div>}
        </div>
    );
}
