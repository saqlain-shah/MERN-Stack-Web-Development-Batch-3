function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}


const msg = async function () {
  //Async Function Expression
  const msg = await helloWorld();
  console.log("Message: 1", msg);
};

const msg1 = async () => {
  //Async Arrow Function
  const msg = await helloWorld();
  console.log("Message:2 ", msg);
};

msg();
msg1();
