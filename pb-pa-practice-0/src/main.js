
const products = [
    {
        name: "Egg Plant",
        quantity: 13,
        type: "v"
    },
    {
        name: "Apple",
        quantity: 25,
        type: "f"
    },
    {
        name: "Strawberry",
        quantity: 20,
        type: "f"
    },
    {
        name: "Garlic",
        quantity: 7,
        type: "v"
    },
    {
        name: "Tomato",
        quantity: 12,
        type: "v"
    },
    {
        name: "Blueberry",
        quantity: 50,
        type: "f"
    }
];


const showFullTypeButton = document.querySelector("#full-type-btn");
showFullTypeButton.addEventListener("click", showFullType);
function showFullType() {
    const vegTypes = document.querySelectorAll(".type");
    for (let i = 0; i < vegTypes.length; i++) {
        let type = vegTypes[i].innerText;
        if (type == "v") {
            vegTypes[i].innerText = "vegetable";
        } else if (type == "f") {
            vegTypes[i].innerText = "fruit";
        }
    }
}
function populateTable() {
    const tBody = document.querySelector("#products");
    for (const product of products) {
        const row = createChild("tr", tBody);

        const name = createChild("td", row, product.name);
        name.classList.add("name");

        const quantity = createChild("td", row, product.quantity);
        quantity.classList.add("quantity");

        const type = createChild("td", row, product.type);
        type.classList.add("type");
    }
}
//first task
const showHighlightButton = document.querySelector("#highlight-btn")
showHighlightButton.addEventListener('click', showHighlightButt)
function showHighlightButt() {
    const vegquantity = document.querySelectorAll(".quantity")
    for (let i = 0; i < vegquantity.length; i++) {
        let quan = vegquantity[i].innerText;
        if (quan % 2 == 0) {
            vegquantity[i].style.background = 'lightblue'
        }
    }
}
//second task
const totalGrocCount = document.querySelector('#total-count-btn')
totalGrocCount.addEventListener('click', totalCount)
function totalCount() {
    let total = 0;
    for (let product of products) {
        total += product.quantity
    }
    const totalAmount = document.getElementById('total-count')
    totalAmount.innerText = total
}
//third task
const searchBarClicked = document.getElementById('search-btn')
searchBarClicked.addEventListener('click', search)
function search() {
    const searchedElement = document.getElementById("search")
    const vegetableNames = document.querySelectorAll(".name")
    for (let i = 0; i < vegetableNames.length; i++) {
        if (searchedElement.value.toLowerCase() === vegetableNames[i].innerText.toLowerCase()) {
            vegetableNames[i].style.color = 'red'
        } else {
            vegetableNames[i].style.color = 'black'
        }
    }
}




function createChild(tag, parent, innerText) {
    const element = document.createElement(tag);
    parent.appendChild(element);
    if (innerText) {
        element.innerText = innerText;
    }
    return element;
}
populateTable();

