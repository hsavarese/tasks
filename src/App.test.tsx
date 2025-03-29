import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the counter with initial state", () => {
    render(<App />);
    expect(screen.getByText(/Current count: 0/i)).toBeInTheDocument();
});

test("increments the count when the button is clicked", () => {
    render(<App />);
    const button = screen.getByText(/Increment/i);
    fireEvent.click(button);
    expect(screen.getByText(/Current count: 1/i)).toBeInTheDocument();
});
