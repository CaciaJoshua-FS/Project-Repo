/* Joshua Cacia
   07-20-21
   CE05 QuerySelector*/
   //alert user of what's going on
alert("Discount Double Check");
// prompt user for first item price
let itemCost =parseFloat(prompt("How much does your first item cost?"));
//prompt user for price 2
let itemCost2 =parseFloat(prompt("How much does your second item cost?"));
// create variable for total
let total =itemCost+itemCost2;
// create variable for discount price 1
let discount1 =total*.05;
// create variable for total after discount1
let discountP1 =total-discount1;
// create variable for dicsount 2
let discount2 =total*.10;
// create variable for total after discount 2
let discountP2 =total-discount2;
if(total<0)
{
document.querySelector("#firstId").innerHTML="Where are you shopping?"
}
else if(total<50)
{// Display user results
    document.querySelector("#firstId").innerHTML="The total for your two items is $"+total.toFixed(2)
    document.querySelector("#firstId").style.backgroundColor="yellow"
}
else if(total>=50 && total<=99)
{
    document.querySelector("#firstId").style.backgroundColor="green"
    document.querySelector("#firstId").innerHTML="The total for your two items is $"+discountP1.toFixed(2)
    document.querySelector("#savings").innerHTML="You saved a total of $"+discount1.toFixed(2)+" with your 5% discount"
    document.querySelector("#savings").style.backgroundColor="green"
    document.querySelector("#savings").style.textAlign="center"
}
else if(total>=100)
{
    document.querySelector("#firstId").style.backgroundColor="green"
    document.querySelector("#firstId").innerHTML="The total for your two items is $"+discountP2.toFixed(2)
    document.querySelector("#savings").innerHTML="You saved a total of $"+discount2.toFixed(2)+" with your 10% discount"
    document.querySelector("#savings").style.backgroundColor="green"
}
//document.querySelector(".firstClass").className ="secondClass";
alert("Do you have enough gas to go through the desert?")
// identify variables
let maxGas=parseFloat(prompt("What is the maximum number of gallons your car holds?","Ex 20"));
let gasP=parseFloat(prompt("How full is your gas tank in %","Ex 60%"));
let mpG=parseFloat(prompt("How many miles does your car get per gallon","Ex 22"));
let totalGas=((gasP*maxGas)/100)*mpG;

/*document.querySelector("#buttonImg").addEventListener("click",function(e)
{*/
   /* if(totalGas<200)
    {
    document.querySelector("#buttonImg").addEventListener("click",function(e)
    {
    document.querySelector("#good").src="IMG/notEnoughGas.jpg"
    document.querySelectorAll("#good").style.visibility="visible"
    })};*/
    //add the buttons as conditionals to display relative to results
document.querySelector("#button1").addEventListener("click",function(e)
{
    if(totalGas>=200)
    {
        document.querySelector("#totalGas").innerHTML ="You have "+totalGas.toFixed(1)+" miles left till empty, you are good to go!"
    }
    else if(totalGas<=200)
    { 
        document.querySelector("#totalGas").innerHTML ="You have "+totalGas.toFixed(1)+" miles left till empty, you are going to want to stop!"
    }
});
document.querySelector("#buttonImg").addEventListener("click",function(e)
{
    if(totalGas>=200)
    {
    document.querySelector("#good").src="IMG/EnoughGas.jpg"
    document.querySelector("#good").style.visibility="visible"
    }
    else if(totalGas<200)
    {
    document.querySelector("#good").src="IMG/notEnoughGas.jpg"
    document.querySelector("#good").style.visibility="visible"
    }
});

