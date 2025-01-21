import React, { useState, useRef, useEffect } from "react";

interface MultiYearSelectProps {
  startYear?: number;
  endYear?: number;
  onSelectionChange: (years: number[]) => void;
  className?: string;
}
const loadTailwind = () => {
  if (typeof document !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.onload = () => {
      // Optionally configure Tailwind here
      if (window?.tailwind) {
        window.tailwind.config = {
          theme: {
            extend: {
              colors: {
                customBlue: "#1da1f2",
              },
            },
          },
        };
      }
    };
    document.head.appendChild(script);
  }
};

const MultiYearSelect: React.FunctionComponent<MultiYearSelectProps> = ({
  startYear: initialStartYear = 2000,
  endYear: initialEndYear = new Date().getFullYear(),
  onSelectionChange,
  className = "",
}) => {
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [startYear, setStartYear] = useState(initialStartYear);
  const [endYear, setEndYear] = useState(initialEndYear);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Tailwind only on the client side
    if (typeof window !== "undefined") {
      loadTailwind();
    }
  }, []);

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const handleYearToggle = (year: number) => {
    const updatedSelection = selectedYears.includes(year)
      ? selectedYears.filter((y) => y !== year)
      : [...selectedYears, year].sort((a, b) => a - b);

    setSelectedYears(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  const handleRemoveYear = (year: number) => {
    const updatedSelection = selectedYears.filter((y) => y !== year);
    setSelectedYears(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  const handleClearAll = () => {
    setSelectedYears([]);
    onSelectionChange([]);
  };

  const handleSelectAll = () => {
    setSelectedYears([...years]);
    onSelectionChange([...years]);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative w-72 ${className}`} ref={dropdownRef}>
      <div
        className="p-1.5 border rounded-md bg-white shadow-sm cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="max-h-60 overflow-y-auto grid grid-cols-4 gap-1 max-w-[90%] overflow-hidden">
          {selectedYears.length > 0 ? (
            selectedYears.map((year) => (
              <div
                key={year}
                className="flex items-center bg-[#f0f0f0] text-xs px-2 rounded-md "
              >
                {year}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveYear(year);
                  }}
                  className="ml-1 text-gray-500 text-base hover:text-black"
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <span className="text-gray-400 col-span-4 text-center">
              Select years...
            </span>
          )}
        </div>
        <svg
          className="w-2.5 h-2.5 ms-3 opacity-30"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
          <div className="p-2 border-b flex justify-between items-center">
            <div className="space-x-2">
              <button
                onClick={handleSelectAll}
                className="text-[12px] text-blue-600 hover:text-blue-800"
              >
                Select All
              </button>

              {years?.length && (
                <button
                  onClick={handleClearAll}
                  className="text-[12px] text-red-600 hover:text-red-800"
                >
                  Clear All
                </button>
              )}
            </div>
            {/* <div className="text-sm text-gray-500">
              {selectedYears.length} selected
            </div> */}
          </div>

          <div className="p-2 max-h-60 overflow-y-auto grid grid-cols-4 gap-1">
            {years.map((year) => (
              <div
                key={year}
                onClick={() => handleYearToggle(year)}
                className={`p-1 text-center cursor-pointer text-sm rounded ${
                  selectedYears.includes(year)
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {year}
              </div>
            ))}
          </div>

          <div className="p-2 border-t">
            <div className="flex items-center space-x-2 text-sm">
              <label>From:</label>
              <input
                type="number"
                value={startYear}
                onChange={(e) => setStartYear(Number(e.target.value))}
                className="w-20 p-1 border rounded"
                min="1900"
                max={endYear}
              />
              <label>To:</label>
              <input
                type="number"
                value={endYear}
                onChange={(e) => setEndYear(Number(e.target.value))}
                className="w-20 p-1 border rounded"
                min={startYear}
                max={new Date().getFullYear()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiYearSelect;
