'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

function detectPersonalLevel(){
  if (numberOfFilms < 10) {
    alert('You have watched so little of films!');
  } else if (numberOfFilms <= 30) {
    alert('You are nice viewer!');
  } else if (numberOfFilms > 30) {
    alert('You are great movie-addict!');
  } else {
    alert ('The error occured!');
  }
}
detectPersonalLevel();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


let a, b;

function rememberMyFilms() {
  for (let i = 1; i <= 2; i++){
  a = prompt('Один из последних просмотреных фильмов?', '');
  b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
  } else {
      console.log('error');
      alert('Something went wrong, please try again!');
      i--;
    }
  }
}
rememberMyFilms();

function writeYourGanres() {
  for (let i = 1; i <= 3; i++){
    let genre = prompt(`What's your favorite movie genre number ${i}?`);

    if (genre != null && genre != '' && genre.length < 50) {
      personalMovieDB.genres[i - 1] = genre;
      console.log('done');
    } else {
        console.log('error');
        alert('Something went wrong, please try again!');
        i--;
    }
  }
}

writeYourGanres();

function showMyDB(){
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
showMyDB();