

// Script to dynamically update the current date and time every second
document.addEventListener('DOMContentLoaded', function () {
    const dateElement = document.getElementById('current-date');

    function updateDateTime() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        dateElement.textContent = formattedDate;
    }

    // Update date and time immediately
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);
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



