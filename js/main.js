const loader = document.querySelector("[data-loader]");

window.addEventListener("load", () =>{
    loader.classList.add("remove")
})


// Re-used elements function

const addEventElements = function (elements, eventType, callBack){
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callBack)
    }
}

// Nav tg Mobile

const nav = document.querySelector("[data-nav]");

const navTg = document.querySelectorAll("[data-nav-tg]");

const overlay = document.querySelector("[data-overlay]");


const tgNav = function () {
    nav.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}

addEventElements(navTg, "click", tgNav)

// For Header Sticky

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active");
})