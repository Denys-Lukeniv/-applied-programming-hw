// ## Теоретический вопрос

// 1. Почему для работы с input не рекомендуется использовать события клавиатуры?

// ## Задание

// Реализовать функцию подсветки нажимаемых клавиш

// #### Технические требования:
// - В файле `index.html` лежит разметка для кнопок. 
// - Каждая кнопка содержит в себе название клавиши на клавиатуре
// - По нажатию указанных клавиш - та кнопка, на которой написана эта буква, должна окрашиваться в синий цвет. При этом, если какая-то другая буква уже ранее была окрашена в синий цвет - она становится черной. Например по нажатию `Enter` первая кнопка окрашивается в синий цвет. Далее, пользователь нажимает `S`, и кнопка `S` окрашивается в синий цвет, а кнопка `Enter` опять становится черной.

// #### Литература:
// -  [Клавиатура: keyup, keydown, keypress](https://learn.javascript.ru/keyboard-events ) 

document.body.addEventListener('keydown', (e) => {
    const buttonKey = document.querySelector('.btn-wrapper').children
    for (let i = 0; i < buttonKey.length; i++) {
        if(buttonKey[i].dataset.id === e.key.toLowerCase()){
            buttonKey[i].classList.add('btn-blue')
        } else{
            buttonKey[i].classList.remove('btn-blue')
        }
    }
})
