#!/usr/bin/env node

// Task:: Write the prime numbers from 1 to 100 to a file.

// finding prime numbers  to a limit, and returning the array filled with those.
function findPrimes(arrayFoundPrimes, limit)
{
	//if array with results is not initialized, init the whole thing;
	if (!arrayFoundPrimes) { 
		arrayFoundPrimes = new Array(); 
		}
		
	// js sieve implementation copied from http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers
	var sieve = [], i, j;
    for (i = 2; i <= limit; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            arrayFoundPrimes.push(i);
            for (j = i << 1; j <= limit; j += i) {
                sieve[j] = true;
            }
        }
    }
	return arrayFoundPrimes;
}

// finding the first 100 primes with the above funtion. 
// and I know, this is freaking ugly. But I am too lazy =(
function find100Primes(){
	var primes = [];
	var current = 0;
	while(primes.length<100)
	{
		primes = [];
		current = current + 1;
		findPrimes(primes, current);
	}
	return primes;
}

var test;

test = find100Primes();

var fs = require('fs');
var outfile = "hmwk-01-02.txt";
var out = test;
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
