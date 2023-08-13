// const x = 1;
// {
//     console.log(x); 
//     const x = 2;
 
// }

// {
//     var x = 2;
// }
// console.log(x);

//promise() object
function prom(complete){
    return new Promise(function(resolve, reject){
        console.log("message pending please wait...")
        setTimeout( () => {
            if(complete){
                resolve(" i am succesful");
            }else{
                reject(" i am rejected");
            }
        }, 4000)
    });
}
// let onfullfillment = (result) => {
//     console.log(result);
// }

// let onrejection = (error) => {
//     console.log(error);
// }
prom(false).then((result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
}); //chaining method

// example promise 

function pro(a, b){
    return new Promise( function(resolve, reject){
        console.log("fetching the value please wait...");
        var c = a / b;
       setTimeout( ()=>{
        if(a,b){
            resolve(`your answer: ${c}`);
        }else{
            reject("can't calculate");
        }
       }, 5000);
    });
}
pro(9, 2).then((result) =>{
    console.log(result);
}).catch((error) => {
    console.log(error);
}); 
