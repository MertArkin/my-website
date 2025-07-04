// scripts/theme-switcher.js


document.addEventListener("DOMContentLoaded", function () {
  // Create button container
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  // Create theme switch button
  const toggleSwitch = document.createElement("button");
  toggleSwitch.innerText = "🌙"; // Moon emoji for dark mode
  toggleSwitch.className = "theme-switcher";

  // Create Rickroll button
  // const rickrollButton = document.createElement("button");
  // rickrollButton.innerText = "🎵";
  // rickrollButton.className = "rickroll-button";


  // Append buttons to container
  buttonContainer.appendChild(toggleSwitch);
  // buttonContainer.appendChild(rickrollButton);

  // Append container to body
  document.body.appendChild(buttonContainer);




  // Function to apply the theme
  const applyTheme = (theme) => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    toggleSwitch.innerText = theme === "dark" ? "☀️" : "🌙"; // Sun emoji for light mode
  };

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  }


  // Toggle theme on button click
  toggleSwitch.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });


  
});





  // Redirect to Rickroll on button click
  // rickrollButton.addEventListener("click", () => {
  //   window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  // });

