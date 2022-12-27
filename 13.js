// ## Задание

// Реализовать возможность смены цветовой темы сайта пользователем.

// #### Технические требования:
// - Взять любое готовое домашнее задание по HTML/CSS.
// - Добавить на макете кнопку "Сменить тему".
// - При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение. При повтором нажатии - возвращать все как было изначально - как будто для страницы доступны две цветовых темы.
// - Выбранная тема должна сохраняться и после перезагрузки страницы

// #### Литература:
// - [LocalStorage на пальцах](https://tproger.ru/articles/localstorage/)

const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
});
