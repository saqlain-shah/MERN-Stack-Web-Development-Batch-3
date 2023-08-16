function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}


async function msg() {
  const msg = await helloWorld();
  console.log("Message from msg1 function:", msg);
}

function msg1() {
  console.log("Message from msg1 function");
}

msg();
msg1();
