import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'
import { cafeteriaFood } from './menu.js'

const DOMselectors = {
    body: document.body,
    toggleButton: document.getElementById("toggle-button"),
    allFilter: document.getElementById("filter-all"),
    beverageFilter: document.getElementById("filter-beverages"),
    entreeFilter: document.getElementById("filter-entrees"),
    sidesFilter: document.getElementById("filter-sides"),
    veganFilter: document.getElementById("filter-vegan"),
    menu: document.getElementById("menu"),
}

function toggleColors() {
    if (DOMselectors.body.classList.contains("light")) {
        DOMselectors.body.classList.remove("light");
        DOMselectors.body.classList.add("dark");
    } else if (DOMselectors.body.classList.contains("dark")) {
        DOMselectors.body.classList.remove("dark");
        DOMselectors.body.classList.add("light");
    };
};
DOMselectors.toggleButton.addEventListener("click", toggleColors);

cafeteriaFood.forEach(food => {
    DOMselectors.menu.insertAdjacentHTML(
        "beforeend",
        `
            <div class="menu-item">
                <img src="${food.image}" alt="" class="item-img">
                <h2 class="item-name">${food.name}</h2>
            </div>
        `
    );
});

function filterAll() {
    DOMselectors.menu.innerHTML = "";
    cafeteriaFood.forEach(food => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
                <div class="menu-item">
                    <img src="${food.image}" alt="" class="item-img">
                    <h2 class="item-name">${food.name}</h2>
                </div>
            `
        );
    });
};
DOMselectors.allFilter.addEventListener("click", filterAll);

function filterBeverages() {
    DOMselectors.menu.innerHTML = "";
    const beverages = cafeteriaFood.filter(food => food.beverage === true);
    beverages.forEach(food => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
            <div class="menu-item">
                <img src="${food.image}" alt="" class="item-img">
                <h2 class="item-name">${food.name}</h2>
            </div>
            `
        );
    });
};
DOMselectors.beverageFilter.addEventListener("click", filterBeverages);

function filterEntrees() {
    DOMselectors.menu.innerHTML = "";
    const entrees = cafeteriaFood.filter(food => food.entree === true);
    entrees.forEach(food => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
            <div class="menu-item">
                <img src="${food.image}" alt="" class="item-img">
                <h2 class="item-name">${food.name}</h2>
            </div>
            `
        );
    });
};
DOMselectors.entreeFilter.addEventListener("click", filterEntrees);

function filterSides() {
    DOMselectors.menu.innerHTML = "";
    const sides = cafeteriaFood.filter(food => food.side === true);
    sides.forEach(food => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
            <div class="menu-item">
                <img src="${food.image}" alt="" class="item-img">
                <h2 class="item-name">${food.name}</h2>
            </div>
            `
        );
    });
};
DOMselectors.sidesFilter.addEventListener("click", filterSides);

function filterVegan() {
    DOMselectors.menu.innerHTML = "";
    const veganFood = cafeteriaFood.filter(food => food.vegan === true);
    veganFood.forEach(food => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
            <div class="menu-item">
                <img src="${food.image}" alt="" class="item-img">
                <h2 class="item-name">${food.name}</h2>
            </div>
            `
        );
    });
};
DOMselectors.veganFilter.addEventListener("click", filterVegan);