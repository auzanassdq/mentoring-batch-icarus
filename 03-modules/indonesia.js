import motor from "./jepang.js"
import {hp, food} from "./amerika.js"

// console.log(motor)
// console.log(hp)
// console.log(food)

let btnRegis = document.querySelector("#register")
let inputNama = document.querySelector("#nama")
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")

btnRegis.onclick = handleRegister

function handleRegister() {
  let nama = inputNama.value
  let email = inputEmail.value
  let password = inputPassword.value

  if (nama == "") {
    alert ("Nama tidak boleh kosong")
  } else {
      console.log("tess klik")
      console.log(nama)
      console.log(email)
      console.log(password)

      localStorage.setItem("myName", nama)
  }

}