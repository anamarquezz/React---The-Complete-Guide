//Spread Operator
const number = [1, 2, 3]

const newNumbers = [...number, 4];

console.log(newNumbers);


const person = {
    name: 'Ana'
};

const newPerson = {
    ...person,
    age:28
}

console.log(newPerson)


//Rest Operator
const filter= (...args) => {
    return args.filter(el => el ===1)
}
console.log(filter(1, 2, 3))