/* Joshua Cacia
07-09-2021
CE03 Let's Go Shopping */
// alert to inform user of what's going on
let points=0;
console.log(points++);
console.log(points+=5);
console.log(points-=1);
console.log(points*=2)
alert("I would love to calculate your grocery prices for you");
// prompting user to collect item 1  
let item1 =prompt("What is your first item?");
// having console log item 1
console.log("item = "+item1);
// prompt user for price 1
let price1 =prompt("What is the price of that item?");
// have console log price 1
console.log(" @ "+price1);
// prompt user for the amount of item 1 being purchased
let numb1 =prompt("How many of this item do you have")
// logging amount of item 1 being bought
console.log("quantity = "+numb1);
// adding price1 and numb1
let total=price1*numb1;
// logging the total for item 1
console.log("item 1 price = "+total);
// promting user for item 2
let item2 =prompt("What is item number 2?")
// have console long item 2
console.log("item 2 = "+item2);
// prompting user for price 2
let price2 =prompt("What is the price of that item?");
// have console log price 2
console.log(" @ "+price2);
// promting user for the amount of item 2 being purchased
let numb2 =prompt("How many of this item do you have?");
// have console log numb2
console.log("quantity = "+numb2);
// adding price2 and numb2
let total2=price2*numb1;
//logging total for item 2
console.log("item 2 price = "+total2);
// adding total and total2 for price before tax
let sum=total+total2;
//have console log sum of the 2 totals
console.log("Subtotal = "+sum);
//  calculate tax by multiplying the sum
let tax=sum*0.07;
// have console log sales tax
console.log("0.7% Sales tax "+tax);
// redefine the sum to include the sales tax
sum=sum+tax;
// log the final price
console.log("Total = "+sum);
//Alert user on where to find the price
alert("The result can be found in the console");


