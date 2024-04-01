function bilanganGanjil(input) {
  if (input % 2 !== 0) console.log('true')
  else console.log('false')
}

// bilanganGanjil(5)

function bilanganGenap(input) {
  if (input % 2 === 0) console.log('true')
  else console.log('false')
}

// bilanganGenap(3)

function reversal(input) {
  return input.split('').reverse().join('')
}
let cekTerbalik = reversal('Leksono')
console.log(cekTerbalik)

function upperCase(input) {
  let sentence = `${input}`
  console.log(sentence.toUpperCase())
}
upperCase('jangan ngegas dong')

// luas lingkaran = pi * r * r
const pi = Math.PI
const r = 2
function luasLingkaran(pi, r) {
  const result = pi * r * r
  return result
}
console.log('Luas lingkaran: ' + luasLingkaran(pi, r))
