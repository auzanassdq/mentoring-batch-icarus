
function reverse(arr) {
  let newAngka = []

  for (let i = arr.length - 1; i >= 0; i--) {
    newAngka.push(arr[i])
  }

  return newAngka
}

console.log(reverse([2,7,8,9,5]))
console.log(reverse([1,5,7]))
console.log(reverse([1]))

// rekursive
function faktorial(n) {
  if (n == 1) {
    // base case = titik berhenti
    return 1
  } else {
    // recursive case = pemanggilan function
    return faktorial(n-1) * n
  }
}

console.log(faktorial(1))
console.log(faktorial(2))
console.log(faktorial(3))
console.log(faktorial(4))

// recursive sum array
function sumArray(arr) {
  // base case
  // jika gerbong array cuma 1,
  // maka kembalikan nilai arraynya

  // recursive case
  // selain itu
  // simpan nilai array index terakhir
  // hapus gerbong terakhir
  // kembalikan nilai terkhir + arr yg sudah dikecilkan
}

console.log(sumArray([1]))
console.log(sumArray([1,2]))
console.log(sumArray([1,2,3]))