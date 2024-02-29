



export interface Passenger{
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name: 'Juan'
}

const passenger2: Passenger = {
    name: 'Pedro',
    children: ['Juan', 'Maria']
}

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.join(', ') || 'No tiene hijos';

    console.log( passenger.name, howManyChildren );
}


printChildren(passenger1);
printChildren(passenger2);