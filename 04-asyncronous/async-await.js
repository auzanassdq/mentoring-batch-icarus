// membuat promise
const MyPromise = new Promise((resolve, reject) => {
  if (false) {
    resolve("proses 2");
  } else {
    reject("Salah");
  }
});

console.log("proses 1");

// cara menggunakan async await
async function myAsyncFunction() {
  try {
    let result = await MyPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

myAsyncFunction();

console.log("proses 3");

// ambil data digimon
async function getDigimon() {
  let response = await fetch("https://digimon-api.vercel.app/api/digimon");
  let result = await response.json();

  console.log(result);
}
getDigimon();
