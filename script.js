const container = document.getElementById("container");
const reset = document.getElementById("reset");
const button = document.getElementById("size");

let wh = 16;

button.addEventListener("click", () => {
    let size = prompt("Enter the size of the grid (between 2 and 100):")
    if (!size || isNaN(size)) {
        alert("Please provide a valid number.")
        return null;
    } else if (size < 2 || size > 100) {
        alert("Enter a size between 2 and 100.");
        return null;
    } else {
        changeGrid(parseInt(size))
    }
})
function changeGrid(wh) {
    container.innerHTML = "";
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
            content.style.width = `${700 / wh - 2}px`;
            content.style.height = `${700 / wh - 2}px`;
            content.addEventListener("mouseover", event => {
                event.target.classList.add("color");
            })
        }

    }
}

reset.addEventListener("click", () => {
    let elements = document.querySelectorAll(".content");
    elements.forEach(element => {
        element.classList.remove("color");
    })
})