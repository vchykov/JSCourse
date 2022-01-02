/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)
document.querySelectorAll(".promo__adv img").forEach((item) => {
     item.remove();
 });

// 2)
document.querySelector(".promo__content .promo__bg .promo__genre").textContent = "драма";

// 3) Вызволо ступор поиск тех самых свойств
document.querySelector(".promo__content .promo__bg").style.backgroundImage = "url(img/bg.jpg)";

// 4) & 5)

const interactiveList = document.querySelector(".promo__interactive .promo__interactive-list"),
      interactiveListItem = interactiveList.querySelector(".promo__interactive-item"), 
      interactiveListItemDel = interactiveListItem.querySelector(".delete");
      
document.querySelectorAll(
    ".promo__interactive .promo__interactive-list .promo__interactive-item"
    ).forEach(item => {
        item.remove();
    });

movieDB.movies.sort().forEach((movie, index) => {
    interactiveListItem.textContent = `${index + 1} -  ${movie}`;
    interactiveListItem.appendChild(interactiveListItemDel.cloneNode(true));
    interactiveList.appendChild(interactiveListItem.cloneNode(true));
});
