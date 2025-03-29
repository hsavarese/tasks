import React, { useState } from "react";

type Holiday = "🎄" | "🎃" | "🦃" | "🎆" | "🎂";

const alphabetOrder: Holiday[] = ["🎄", "🎃", "🎆", "🎂", "🦃"];
const yearOrder: Holiday[] = ["🎂", "🎆", "🎃", "🦃", "🎄"];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function nextInOrder(order: Holiday[]): Holiday {
        const index = order.indexOf(holiday);
        return order[(index + 1) % order.length];
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <button
                onClick={() => {
                    setHoliday(nextInOrder(alphabetOrder));
                }}
            >
                Advance by Alphabet
            </button>
            <button
                onClick={() => {
                    setHoliday(nextInOrder(yearOrder));
                }}
            >
                Advance by Year
            </button>
        </div>
    );
}
