const person = {name: `rumi`, age:25, phone:1258984310, address: `mirpur`, gfName: `rumkui`, job: `coding`, friends: ['rasel', 'kashem', 'monir'] }

// const gfName = person.gfName;
// const phone = person.phone;

const{phone, salary, gfName, name} = person

console.log(gfName, salary, phone, name)
console.log(gfName, salary, phone, name)


const friends = [`rohim`,`korim`,`molim`,`jalim`,`talim`,`dalim`]
const [first, second,...rest] = friends
console.log( rest)


const complexObject = {
    name :`abc`,
    info:{
        address: `mirpur1`,
        leader: `kala manik`,
    }
}
const {leader} = complexObject.info

console.log(leader)