# MultiYearSelect - A Flexible React Multi-Year Selector Component

[![npm version](https://badge.fury.io/js/multi-year-select.svg)](https://www.npmjs.com/package/multi-year-select)
[![license](https://img.shields.io/npm/l/multi-year-select)](https://github.com/mamunr412)

## Overview

**MultiYearSelect** is a highly customizable and lightweight React component for selecting multiple years from a specified range. Its user-friendly interface and flexibility make it ideal for applications requiring a year range picker, such as experience selection forms, data filters, and more.

---

## Key Features

- 📆 **Customizable Year Range**: Dynamically define the start and end years.
- 🖱️ **Intuitive UI**: Easy-to-use dropdown with multi-select functionality.
- 🎨 **Stylable**: Customize styles using custom class names.
- 🔄 **Real-Time Updates**: Get selected years via callback in real time.
- 🚀 **Lightweight**: Minimal dependencies ensure optimal performance.

---

## Installation

Install the package using npm or yarn:

```bash
npm install multi-year-select
```

or

```bash
yarn add multi-year-select
```

---

## Usage

Integrating `MultiYearSelect` into your React project is simple. Here's an example:

```jsx
import React from "react";
import MultiYearSelect from "multi-year-select";

const App = () => {
  const handleSelectionChange = (selectedYears) => {
    console.log("Selected years:", selectedYears);
  };

  return (
    <div>
      <h1>Multi-Year Selector</h1>
      <MultiYearSelect
        startYear={2000}
        endYear={2030}
        onSelectionChange={handleSelectionChange}
        className="custom-class"
      />
    </div>
  );
};

export default App;
```

---

## Props

| Prop                | Type       | Default      | Description                             |
| ------------------- | ---------- | ------------ | --------------------------------------- |
| `startYear`         | `number`   | `2000`       | The first year in the selectable range. |
| `endYear`           | `number`   | Current year | The last year in the selectable range.  |
| `onSelectionChange` | `function` | `undefined`  | Callback for handling selected years.   |
| `className`         | `string`   | Optional     | Additional classes for custom styling.  |

---

## Demo

[Live Demo on CodeSandbox](https://codesandbox.io/s/example-multi-year-select)

---

## Why Choose MultiYearSelect?

1. **Accessibility**: Designed to be inclusive and user-friendly.
2. **Flexibility**: Ideal for use cases like year filters, date range pickers, or experience selection.
3. **Ease of Integration**: Seamlessly integrates into any React project.

---

## Styling and Customization

You can style `MultiYearSelect` by overriding the default styles with custom CSS classes. Use the `className` prop to apply your own styles.

Example CSS:

```css
.custom-class {
  width: 100%;
  max-width: 300px;
}
.custom-class .selected-year {
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
}
```

---

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to submit an [issue](https://github.com/mamunr412) or create a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes and submit a pull request.

---

## License

This project is licensed under the [MIT License](https://github.com/mamunr412).

---

## Keywords

React, Multi-Year Select, Year Picker, Dropdown Selector, React Year Range, Custom Year Picker, MultiSelect, React Component

---

## Support

For questions or issues, feel free to reach out or file an [issue](https://github.com/mamunr412).

---

### Stay Updated

⭐ **Star this repository** if you find it helpful!  
📢 Follow us on [GitHub](https://github.com/mamunr412) for updates.

---

Start using **MultiYearSelect** today to enhance your React projects with an elegant and efficient year selection feature! 🎉
