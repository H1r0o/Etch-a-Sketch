const container = document.getElementById("container");

let pixels = 256;

for (let i = 0; i <= pixels; i++) {

    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
}