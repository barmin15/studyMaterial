
const items = [
    {
        text: "eat a croissant in France",
        done: false
    },
    {
        text: "visit Tokyo",
        done: true
    },
    {
        text: "have a lunch with my boss",
        done: true
    },
    {
        text: "go to space",
        done: false
    },
    {
        text: "swim with sharks",
        done: false
    }
]

function renderList() {
    const list = document.querySelector("#list");
    for (const item of items) {
        const element = document.createElement("div");
        list.append(element);
        element.classList.add("list-item");
        const button = document.createElement("button");
        element.append(button);
        button.textContent = "✓";
        const text = document.createElement("span");
        text.textContent = item.text;
        element.append(text);
    }
}

renderList();
