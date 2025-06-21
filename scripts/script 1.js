const posts = ['posts/post1.md', 'posts/post2.md'];

const container = document.getElementById('posts');



// posts.forEach(path => {
//   fetch(path)
//     .then(res => res.text())
//     .then(text => {
//       const article = document.createElement('article');
//       const pre = document.createElement('pre');
//       const div = document.createElement('div');
//       pre.textContent = text;
//       div.textContent = "---";
//       article.appendChild(pre);
//       container.appendChild(article);
//       container.appendChild(div);
//     });
// });
async function loadPosts() {
  for (const path of posts) {
    const res = await fetch(path);
    const text = await res.text();
    
    const article = document.createElement('article');
    const pre = document.createElement('pre');
    const div = document.createElement('div');
    
    // pre.textContent = text;
    div.textContent = "---";
    
    // do/fix this in one go not speerate
    article.innerHTML = marked.parse(text);
    div.innerHTML = marked.parse("---");

    article.appendChild(pre);
    container.appendChild(article);
    container.appendChild(div);
  }
}

loadPosts();




const modeToggle = document.getElementById('mode-toggle');

function setMode(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    modeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    modeToggle.textContent = '🌙';
  }
  localStorage.setItem('theme', mode);
}

modeToggle.addEventListener('click', () => {
  const currentMode = document.body.classList.contains('dark') ? 'dark' : 'light';
  setMode(currentMode === 'dark' ? 'light' : 'dark');
});

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setMode(savedTheme);





function updateDate() {
  const el = document.getElementById('active-date');
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  el.textContent = `Today is ${formatted}`;
}

setInterval(updateDate, 1000);
updateDate();


