import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DarkModeToggle from "./DarkModeToggle";

describe("Dark mode toggle should", () => {
  test("render the toggle input and label", () => {
    const { getByLabelText } = render(<DarkModeToggle />);
    const input = screen.getByLabelText(/toggle dark mode/i);
    expect(input).toBeInTheDocument();
  });

  test("check the toggle input when dark mode is enabled", () => {
    const { getByLabelText } = render(<DarkModeToggle />);
    const input = screen.getByLabelText(
      /toggle dark mode/i
    ) as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  test("toggle dark mode when the input is clicked", () => {
    const { getByLabelText } = render(<DarkModeToggle />);
    const input = screen.getByLabelText(
      /toggle dark mode/i
    ) as HTMLInputElement;
    fireEvent.click(input);
    expect(input.checked).toBe(false);
    fireEvent.click(input);
    expect(input.checked).toBe(true);
  });

  test("add or removes the 'dark' class on the HTML element when toggling dark mode", () => {
    const { getByLabelText, getByRole } = render(<DarkModeToggle />);
    const input = screen.getByLabelText(/toggle dark mode/i);

    // Verify that the "dark" class is initially present on the HTML element
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    // Toggle dark mode off and verify that the "dark" class is removed
    fireEvent.click(input);
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    // Toggle dark mode on again and verify that the "dark" class is added back
    fireEvent.click(input);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
