import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { ChangeColor } from "./ChangeColor";
import userEvent from "@testing-library/user-event";

describe("ChangeColor Component tests", () => {
    beforeEach(() => render(<ChangeColor />));

    test("There are at least 8 radio buttons", () => {
        const radios = screen.getAllByRole("radio");
        expect(radios.length).toBeGreaterThanOrEqual(8);
    });

    test("The colored box is initially the first color", () => {
        const box = screen.getByTestId("colored-box");
        expect(box).toHaveStyle({ backgroundColor: "red" }); // assuming red is first
    });

    test("Selecting a different color updates the box", async () => {
        const radios = screen.getAllByRole("radio");
        const box = screen.getByTestId("colored-box");
        await act(async () => {
            userEvent.click(radios[1]); // select blue
        });
        expect(box).toHaveStyle({ backgroundColor: "blue" });
    });

    test("The text updates to show the chosen color", async () => {
        const radios = screen.getAllByRole("radio");
        await act(async () => {
            userEvent.click(radios[2]); // select green
        });
        expect(screen.getByText(/You have chosen/)).toHaveTextContent("green");
    });
});
