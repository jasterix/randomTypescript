let id:number =5;

console.log("ID:", id)

//enum
enum Direction1 {
    Up = "Up",
    Down = "Down",
    Left="Left",
    Right = "Right",
    }

    console.log(Direction1.Down)

    //Objects
    type Person = {
        id: number,
        name: string
    }

    const person ={
        id:1,
        name:"me"
    }

    console.log(person.name)

    //functions

    function add(x:number, y:number): number {
        return x+y
    }

    //or 

    function add2({ x, y }: { x: number; y: number; }): number {
        return x+y
    }

    //interfaces- use with objects
    //can't use with primitives or unions

    interface PersonInterface{
        id: number
        name:string
        age?:number // ? denotes optional
    }

    const person1:PersonInterface = {
        id:1,
        name: "me"
    }

    interface MathFunc {
        (x:number, y:number): number
    }

    const adding: MathFunc = (x:number, y:number): number => x+y
    const sub: MathFunc = (x:number, y:number): number => x+y

    class Person1 {
        id: number
        name:string

        constructor(id:number, name:string){
            this.id =id
            this.name = name
            console.log(123)
        }

        register(){
            return `{this.name} is now registered`
        }
    }
    const me= new Person1(13, "jeff")

    //subclass
    class Employee extends Person1 {
        position: string

        constructor(id:number, name:string, position:string){
            super(id, name)
            this.position = position
        }
    }

    const emp = new Employee(3, "Hi", "Dev")

    //Generics- create reusable components
    function getArray<T>(items:T[]): T[] {
        return new Array().concat(items)
    }

    let numArr = getArray<number>([1,2,3,4,5])
    let stringArr = getArray<string>(["me", "you", "us"])

    numArr.push(5)