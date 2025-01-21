import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import jest-dom matchers
import MultiYearSelect from "../src/components/MultiYearSelect";

describe("MultiYearSelect Component", () => {
  it("renders without crashing", () => {
    render(<MultiYearSelect onSelectionChange={() => {}} />);
    expect(screen.getByText(/Select years.../i)).toBeInTheDocument();
  });

  it("shows selected years when clicked", () => {
    const mockCallback = jest.fn();
    render(
      <MultiYearSelect
        startYear={2000}
        endYear={2005}
        onSelectionChange={mockCallback}
      />
    );

    // Open the dropdown
    fireEvent.click(screen.getByText(/Select years.../i));

    // Get all elements with the text "2002"
    const yearOptions = screen.getAllByText("2002");

    // Identify the correct option by filtering based on its class
    const yearOption = yearOptions.find((el) =>
      el.className.includes("cursor-pointer")
    );

    // Ensure the correct element is found
    expect(yearOption).toBeInTheDocument();

    // Simulate selecting the year
    fireEvent.click(yearOption);

    // Assert that the callback is triggered with the correct value
    expect(mockCallback).toHaveBeenCalledWith([2002]);

    // Use a more specific query for the selected year
    const selectedYear = screen.getByText("2002", {
      selector: ".bg-blue-100.text-blue-800", // Use the class to target the selected year chip
    });

    // Assert that the selected year is displayed as a chip
    expect(selectedYear).toBeInTheDocument();
  });

  it("handles Select All and Clear All buttons", () => {
    const mockCallback = jest.fn();
    render(
      <MultiYearSelect
        startYear={2000}
        endYear={2005}
        onSelectionChange={mockCallback}
      />
    );

    fireEvent.click(screen.getByText(/Select years.../i)); // Open the dropdown

    // Simulate clicking "Select All"
    fireEvent.click(screen.getByText(/Select All/i));
    expect(mockCallback).toHaveBeenCalledWith([
      2000, 2001, 2002, 2003, 2004, 2005,
    ]);

    // Simulate clicking "Clear All"
    fireEvent.click(screen.getByText(/Clear All/i));
    expect(mockCallback).toHaveBeenCalledWith([]);
  });

  it("updates year range dynamically", () => {
    render(
      <MultiYearSelect
        startYear={2010}
        endYear={2012}
        onSelectionChange={() => {}}
      />
    );
    fireEvent.click(screen.getByText(/Select years.../i)); // Open the dropdown

    // Assert that the years within the range are displayed
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText("2011")).toBeInTheDocument();
    expect(screen.getByText("2012")).toBeInTheDocument();
  });
});
