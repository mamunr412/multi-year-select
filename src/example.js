import React from "react";
import MultiYearSelect from "multi-year-select";

const App = () => {
  const handleYearChange = (years) => {
    console.log("Selected Years:", years);
  };

  return (
    <div>
      <h1>Multi-Year Select Example</h1>
      <MultiYearSelect
        startYear={1990}
        endYear={2025}
        onSelectionChange={handleYearChange}
      />
    </div>
  );
};

export default App;
