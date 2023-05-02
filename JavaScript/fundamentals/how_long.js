Number.prototype.isPrime = function() {
    for( let i=2; i<Math.sqrt(this) + 1; i++ ) {
        if( this % i === 0 ) {
                return false;
        }
    }
    return true;
    }
    

// const { performance } = require('perf_hooks');
// const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);


// ITERATIVE IS FASTER

const { performance } = require('perf_hooks');
const start = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)
console.log(`This took ${performance.now() - start} milliseconds to run`);

// const { performance } = require('perf_hooks');
// const start = performance.now();
// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = [...story].reverse().join("");
// console.log(reversed1)
// console.log(`This took ${performance.now() - start} milliseconds to run`);