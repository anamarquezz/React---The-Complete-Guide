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

> 