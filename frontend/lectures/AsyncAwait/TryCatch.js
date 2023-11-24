var myObject = {
  name: "John Doe",
  age: 15,
  email: "test@test.com",
  job: "Auditor",
};
try {
  let userJSON = JSON.stringify(myObject);

  
  let userObj = JSON.parse(userJSON);
  console.log(userObj);
} catch (e) {
  console.error(`Invalid  data!`);
}
