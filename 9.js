// ## Задание

// Реализовать переключение вкладок (табы) на чистом Javascript.

// #### Технические требования:
// - В папке `tabs` лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки. 
// - Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
// - Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, чтобы функция, написанная в джаваскрипте, из-за таких правок не переставала работать.

// #### Литература:
// - [HTMLElement.dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset)

let tabTrigger = document.querySelectorAll('.tabs li');

tabTrigger.forEach(function(tabTriggerBtn){
    tabTriggerBtn.addEventListener('click', function(){
        let currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');

        document.querySelector('.tab-content.is-open').classList.remove('is-open');
        document.querySelector('.tabs li.is-active').classList.remove('is-active');

        currentTabData.classList.add('is-open');
        this.classList.add('is-active');
    });
});
