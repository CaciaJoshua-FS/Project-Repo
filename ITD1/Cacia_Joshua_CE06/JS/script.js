/* Joshua Cacia
   7-29-21
   CE06 HTML Forms */
// target the button 


document.querySelector("#quarts").addEventListener("click",function(e)
{   
    if(document.querySelector("#quarts").reportValidity() &&
    (document.querySelector("#userGallons").reportValidity()  ))
    {
        let userGallons= document.querySelector("#userGallons").value;
        let userQuarts = parseFloat(document.querySelector("#quarts").value);
        userQuarts = userGallons*4;
        
    }
});
document.querySelector("#pints").addEventListener("click",function(e)
{   
    if(document.querySelector("#pints").reportValidity()&&
    (document.querySelector("#userGallons").reportValidity()  ))
    {
        let userGallons= document.querySelector("#userGallons").value;
        let userPints= parseFloat(document.querySelector("#pints").value);
         userPints = userGallons*8;

    }
});
    document.querySelector("#cups").addEventListener("click",function(e)
{
    if(document.querySelector("#cups").reportValidity()&&
    (document.querySelector("#userGallons").reportValidity()  ))
    {
        let userGallons=document.querySelector("#userGallons").value;
        let userCups = parseFloat(document.querySelector("#cups").value);
        userCups = userGallons*16;

        
    }
});

    
    document.querySelector("#convert").addEventListener("click",function(e)
    {
        if(document.querySelector("#quarts").checked &&
        (document.querySelector("#userGallons").reportValidity()  ))
    {
        let userGallons = document.querySelector("#userGallons").value;
        let totalQuarts = userGallons*4;
        parseFloat(document.querySelector("#totalQuarts").value = totalQuarts);
    }
    else if(document.querySelector("#pints").checked &&
    (document.querySelector("#userGallons").reportValidity()  ))
    {
        let userGallons = document.querySelector("#userGallons").value;
        let totalPints = userGallons*8;
        parseFloat(document.querySelector("#totalPints").value = totalPints);
    }
    else if(document.querySelector("#cups").checked &&
    (document.querySelector("#userGallons").reportValidity()  ))
    {
        let userGallons =document.querySelector("#userGallons").value;
        let totalCups = userGallons*16;
        parseFloat(document.querySelector("#totalCups").value = totalCups);
    }

});
// new question

   document.querySelector("#calcDvd").addEventListener("click",function(e)
   {let totalDvd =parseFloat(document.querySelector("#userDvd").value);
   let totalBlueray =parseFloat(document.querySelector("#userBlueray").value);
   let totalUV = parseFloat(document.querySelector("#userUv").value);
   let totalMovies = totalDvd+totalBlueray+totalUV;

   
       if((document.querySelector("#userDvd").reportValidity) &&
        (document.querySelector("#userBlueray").reportValidity) &&
        (document.querySelector("#userUv").reportValidity) )
    
        if(totalMovies<50 && totalMovies>=0)
    {
       
        document.querySelector("#movies").innerHTML="You have "+totalMovies+" movies which makes you a bronze star member.";
       document.querySelector("#bronze").src="IMG/bronzeStar.jpg";
       document.querySelector("#bronze").style.visibility="visible";
    }
     else if(totalMovies<100 && totalMovies >=50) 
    {
        document.querySelector("#movies").innerHTML="You have "+totalMovies+" movies which makes you a silver star member.";
        document.querySelector("#silver").src="IMG/silverStar.jpg";
        document.querySelector("#silver").style.visibility="visible";
    }
 else if(totalMovies >=100) 
    {
        document.querySelector("#movies").innerHTML="You have "+totalMovies+" movies which makes you a gold star member.";
        document.querySelector("#gold").src="IMG/goldStar.jpg";
    document.querySelector("#gold").style.visibility="visible";
    }

  });
 




    /*if(document.querySelector("#quarts").checked)
    {

        let userQuarts = document.querySelector("#totalQuarts")
    }
    else if(document.querySelector("#pints").checked)
    {

    }
    else if(document.querySelector("#cups").checked)
    {

    }
    
);*/


