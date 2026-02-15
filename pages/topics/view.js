




// <!-- <div id="content"></div>

// <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
// <script>
// const file = new URLSearchParams(location.search).get("f");

// fetch(file)
//   .then(r => r.text())
//   .then(md => {
//     document.getElementById("content").innerHTML = marked.parse(md);
//   });
// </script> -->


// <!-- <div id="content"></div>

// <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
// <script>
// const file = new URLSearchParams(location.search).get("f");

// // prepend the folder if needed
// const folder = "pages/topics/writing/"; // adjust dynamically if needed
// fetch(folder + file)
//   .then(r => r.text())
//   .then(md => {
//     document.getElementById("content").innerHTML = marked.parse(md);
//   });
// </script>
//  -->









const openFiles = {}; // track open/closed state per folder

async function initFolderBlock(folder, containerId) {
  const container = document.getElementById(containerId);

  // <h2>${folder}</h2>
  container.innerHTML = `
    <ul id="${folder}-list"></ul>
    <div id="${folder}-content"></div>
  `;

  // const indexPath = folder + "/index.json";
  const indexPath = "topics/" + folder + "/index.json";


  try {
    const res = await fetch(indexPath);
    if (!res.ok) throw new Error("Index not found");
    const items = await res.json();

    items.sort((a,b) => b.date.localeCompare(a.date));

    const listEl = container.querySelector(`#${folder}-list`);
    const contentEl = container.querySelector(`#${folder}-content`);

    listEl.innerHTML = items.map(i => {
      return `<li><a id="${folder}-${i.file}" 
                 onclick="toggleMarkdown('${folder}','${i.file}','${folder}-content'); return false;">
                 ${i.title}</a></li>`;
    }).join("");

  } catch(e) {
    container.innerHTML += `<p>Error loading folder: ${e}</p>`;
  }
}

async function toggleMarkdown(folder, file, contentId) {
  const key = folder + "/" + file;
  const el = document.getElementById(`${folder}-${file}`);
  const contentEl = document.getElementById(contentId);

  if(openFiles[key]) { // collapse if open
    contentEl.innerHTML = "";
    el.classList.remove("active");
    openFiles[key] = false;
    return;
  }

  // close any other open file in the same folder
  for(const k in openFiles) {
    if(k.startsWith(folder + "/") && openFiles[k]) {
      const prevEl = document.getElementById(`${folder}-${k.split("/")[1]}`);
      prevEl?.classList.remove("active");
      contentEl.innerHTML = "";
      openFiles[k] = false;
    }
  }

  // load markdown
  // const filePath = folder + "/" + file;
  const filePath = "topics/" + folder + "/" + file;

  try {
    const res = await fetch(filePath);
    if(!res.ok) throw new Error("File not found");
    const text = await res.text();
    contentEl.innerHTML = marked.parse(text);
    el.classList.add("active");
    openFiles[key] = true;
  } catch(e) {
    contentEl.innerText = "Error loading file: " + e;
  }
}



