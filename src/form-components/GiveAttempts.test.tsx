import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { GiveAttempts } from "./GiveAttemps";
import userEvent from "@testing-library/user-event";

describe("GiveAttempts Component tests", () => {
    beforeEach(() => render(<GiveAttempts />));

    test("Initial attempts is 3", () => {
        expect(screen.getByText(/Attempts left: 3/i)).toBeInTheDocument();
    });

    test("Use button decreases attempts", async () => {
        const useButton = screen.getByRole("button", { name: /use/i });
        await act(async () => {
            userEvent.click(useButton);
        });
        expect(screen.getByText(/Attempts left: 2/i)).toBeInTheDocument();
    });

    test("Use button disables at 0 attempts", async () => {
        const useButton = screen.getByRole("button", { name: /use/i });
        await act(async () => {
            userEvent.click(useButton);
            userEvent.click(useButton);
            userEvent.click(useButton);
        });
        expect(screen.getByText(/Attempts left: 0/i)).toBeInTheDocument();
        expect(useButton).toBeDisabled();
    });

    test("Gain button increases attempts by input value", async () => {
        const gainButton = screen.getByRole("button", { name: /gain/i });
        const input = screen.getByRole("spinbutton");
        await act(async () => {
            userEvent.type(input, "5");
            userEvent.click(gainButton);
        });
        expect(screen.getByText(/Attempts left: 8/i)).toBeInTheDocument();
    });

    test("Gain button does not increase attempts for invalid input", async () => {
        const gainButton = screen.getByRole("button", { name: /gain/i });
        const input = screen.getByRole("spinbutton");
        await act(async () => {
            userEvent.clear(input);
            userEvent.type(input, "abc");
            userEvent.click(gainButton);
        });
        expect(screen.getByText(/Attempts left: 3/i)).toBeInTheDocument();
    });
});
