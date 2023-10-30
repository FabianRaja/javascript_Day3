let obj1={
    name:"Person 1",
    age:5
}
let obj2={
    age:5,
    name:"Person 1"
}

let a=Object.entries(obj1);
console.log(a);
let b=Object.entries(obj2);
console.log(b);
let c=a[0];
let d=b[1];
console.log(typeof(c));
console.log(typeof(d));
console.log(c===d);
// console.log(JSON.stringify(obj1)==JSON.stringify(obj2))