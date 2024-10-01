import { v4 as uuidv4 } from 'uuid';
import { Product } from "./Product";

export class User {
    private cart: Product[] = []
    private id: string = uuidv4()
    
    constructor(
        public name: string,
        public userName: string,
        public email: string
    ) {}

    getId(): string{
        return this.id
    }   

    
    addToCart(product: Product) {
        this.cart.push(product)
        console.log('Produto foi adicionado ao carrinho')
    }

    removeFromCart(product: Product) {
        if(this.cart){
            const i = this.cart.indexOf(product)

            if(i !== -1){
                this.cart.splice(i, 1)
                console.log('Produto foi removido do carrinho')
            }else{
                console.log('Produto não está no carrinho')
            }
        }else {
            console.log("O carrinho está vazio!")
        }
        
    }

    showProducts(): void{
        if(this.cart){
            this.cart.forEach(item => {
                console.log(`${item.name}, ${item.value}` )
            })
        }else {
            console.log("O carrinho está vazio!")
        }
        
    }

    
}

