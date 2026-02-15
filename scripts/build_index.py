




import os, json, re

"""

#todo

write the docs for this
12/02/2026


"""



SECTIONS = ["writing", "projects", "recipes"]
BASE = "pages/topics"



for section in SECTIONS:
    folder = os.path.join(BASE, section)
    index_file = os.path.join(folder, "index.json")

    items = []
    for f in os.listdir(folder):
        if f.endswith(".md"):
            date = f[:10]
            with open(os.path.join(folder, f)) as file:
                text = file.read()
                title_match = re.search(r"title:\s*(.+)", text)
                title = title_match.group(1) if title_match else f
            items.append({
                "title": title,
                "file": f,
                "date": date
            })

    # sort by date just in case
    # items.sort(key=lambda x: x["date"])
    
    # sort by date newest → oldest
    items.sort(key=lambda x: x["date"], reverse=True)

    with open(index_file, "w") as out:
        json.dump(items, out, indent=2)

