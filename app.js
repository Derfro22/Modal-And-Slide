const burgerBtn = document.querySelector(".fa-bars");
const slide = document.querySelector(".menu")
const modalBtn = document.querySelector(".modalButton");
const popup = document.querySelector(".modal");
const exitBtn = document.querySelector(".exitButton");



burgerBtn.addEventListener('click', () => {
    slide.classList.toggle('active');
});

modalBtn.addEventListener('click', () => {
    popup.style.display = "block";
    document.body.classList.add("modal-open");
});

exitBtn.addEventListener('click', () => {
    document.body.classList.remove("modal-open");
    popup.style.display = "none";
});

document.addEventListener("click", outsideClick);

function outsideClick(e) {
    if (!popup.contains(e.target) && e.target !== modalBtn) {
        document.body.classList.remove("modal-open");
        popup.style.display = "none";
    }
}