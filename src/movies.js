// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniquifyArray (array) {
    var uniqueArray = [] ;
    if (array == 0) {
      return null;
    } else {
        for (let i = 0; i < array.length; i++) {
          if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i])
          }
        }
        if (array.length === uniqueArray.length) {
          return array;
      }
        return uniqueArray;
      }
    }

function getAllDirectors(array) {
    var directors = array.map( movie => movie.directors);
    return uniquifyArray(directors);


}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(array){
    var dramaBySteven = array.filter( movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));

    if( dramaBySteven.length === 0){
        return 0;

    }
    else if (dramaBySteven.length === 1){
        return 1;
    
    
    }


}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
  var avRate ; 
  if(array.length === 0){
      avRate =0;
  }else{
    avRate = array.reduce(function(a,c){
        if(!c.rate){
        return a;
    }
  



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){

}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){

}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
