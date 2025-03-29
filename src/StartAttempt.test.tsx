import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { StartAttempt } from "./StartAttempt";

test("initial state shows 4 attempts and disabled Stop button", () => {
    render(<StartAttempt />);
    expect(screen.getByText(/Attempts left: 4/i)).toBeInTheDocument();
    expect(screen.getByText(/Stop Quiz/i)).toBeDisabled();
});

test("start quiz reduces attempts and disables Start + Mulligan", () => {
    render(<StartAttempt />);
    const start = screen.getByText(/Start Quiz/i);
    fireEvent.click(start);
    expect(screen.getByText(/Attempts left: 3/i)).toBeInTheDocument();
    expect(start).toBeDisabled();
    expect(screen.getByText(/Mulligan/i)).toBeDisabled();
});

test("mulligan adds attempt", () => {
    render(<StartAttempt />);
    fireEvent.click(screen.getByText(/Mulligan/i));
    expect(screen.getByText(/Attempts left: 5/i)).toBeInTheDocument();
});

test("stop quiz re-enables Start button", () => {
    render(<StartAttempt />);
    const start = screen.getByText(/Start Quiz/i);
    const stop = screen.getByText(/Stop Quiz/i);
    fireEvent.click(start); // in progress
    fireEvent.click(stop); // stop quiz
    expect(start).not.toBeDisabled();
});
