/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что 
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы.

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если оно false - он
пепеключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
 
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставить пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в током виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)" */


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