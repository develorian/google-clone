"use strict";
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text != "") {
        const url = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
        window.location.href = url;
    }
});
