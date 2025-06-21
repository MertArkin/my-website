


document.querySelectorAll('[data-include]').forEach(async (el) => {
  const file = el.getAttribute('data-include');
  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;
});


// https://www.google.com/search?q=data-include+html

// https://www.google.com/search?q=data-include


