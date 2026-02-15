
// document.querySelectorAll('[data-include]').forEach(async (el) => {
//   const file = el.getAttribute('data-include');
//   const res = await fetch(file);
//   const html = await res.text();
//   el.innerHTML = html;
// });

// for include.js
// https://chatgpt.com/c/686c6cbb-4aa8-8007-a0a3-09b2b6b4566a

// Example simple include.js snippet:
document.querySelectorAll('[data-include]').forEach(el => {
  const url = el.getAttribute('data-include');
  fetch(url)
    .then(response => response.text())
    .then(html => {
      el.innerHTML = html;
      // Optional: recursively process includes inside the included content here
    })
    .catch(err => console.error('Include failed:', err));
});

// After all includes done, dispatch event:
// If includes load asynchronously, you may want to track when all finish.
// Here's a simple Promise.all example:

function loadIncludes() {
  const elements = Array.from(document.querySelectorAll('[data-include]'));
  const promises = elements.map(el => {
    const url = el.getAttribute('data-include');
    return fetch(url)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
      });
  });
  return Promise.all(promises);
}

loadIncludes().then(() => {
  document.dispatchEvent(new Event('includesLoaded'));
});

// https://www.google.com/search?q=data-include+html
// https://www.google.com/search?q=data-include
