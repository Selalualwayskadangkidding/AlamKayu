document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
    });
});

document.getElementById("year").textContent = new Date().getFullYear();