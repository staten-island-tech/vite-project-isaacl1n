import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

const DOMselectors = {
    body: document.body,
    toggleButton: document.getElementById("toggle-button"),
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