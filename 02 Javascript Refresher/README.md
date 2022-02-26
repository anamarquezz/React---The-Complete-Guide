Next-Gen Javascript
A Refresher...

> let & Const -Keyworks. for creating Variables.
Const - dont change the value

> Fuctions:
        function myFnc() {}
    -Arrow Function--------             ---No more issues with the this keywork
        const myFnc=()=> {}

        Example:
        const printMyName = (name) => { console.log(name)}
        const printMyName = name => { console.log(name)} only for 1 argument
        const printMyName = () => { console.log('Ana')} only for 0 argument
        const printMyName = (name, age) => { console.log('name,age)}  for > 1 argument
        const multiply = (number) => { return number + 2} 
            console.log(multiply(2)) ---return
        const multiply = number =>  number + 2;  shorter return

> Modules,

     Modular code, Exports & Imports

Person.js
const person = {
    name:'Max'
}
export default person


-
utility.js
export const clean = {} => {...}
export const baseData = 10
-

app.js
import person from './person.js'
import prs from './person,js'

> Named Exports --------------
import {baseData} from './utility.js'  
import {clean} from './utility.js'


Default export:
    import person from './person.js'
    import prs from './person.js'

Named export:--------------------
    import { smth } from 'utility.js'

    import { smth as Smth} from './utility.js'

    import * as bundled from '/utility.js'

    Choose the name
    Name is defined by export

> Classes

Property
class Person {
    name ='Ana'
    call = {} => {...}
}

Usage (constructor functions, anyone)

const myPerson = snew Person() {
       myPerson.call()
       console.log(myPerson.name) }

class Person extens Master

> Classes, Properties & Methods
    removing constructor, add arrow function.

> Spread & Rest Operators

Spread:   
    Used to split up array elements OR object properties

    const newArray = {...oldArray,1,2}
    cont newObject = {...oldObject, newProp:5}

Rest:
    Used to merge alist of function argument ingo an array

    function sortArgs{... args}{
        return args.sort()
    }

> Destructuring
    Easily extract array elements or object properties and store them in variable

    ----Array Destructuring-----

        [a, b] = ['Hello','Max']
        console.log(a) // Hello
        console.log(b) // Max

    ----Object Destructuring-----
        { name } = { name: 'Max', age:28}
        console.log(name) //Max
        console.log(age) // undefined

> Reference and Primitive Types Refresher
const number =1: -> primitive type.
const number2 =1number: -> Copy 
Reasing or store another value of variable

Objecst and Array are References.
const person = {
    name:'Ana'
}


Objects and Array, are reference types
const secondPerson = person; - pointer will copy
person.name ='Manu' 
console.log(secondPerson) --> store in memory, 


