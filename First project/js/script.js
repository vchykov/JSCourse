
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем польователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и поучить её длину)
 
3) При помощи условий проверить personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

(function () {

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

personalMovieDB.count = numberOfFilms;

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

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log("Просмотрено довольно мало фильмов");
} else if ((personalMovieDB.count >= 10) && (personalMovieDB.count <= 30)) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

}());