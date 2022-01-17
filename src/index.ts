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