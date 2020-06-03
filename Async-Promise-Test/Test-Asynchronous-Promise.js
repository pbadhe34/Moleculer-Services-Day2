
function sleep(timeout){
 setInterval(function(){console.log("Inside some work ..");},timeout);
}

console.log("Starting here"); 

var timer=null;

function processCallBack(error, result)
   {
     if(error!=null)
     {
     console.log("Error is "+error);
     }
    else
    {
     console.log("The result from Asynchronous call is with perimeter = "+result.perimeter+ " area="+result.area);
     } 
    clearInterval(timer);
  }

function calculatePropertiesAsynchronously(length, callBackFunction) { 

if (length <= 0){ 
 timer = setInterval(function(){callBackFunction("Square dimensions should be greater than zero: s = " + length, null)}, 3000); 
}
else{
timer = setInterval(function(){callBackFunction(null, {"perimeter": (4*length),"area":(length*length)})}, 3000); 
   }
} 

 console.log("Invoking the Asynchronous Call"); 

 calculatePropertiesAsynchronously(12,processCallBack);
  

console.log("Invoked Asynchronous Call..The result will be notified later");


console.log("Done with Asynchronous Call");

 //Another way to define async with promise
 
 const work = async () => {
   await sleep(1200)
    console.log("If I sleep..will it affect the work ?");
  }
  work();

  //console.log("Done with the Work call");

