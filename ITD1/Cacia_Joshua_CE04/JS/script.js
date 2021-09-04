/* Joshua Cacia
   07-15-21
   CE04 Conditionals */
//alert user of assignment
alert("Welcome to the Conditionals assigment, let's start by opening up your console ");
//problem 1
//alert the user so there aware of whats going on
alert("Grade letter calculater")
//prompt user for the variable
let usergrade =(prompt("What was your score?"));
// define the else if statement
if(usergrade>100)
{
    console.log("error")
}
else if(usergrade>=90 && usergrade<=100)
{
    console.log("You have a "+usergrade+ " which makes your grade is an A")
}
else if(usergrade<=89 && usergrade>=80)
{
    console.log("You have a "+usergrade+" which makes your grade a B")
}
else if(usergrade<=79 && usergrade>=70)
{
    console.log("You have a "+usergrade+" which makes your grade a C")
}
else if(usergrade<=69 && usergrade>=60)
{
    console.log("You have a "+usergrade+" which makes your grade a D")
}
else
{
    console.log("You have a "+usergrade+" which makes your grade a F")
}
//problem 3
//alert the user on whats going on
alert("Pumpkin patch pickers");
//prompt user for weight of pumpkin
let weight=(prompt("How much does your pumpkin weigh?"));
//
if(weight<0)
{
    console.log("Invalid Weight")
}
else if(weight<5.5)
{
    console.log("Your pumpkin of "+weight+"lb weight will cost $"+weight*1)
}
else if(weight<10.75 && weight>=5.5)
{
    console.log("Your pumpkin of "+weight+"lb weight will cost $"+weight*.90)
}
else if(weight>=10.75 && weight<25)
{
    console.log("Your pumpkin of "+weight+"lb weight will cost $"+weight*.80)
}
else if(weight>=25 && weight<50)
{
    console.log("Your pumpkin of "+weight+"lb weight will cost $"+weight*.70)
}
else if(weight>=50 && weight<=100)
{
    console.log("Your pumpkin of "+weight+"lb weight will cost $"+weight*.60)
}
else if(weight>100)
{
    console.log("Your pumpkin of "+weight+"lb weight will cost $"+weight*50)
}

// let to establish variable, pareseInt to establish integers
//let score1 = parseInt(prompt("What was your first test score?"));

//
//let score2 = parseInt(prompt("What was"))

// problem 3
//alert user of the new problem
alert("Loyalty Card");
// define price1
let price1 =parseFloat(prompt("What is the first item price"));
//log price 1
console.log("item 1 price $"+price1);
//define price 2
let price2 = parseFloat(prompt("What is the price of the second item"));
// log price 2
console.log("item 2 price $"+price2);
// figure out if a reward member
let member = (prompt("Are you a rewards member"));
// log if member
console.log("member? "+member);
// define the total of prices
let total = price1+price2;
// define member discount
let memberP = total*.05;
// define new member price
let memberT = total-memberp;
//run the total in an if else to decifer if a member or not
if(member=="yes")
{
    console.log("Your total today with discount = $"+memberT1)
}
else
{
    console.log("Your total today is $"+total)
}