

const person ={
    name: 'Ana'
};

const secondPerson = person

person.name = 'Manu';
console.log(secondPerson)

//-------------------

const person1= {
    name: 'Ana'
};

const secondPerson1 = {
    ...person
};

person.name = 'Manu';
console.log(secondPerson1)