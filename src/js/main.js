document.querySelector('.header__menu').addEventListener('click', () => {
    const sidebar = document.querySelector('.me');
    const mainContent = document.querySelector('.main');
    mainContent.classList.toggle('main__active');
    sidebar.classList.toggle('me__active');
});

const menuItems = document.querySelectorAll(".header__link");
const underline = document.querySelector(".header__underline");
const first = document.querySelector(".header__link-first")

let f = 0
function moveUnderline(element) {
    underline.style.width = `${element.offsetWidth}px`;
    underline.style.left = `${element.offsetLeft}px`;
    f=1
}
if(!f){
    moveUnderline(first)
}
menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        moveUnderline(item);
    });
});

window.addEventListener("load", () => {
    const activeItem = document.querySelector(".menu-item.active");
    if (activeItem) moveUnderline(activeItem);
});
