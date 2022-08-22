const sum = (a,b) => a+b;


//HOW TO DECLARE AN OBJECT
const something = "anything";
const user = {
    name: "Olamide",
    age: 27,
    "is married": false,

    [something]: "Pizza",

    shoot(param){
        console.log("I can shoot you", param);
    },
    talk: () => {
        console.log("I can talk");
    },
};
console.log(user);

function operaation(a,b, func){
    return func(a,b)
}
console.log(operaation(2,3, sum))

console.log(user.shoot("Boyo"))

// for (let key in user){
//     console.log(`${key} --> ${user[key]}`)
// }