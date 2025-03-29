import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { CycleHoliday } from "./CycleHoliday";

test("initially shows 🎄", () => {
    render(<CycleHoliday />);
    expect(screen.getByText(/🎄/)).toBeInTheDocument();
});

test("cycles to 🎃 alphabetically", () => {
    render(<CycleHoliday />);
    const alphaButton = screen.getByText(/Alphabet/i);
    fireEvent.click(alphaButton);
    expect(screen.getByText(/🎃/)).toBeInTheDocument();
});

test("cycles to 🎂 by year", () => {
    render(<CycleHoliday />);
    const yearButton = screen.getByText(/Year/i);
    fireEvent.click(yearButton);
    expect(screen.getByText(/🎂/)).toBeInTheDocument();
});
