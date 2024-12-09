
let v1 = new Set()
v1.add('a')
v1.add('b')
let v2 = new Set()
v2.add('b')
v2.add('a')

// console.log("isEqValue(v1, v2):",isEqValue(v1, v2), v1 == v2, v1 === v2)


// function isEqValue (value1, value2) {
//   for (let [key, val] of value1) {
//     if (value2.has(key)) {
//       let flag = Object.is(val, value2.get(key))
//       console.log("flag,val:",flag,key,val,value2.get(key),  Object.is(val, value2.get(key)))
//       if (!flag) return false
//     } else {
//       return false
//     }
//   }
//   return true
// }

console.log("Array.from(v1), Array.from(v2):",Array.from(v1), Array.from(v2))