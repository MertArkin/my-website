
// scripts/theme-switcher.js



document.addEventListener("DOMContentLoaded", function () {
  // Create button container
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  // Create theme switch button
  const toggleSwitch = document.createElement("button");
  toggleSwitch.innerText = "🌙"; // Moon emoji for dark mode
  toggleSwitch.className = "theme-switcher";

  // Create binary toggle button
  const binaryToggle = document.createElement("button");

  // binaryToggle.innerText = "Disable Binary";
  binaryToggle.innerText = "0x00";

  binaryToggle.className = "theme-switcher";

  buttonContainer.appendChild(binaryToggle);

  // Append buttons to container
  buttonContainer.appendChild(toggleSwitch);

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



  // Binary toggle flag
  let binaryEnabled = false;

  binaryToggle.addEventListener("click", () => {
    binaryEnabled = !binaryEnabled;
    // binaryToggle.innerText = binaryEnabled ? "Disable Binary" : "Enable Binary";
    binaryToggle.innerText = binaryEnabled ? "0x01" : "0x00";
    // console.log("Binary toggled, enabled:", binaryEnabled);
  });


  


  const main = document.getElementById("main-content")

  // Throttle control: how often a digit is emitted
  let lastEmit = 0;
  const emitDelay = 100; // milliseconds between each binary spit

  // When mouse moves on screen
  main.addEventListener('mousemove', (e) => {
    if (!binaryEnabled) return;  // <-- ADD THIS LINE to stop binary emission when disabled

    const now = Date.now();

    // Throttle: skip if too soon since last emit
    if (now - lastEmit < emitDelay) return;
    lastEmit = now;

    // Create a new div to represent a binary digit
    const binary = document.createElement('div');
    binary.classList.add('binary');

    // Randomly assign '0' or '1' as the digit
    // binary.textContent = Math.random() > 0.5 ? '0' : '1';
    binary.textContent = Math.random() > 0.5 ? '0' : '1';
    // binary.textContent = "Mert Arkin"

    // Position the digit at the cursor's location
    binary.style.left = `${e.pageX}px`;
    binary.style.top = `${e.pageY}px`;

    // Add it to the document body
    document.body.appendChild(binary);

    // Remove it after 2 seconds (matches CSS animation time)
    setTimeout(() => {
      binary.remove();
    }, 2000);
  });



});



// document.querySelectorAll('.binary-container').forEach(container => {
//   const binaryEl = container.querySelector('.binary-show');
//   const textEl = container.querySelector('.text-show');
//   const text = textEl.dataset.text;

//   // Set binary once
//   const binary = text.split('')
//     .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
//     .join(' ');

//   binaryEl.textContent = binary;
//   textEl.textContent = text;
// });



function shortBinary(text) {
  return text.split('')
    .map(c => c.charCodeAt(0).toString(2).slice(-4).padStart(4, '0'))
    .join(' ');
}

function binaryToText(binary) {
  return binary
    .split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
}
// const binary = "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001";
// console.log(binaryToText(binary)); // "Hello World!"

function fullBinary(text) {
  return text.split('')
    .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}
// const text = "Hello World!";
// console.log(fullBinary(text));

// https://www.rapidtables.com/convert/number/binary-to-ascii.html


// Character encoding (optional)
// ASCII/UTF-8


document.querySelectorAll('.binary-container').forEach(container => {
  const binaryEl = container.querySelector('.binary-show');
  const textEl = container.querySelector('.text-show');
  const text = textEl.dataset.text || '';

  const binary = shortBinary(text);
  // const binary = fullBinary(text);
  binaryEl.textContent = binary;
  textEl.textContent = text;
});







