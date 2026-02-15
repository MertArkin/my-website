
// Script to dynamically update the current date and time every second
document.addEventListener('includesLoaded', () => {
  const dateElement = document.getElementById('current-date');
  if (!dateElement) return;

  function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    dateElement.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
});

// https://chatgpt.com/c/6987ab64-1f7c-8327-8899-d54bbb0b5d97
document.addEventListener('includesLoaded', () => {
  const yearEl = document.getElementById('current-year');
  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
});

// // Script to dynamically set the current date and time every second
// document.addEventListener('DOMContentLoaded', function () {
//     const dateElement = document.getElementById('current-date');
//     function updateDateTime() {
//         const now = new Date();
//         const day = String(now.getDate()).padStart(2, '0');
//         const month = String(now.getMonth() + 1).padStart(2, '0');
//         const year = now.getFullYear();
//         const hours = String(now.getHours()).padStart(2, '0');
//         const minutes = String(now.getMinutes()).padStart(2, '0');
//         const seconds = String(now.getSeconds()).padStart(2, '0');
//         const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
//         dateElement.textContent = formattedDate;
//     }
//     updateDateTime();
//     setInterval(updateDateTime, 1000);
// });
