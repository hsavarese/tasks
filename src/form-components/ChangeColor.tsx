import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c) => (
                <Form.Check
                    key={c}
                    inline
                    type="radio"
                    label={
                        <span
                            style={{
                                backgroundColor: c,
                                color: c === "black" ? "white" : "black",
                                padding: "0 8px",
                            }}
                        >
                            {c}
                        </span>
                    }
                    name="color"
                    id={`color-${c}`}
                    checked={color === c}
                    onChange={() => {
                        setColor(c);
                    }}
                />
            ))}
            <div style={{ marginTop: 10 }}>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: color,
                        color: color === "black" ? "white" : "black",
                        padding: "0 8px",
                        marginLeft: 5,
                    }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
