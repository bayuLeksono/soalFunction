function bilanganGanjil(input) {
  let result = input % 2 !== 0
  return result
}

// console.log(bilanganGanjil(5))

function bilanganGenap(input) {
  let result = input % 2 !== 0
  return result
}

// console.log(bilanganGenap(5))

function reversal(input) {
  return input.split('').reverse().join('')
}
let cekTerbalik = reversal('Leksono')
console.log(cekTerbalik)

function upperCase(input) {
  let sentence = `${input}`
  console.log(sentence.toUpperCase())
}
// upperCase('jangan ngegas dong')

// luas lingkaran = pi * r * r
function luasLingkaran(r) {
  const result = Math.PI * r * r
  return result
}
console.log('Luas lingkaran: ' + luasLingkaran(2).toFixed(2))
