let lef = ['кака','мака','пука']
let led = ['пика','кика','жика']
let leq = ['мука','кристи','сися']
let result = []
let random1 = Math.floor(Math.random()*lef.length)
let random2 = Math.floor(Math.random()*led.length)
let random3 = Math.floor(Math.random()*leq.length)

result.push(lef[random1],led[random2],leq[random3])

let res = []

res.push(`у тебя ${lef[random1]} еще более ${led[random2]}чем у ${leq[random3]}`)

console.log(res)