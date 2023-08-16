function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      if (data) {
        resolve(data);
      } else {
        reject("Data not found");
      }
    }, 1000);
  });
}

fetchData()
  .then((result) => {
    console.log("Data fetched:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });




