function calculateLove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();

    if(name1==="" || name2==="")
    {
        alert("please enter both name");
    }

    let LovePercentage;
    if(name1==="imran" || name2==="nishat")
        {
            LovePercentage=100;
        }
    else if(name1==="nishat" || name2==="imran")
        {
            LovePercentage=100;
        }
    else if(name1==="nishat naila anika" || name2==="mahmud imran")
            {
                LovePercentage=100;
            } 
     else if(name1==="mahmud imran" || name2==="nishat naila anika")
            {
                    LovePercentage=100;
            }          
     else if(name1==="anika" || name2==="imran")
                {
                        LovePercentage=100;
                }  
                
     else if(name1==="anika" || name2==="mahmud")
                    {
                            LovePercentage=100;
                    }           
            else{
    LovePercentage=Math.floor(Math.random() * 101);
    }
    const result=document.getElementById("result");

    



    result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${LovePercentage}%`;
//    result.innerHTML = '${name1} and ${name2} 's Love Percentage: ${loverPercentage}%;



   if(LovePercentage<30){
  result.innerHTML+="<br> not a great match, keep looking";
   }
   else if(LovePercentage>=30 && LovePercentage<=70)
   {
    result.innerHTML+="<br> there is potential, keep try";

   }
   else{
    result.innerHTML+="<br> great match! Perfect couple";

   }


     
    

}