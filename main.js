function sayHello() {
    alert("Hi, its JavaScript!");
}
// Функція, яка виконується при завантаженні сторінки
function onPageLoad() {
    alert("Page is loaded!");
}

// Функція, яка виконується при виході користувача зі сторінки
function onPageUnload() {
    alert("User is going out of page.");

// Додамо обробник для кнопки
document.getElementById("unloadButton").onclick = function () {
    onPageUnload();
};