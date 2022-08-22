// "user strict";

// // console.log(this);

// function namedFunction() {
//     console.log(this);
// }

// const obj = {
//     name: "Dorcas",
//     namedFunction() {
//         //console.log(arguments)
//         console.log(this.name);
//     },
// };

// obj.namedFunction();

// const anotherobj ={

// };

const person = {
    firstName: "Dorcas",
    lastName: "Seriki",
    gender: "F",
    age: 18,

    fullname() {
        let self = this
        const getTitle = () => {
            return this.gender === "F" ? "Mrs. " : "Mr. ";
        }
        return `${getTitle()} ${this.lastName} ${this.firstName}`;
    },

    isMinor() {
        return this.age < 18;
    },
}


//CALL BACK FUNCTION

const arr = [1,2,3,4,5,66,7];

arr.forEach((elem, index, myself) => {
    console.log(elem, index, myself);
});