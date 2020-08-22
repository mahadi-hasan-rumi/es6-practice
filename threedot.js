const ages = [12, 13, 14, 20, 15, 18, 16]
const ages2 = [14, 17, 19,]
const ages3 = [23, 25, 30,]
const allAges = ages.concat(ages2).concat([100]).concat(ages3)
const allAges3 = [ages, ages2, 100, ages3]
const allAges2 = [...ages, ...ages2, 100, ...ages3]
// console.log(allAges)
// console.log(allAges2)

const business = 650;
const minister = 450;
const sochib = 250;
const takapaisa = [450, 650, 250, 850]
const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takapaisa);
console.log(maximum2);

function myFunc(a, b, ...args) {
    console.log(a); // 22
    console.log(b); // 98
    console.log(args); // [43, 3, 26]
   };
   myFunc(22, 98, 43, 3, 26);
