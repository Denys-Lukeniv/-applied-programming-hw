// ## Задание

// Написать реализацию кнопки "Показать пароль".

// #### Технические требования:
// - В файле `index.html` лежит разметка для двух полей ввода пароля. 
// - По нажатию на иконку рядом с конкретным полем - должны отображаться символы, которые ввел пользователь, иконка меняет свой внешний вид.
// - Когда пароля не видно - иконка поля должна выглядеть, как та, что в первом поле (Ввести пароль)
// - Когда нажата иконка, она должна выглядеть, как та, что во втором поле (Ввести пароль)
// - По нажатию на кнопку Подтвердить, нужно сравнить введенные значения в полях
// - Если значения совпадают - вывести модальное окно (можно alert) с текстом - `You are welcome`;
// - Если значение не совпадают - вывести под вторым полем текст красного цвета  `Нужно ввести одинаковые значения`
// - После нажатия на кнопку страница не должна перезагружаться
// - Можно менять разметку, добавлять атрибуты, теги, id, классы и так далее.

const password = document.querySelector('#your-password')
const confirmPassword = document.querySelector('#confirm-password')

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains("fa-eye-slash")) {
        e.target.classList.replace("fa-eye-slash", 'fa-eye')
        e.target.previousElementSibling.type = "password";

    } else if (e.target.classList.contains("fa-eye")) {
        e.target.classList.replace("fa-eye", 'fa-eye-slash')
        e.target.previousElementSibling.type = "text";
    }
})

let button = document.querySelector('.btn')

button.addEventListener('click', (ev) => {

    if(password.value === confirmPassword.value){
        alert('You are welcome')
    } else {
        alert('Нужно ввести одинаковые значения')
    }
})
