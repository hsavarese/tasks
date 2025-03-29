import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { RevealAnswer } from "./RevealAnswer";

test("does not show the answer initially", () => {
    render(<RevealAnswer />);
    expect(screen.queryByText("42")).not.toBeInTheDocument();
});

test("reveals the answer after clicking the button", () => {
    render(<RevealAnswer />);
    fireEvent.click(screen.getByText(/Reveal Answer/i));
    expect(screen.getByText("42")).toBeInTheDocument();
});
