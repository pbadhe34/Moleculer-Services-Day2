
function sleep(timeout){
  for(i=0; i < timeout * 100000 ; i++)
 {
   //console.log("Working here"); 

 }
}

console.log("Starting here"); 

var timer=null;

function resultProcessed(error, result)
   {
     if(error!=null)
     {
     console.log("Error is "+error);
     }
    else
    {
     console.log("The result from async call is with perimeter = "+result.perimeter+ " area="+result.area);
     } 
    clearInterval(timer);
  }

function calculatePropertiesSynchronously(length) { 

if (length <= 0){ 
 sleep(20000);
 var res = "The length should be greater than zero = " + length; 
 return res;
}
else{
 sleep(10000);
 var data = {"perimeter": (4*length),"area":(length*length)}  
 return data;
  }
} 

 console.log("Waiting for the Synchronous Call to return.."); 

 var res = calculatePropertiesSynchronously(12);
  
if(res.area)
console.log("The result of Synchronous call is perimeter = "+res.perimeter+ " area="+res.area);    
 else
 console.log("Error with .."+res); 


console.log("Doing some other work");


console.log("Done with the work");

 




 

  

