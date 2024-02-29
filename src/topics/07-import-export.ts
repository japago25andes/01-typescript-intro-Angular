import { Product } from './06-function-destructuring';
import {taxCalculation} from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Samsung Galaxy S21',
        price: 150
    },
    {
        description: 'iPad Pro',
        price: 250
    }
];

const tax = 0.15
const [total, taxTotal] = taxCalculation({products: shoppingCart, tax});


console.log('Total: ', total);
console.log('Tax: ', taxTotal);






