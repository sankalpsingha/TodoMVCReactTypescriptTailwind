import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  // get the dark mode preference from localStorage if it's available when the application loads
  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference) {
      setDarkMode(JSON.parse(darkModePreference));
    }
  }, []);

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
    // Set the preference to localStorage
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <div className="fixed flex space-x-2 italic font-light darkModeToggle dark:text-zinc-400 top-3 md:top-5 md:left-5 right-5">
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
