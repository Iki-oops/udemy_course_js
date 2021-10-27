/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm = '',
    rateFilm = '';

do {
    lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    rateFilm = prompt('Насколько оцените его?', '');
}
while ((lastFilm == '' || rateFilm == '') ||
      (lastFilm.length > 50 || rateFilm.length > 50));

personalMovieDB.movies[lastFilm] = rateFilm;

const count = personalMovieDB.count;

if (count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (count >= 10 || count <= 30) {
    console.log('Вы классический зритель');
} else if (count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB.movies);
console.log(personalMovieDB);
