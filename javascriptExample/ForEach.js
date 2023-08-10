var demo = [28 , 32 , 13];
demo.forEach(function (a,b){
    console.log(a+ 'Comes at '+ b)
})

demo.forEach((a,b) => `${a} Comes at  ${b}`)