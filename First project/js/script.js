/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        while (personalMovieDB.count == " " || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function () {
        let i = 2;
        while (i > 0) {
            const lastSeenFilmName = prompt("Один из последних просмотренных фильмов?", ""),
                lastSeenFilmEstimate = prompt("На сколько оцените его?", "");
            if (lastSeenFilmName == null || lastSeenFilmName == "" || lastSeenFilmName.length > 50 ||
                lastSeenFilmEstimate == null || lastSeenFilmEstimate == "") {
                console.log("Ошибка. Вводите непустую строку до 50 символов!");
                continue;
            } else {
                personalMovieDB.movies[lastSeenFilmName] = lastSeenFilmEstimate;
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        let i = 0;
        while (i < 1) {
            const genres = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();
            if (genres == null || genres == "" || genres.length > 1000) {
                console.log("Ошибка. Вводите непустую строку до 1000 символов!");
                continue;
            } else {
                personalMovieDB.genres = genres.split(", ").sort();
                i++;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (!personalMovieDB.private) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.toggleVisibleMyDB();