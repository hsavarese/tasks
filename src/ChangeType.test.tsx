import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ChangeType } from "./ChangeType";

test("initially shows Short Answer", () => {
    render(<ChangeType />);
    expect(screen.getByText(/Short Answer/i)).toBeInTheDocument();
});

test("toggles to Multiple Choice", () => {
    render(<ChangeType />);
    fireEvent.click(screen.getByText(/Change Type/i));
    expect(screen.getByText(/Multiple Choice/i)).toBeInTheDocument();
});

test("toggles back to Short Answer", () => {
    render(<ChangeType />);
    const button = screen.getByText(/Change Type/i);
    fireEvent.click(button); // to Multiple Choice
    fireEvent.click(button); // back to Short Answer
    expect(screen.getByText(/Short Answer/i)).toBeInTheDocument();
});
