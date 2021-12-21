
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. Если стоит в позиции 
false - выводит в консоль главный объект программы
 
3) Создать функцию writeYourGenres, в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

(function () {

'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, 
    actors: {},
    genres: [],
    private: true,
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == " "|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

personalMovieDB.count = numberOfFilms;

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    let i = 0;
    while (i < 3) {
        const yourFavouriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        if (yourFavouriteGenre == null || yourFavouriteGenre == "" || yourFavouriteGenre.length > 50) {
            console.log("Ошибка. Вводите непустую строку до 50 символов!");
            continue;
        } else {
            personalMovieDB.genres[i] = yourFavouriteGenre;
            i++;
        }
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

}());