// membuat promise
const MyPromise = new Promise((resolve, reject) => {
  if (false) {
    resolve("proses 2");
  } else {
    reject("Salah");
  }
});

console.log("proses 1");

// cara menggunakan promise
MyPromise.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

console.log("proses 3");

// ambil data digimon
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  });
