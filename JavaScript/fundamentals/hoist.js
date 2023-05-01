// 1 ------------------------------------------------------------
console.log(hello);                                   
var hello = 'world';                                 
// var hello
// console.log(hello) --- undefined
// hello = "world"


// 2 ------------------------------------------------------------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// needle = "haystack"
// test is called
// needle = "magnet"
// console.log(needle) --- magnet


// 3 ------------------------------------------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// brendan = 'super cool'
// console.log(brendan) --- super cool


// 4 ------------------------------------------------------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// food = 'chicken'
// console.log(food) --- chicken
// call eat function
// var food = 'gone'
// food = 'half-chicken'
// console.log(food) --- half-chicken


// 5 ------------------------------------------------------------
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// mean is not a function yet, error


// 6 ------------------------------------------------------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre
// console.log(genre) --- undefined
// var genre = 'disco'
// call rewind function
// var genre
// genre = 'rock"
// console.log(genre) --- rock
// genre = "r&b"
// console.log(genre) --- r&b
// console.log(genre) --- disco



// 7 ------------------------------------------------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//dojo = "san jose"
// console.log(dojo) --- san jose
// call learn function
// var dojo
// dojo = "seattle"
// console.log(dojo) --- seattle
// dojo = "burbank"
// console.log(dojo) --- burbank
// console.log(dojo) --- san jose


