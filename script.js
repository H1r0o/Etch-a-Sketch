const container = document.getElementById("container");

let wh = 16;

const columns = document.createElement("div");
columns.classList.add("column");
container.appendChild(columns);

for (let i = 1; i <= wh; i++) {
    const rows = document.createElement("div");
    rows.classList.add("row");
    columns.appendChild(rows);


    for (let i = 1; i <= wh; i++) {

        const content = document.createElement("div");
        content.classList.add("content");
        rows.appendChild(content);
        content.style.width = `${500 / wh - 2}px`;
        content.style.height = `${500 / wh - 2}px`;
        content.addEventListener("mouseover", event => {
            event.target.classList.add("color");
        })
    }

}

