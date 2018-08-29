/*
 *
 *  use spread operator and destructure operators
 * 
 * 
 */

var evens = [2,4,6,8];
var odds = [1,3,5,7];
var primes = [2,3,5,7,11];
// using spread operator
var BigArray = 
    [
        ...primes,
        ...evens,
        ...odds
    ]

 // printing on console
 console.log(BigArray);
 var t2 = [...primes];
 console.log(t2);

 var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New york',
    twitter: '@jamesbond'
 };
 // using destructure operator
 var {first,last,country,city,twitter} = jamesBond;
 console.log(first + " ," +last + " ," + country +" ," + city + " ," +twitter);
 var players = ["paul","andy","darell","jim"];
  // using destructure operator on players 
 var [player1,player2,player3] = players;
 console.log("Players : "+ player1 + " " + player2 + " " + player3 );


