import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { TwoDice } from "./TwoDice";

test("renders two dice with different initial values", () => {
    render(<TwoDice />);
    const left = screen.getByTestId("left-die");
    const right = screen.getByTestId("right-die");
    expect(left.textContent).not.toBe(right.textContent);
});

test("roll buttons update dice values", () => {
    render(<TwoDice />);
    const leftBefore = screen.getByTestId("left-die").textContent;
    fireEvent.click(screen.getByText(/Roll Left/i));
    const leftAfter = screen.getByTestId("left-die").textContent;
    expect(leftAfter).not.toBe(leftBefore); // highly likely to change

    const rightBefore = screen.getByTestId("right-die").textContent;
    fireEvent.click(screen.getByText(/Roll Right/i));
    const rightAfter = screen.getByTestId("right-die").textContent;
    expect(rightAfter).not.toBe(rightBefore); // highly likely to change
});
