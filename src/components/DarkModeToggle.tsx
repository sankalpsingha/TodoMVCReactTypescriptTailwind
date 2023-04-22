import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // get the <html> element
    const html = document.querySelector("html");
    if (!html) return;
    // check if dark mode is enabled
    if (darkMode) {
      // add the "dark" class to the <html> element
      html.classList.add("dark");
    } else {
      // remove the "dark" class from the <html> element
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const onChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed flex space-x-2 italic font-light darkModeToggle dark:text-zinc-400 top-5 left-5">
      <input
        type="checkbox"
        id="dark-mode"
        checked={darkMode}
        onChange={onChange}
      />
      <label htmlFor="dark-mode" className="cursor-pointer ">
        Toggle dark mode
      </label>
    </div>
  );
};

export default DarkModeToggle;
