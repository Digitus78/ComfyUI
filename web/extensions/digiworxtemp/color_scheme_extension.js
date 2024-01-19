import { api } from "../scripts/api.js";

function updateColorScheme() {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;
    styleSheet.insertRule(':root { --bg-color: #121026; --fg-color: #a7a7d1; /*... other color variables*/ }', 0);
    // Add more rules as needed
}

document.addEventListener('DOMContentLoaded', updateColorScheme);
