export class Person {
    //public name: string;
    //public address: string;

    constructor(
        public name = "John Doe",
        private address = "Hayuelos"
    ) { }

}



export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: string,
        public realName: string
    ) {
        super(realName, 'New York');
    }
}


const ironman = new Hero('Ironman', '45', 'Tony Stark');


console.log(ironman);