/*Joshua Cacia 
7-30-2021
CE07 Final Project*/
document.querySelector("#calculateBMI").addEventListener("click",function(e)
{ 
   if(document.querySelector("#weight").reportValidity() &&
    document.querySelector("#inches").reportValidity() &&
    document.querySelector("#feet").reportValidity()
    )
    {
        let weight = parseFloat(document.querySelector("#weight").value);
        let feet = parseFloat(document.querySelector("#feet").value*12);
        let inches = parseFloat(document.querySelector("#inches").value);
        let total = feet+inches;
        let totalBmi = (weight/total/total)*703;
    
        if(totalBmi < 18.5)
        {
            document.querySelector("#results").innerHTML =`Your BMI is ${totalBmi.toFixed(1)} indicating your weight is in the underweight range `;
            document.querySelector("#underWeight").src= "IMG/underWeight.jpg";
            document.querySelector("#underWeight").style.visibility="visible";
        }
        else if(totalBmi >= 18.5 && totalBmi <= 24.9)
        {
            document.querySelector("#results").innerHTML =`Your BMI is ${totalBmi.toFixed(1)} indicating your weight is in the normal range `;
            document.querySelector("#healthyWeight").src= "IMG/healthyWeight.jpg";
            document.querySelector("#healthyWeight").style.visibility="visible";
        }
        else if(totalBmi >25 && totalBmi <=29.9)
        {
            document.querySelector("#results").innerHTML =`Your BMI is ${totalBmi.toFixed(1)} indicating your weight is in the overweight range `;
            document.querySelector("#overWeight").src= "IMG/overWeight.jpg";
            document.querySelector("#overWeight").style.visibility="visible";
        }
        else if(totalBmi >= 30 && totalBmi < 35)
        {
            document.querySelector("#results").innerHTML =`Your BMI is ${totalBmi.toFixed(1)} indicating your weight is in the obese range `;
            document.querySelector("#obeseWeight").src= "IMG/obeseWeight.jpg";
            document.querySelector("#obeseWeight").style.visibility="visible";
        }
        else
        {
            document.querySelector("#results").innerHTML =`Your BMI is ${totalBmi.toFixed(1)} indicating your weight is in the extremely obese range `;
            document.querySelector("#extremelyObese").src="IMG/extremeObeseWeight.jpg";
            document.querySelector("#extremelyObese").style.visibility="visible";
        }
    }
}); 

    
    
    




