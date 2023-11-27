import '../css/style.css'
import { DOMselectors } from './dom.js'
import { cafeteriaFood } from './menu.js'

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

function filterFor(array) {
    DOMselectors.menu.innerHTML = "";
    array.forEach(food => {
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
filterFor(cafeteriaFood);

function filterAll() {
    filterFor(cafeteriaFood);
};
DOMselectors.allFilter.addEventListener("click", filterAll);

function filterBeverages() {
    const beverages = cafeteriaFood.filter(food => food.beverage === true);
    filterFor(beverages);
};
DOMselectors.beverageFilter.addEventListener("click", filterBeverages);

function filterEntrees() {
    const entrees = cafeteriaFood.filter(food => food.entree === true);
    filterFor(entrees);
};
DOMselectors.entreeFilter.addEventListener("click", filterEntrees);

function filterSides() {
    const sides = cafeteriaFood.filter(food => food.side === true);
    filterFor(sides);
};
DOMselectors.sidesFilter.addEventListener("click", filterSides);

function filterVegan() {
    const vegan = cafeteriaFood.filter(food => food.vegan === true);
    filterFor(vegan);
};
DOMselectors.veganFilter.addEventListener("click", filterVegan);