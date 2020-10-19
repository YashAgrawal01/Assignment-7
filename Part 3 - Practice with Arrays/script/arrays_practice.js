var favMovies = ["Harry Potter", "The Dark Knight", "Iron Man", "Inception", "The Martian"];
console.log(favMovies[1]);


//Problem 2
var movies = new Array(5);
for (var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
console.log(movies[0]);


//Problem 3
movies.splice(2, 0, "James Bond");
console.log(movies.length);


//Problem 4
var movies = [];
for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}
delete movies[0];
console.log(movies);


//Problem 5
var favMovies = ["Harry Potter", "The Dark Knight", "Iron Man", "Inception", "The Martian", "Black Panther", "Now You See Me"];
var movies = [];


for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    console.log(movies[j]);
}


//Problem 6
for (index in movies) {
    console.log(movies[index]);
}


//Problem 7
var sortedMovies = movies.sort();
for (index in sortedMovies) {
    console.log(sortedMovies[index]);
}


//Problem 8
var leastFavMovies = ["Transformers", "Pixels", "The Matrix"];
var favMovies = movies;

console.log("\nMovies I like:\n\n" + favMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//Problem 9
var movies = favMovies.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

//Problem 10
console.log(reverseSort.pop());