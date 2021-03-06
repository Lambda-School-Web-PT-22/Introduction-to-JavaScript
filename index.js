/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 19
if(votingAge > 18){
    console.log(true);
} else {
    console.log(false);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let declared = "declared";
let conditional = 2;
if(conditional === 2){
    declared = "Declared changed"
}
console.log(declared)




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let convertString = "1999";
Number(convertString);

console.log(convertString)




//Task d: Write a function to multiply a*b 
function multiply(a,b){
    console.log(a*b);
}
multiply(5,5)





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function ageDogYears(age){
    return(age * 7)
}
ageDogYears(10)




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(age, weight){
    if(age >=1){
        if(weight < 6){
            return(weight *.05)
        } else if(weight < 11){
            return(weight *.04)
        } else if(weight < 16){
            return(weight *.03)
        } else {
            return(weight * .02)
        }
    } else {
        if(age < .4){
            return(weight * .1)
        } else if(age < .6){
            return(weight * .05)
        } else {
            return(weight * .04)
        }
    }
}  
console.log(dogFeeder(1, 15))




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 



function rps(player){
    player = player.toUpperCase();
    computerResult = ""
    let computer = Math.floor(Math.random() * 3);

    if(computer === 0){
        computerResult = "ROCK";
    } else if(computer === 1){
        computerResult = "PAPER";
    } else if(computer === 2){
        computerResult = "SCISSORS";
    }
    console.log(computerResult)
    if(player === computerResult){
        return("TIE");
    } else {
        if(computerResult === "ROCK"){
            if(player === "PAPER"){
                return("WIN");
            } else {
                return("LOSE");
            }
        } else if(computerResult === "PAPER"){
            if(player === "SCISSORS"){
                return ("WIN");
            } else {
                return ("LOSE")
            }
        } else {
            if(player === "ROCK"){
                return("WIN");
            } else {
                return("LOSE")
            }
        }
    }
}
console.log(rps("ROCK"))

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kilometersToMiles(kilometers){
    console.log(kilometers * 0.621371)
}
kilometersToMiles(15)




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCentimeters(feet){
    console.log(feet * 30.48)
}  
feetToCentimeters(8)




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(bottles){
    for(bottles >= 1; bottles--;){
        console.log(bottles, "bottles of soda on the wall", bottles, "bottles of soda.  Take one down, pass it around", bottles, "bottles of soda on the wall")
    }
}
annoyingSong(100)




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function grades(percent){
    if(percent > 89){
        return("A");
    } else if(percent > 79){
        return("B");
    } else if(percent > 69){
        return("C");
    } else if(percent > 59){
        return("D");
    } else {
        return("F");
    }
} 
console.log(grades(65))

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function countVowels(str){
    const vowelList = 'aeiou';
    let vowelCount = 0;
    str = str.toLowerCase();
    for(let x = 0; x < str.length; x++){
        if(vowelList.includes(str[x])){
        vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels("SteveJessicaAlex"))






/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


// SEE HTML




