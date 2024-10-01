import { productRantingDatabase } from "../database/productRantingDatabase"
import { productCommentDatabase } from "../database/productCommentDatabase";
import { Rating, Stars } from "./Rating";
import { Comment } from "./Comment";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./User"

export class Product{
    private id: string = uuidv4()
    
    constructor(
        public name: string,
        public value: number
    ) {}

    show(): string{
        console.log(`${this.name} (R$ ${this.value.toFixed(2)})`)
        this.showRanting()
        this.showComments()
    
        return "\n-----------------------\n"
    }

    public showComments(): void {
        const productComments = productCommentDatabase.filter(comment => comment.produtcId === this.id)
        productComments.forEach(comment => {
          console.log(`  [${comment.from.name}]: ${comment.comment}`)
        })
    }

    public showRanting(): void{
        const productRanting = productRantingDatabase.filter(rate => rate.produtcId === this.id)

        const media = productRanting.reduce((acc, val) => acc + val.rate, 0) / productRanting.length

        console.log(`Media de avaliações: ${media} Estrelas`)
    }

    comment(comment: string, user: User): void {
        const _comment = new Comment(user ,comment, this.id)
        productCommentDatabase.push(_comment)
    }

    rate(rating: Stars, user: User): void {
        const rate = new Rating(rating, user, this.id)
        productRantingDatabase.push(rate)
    }
}