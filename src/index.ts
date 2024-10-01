import { Product } from "./models/Product";
import { Stars } from "./models/Rating";
import { User } from "./models/User";

const user = new User('Patrick', 'Renner', 'test@test.com')
const user2 = new User('Patrick', 'Renner', 'test@test.com')
const user3 = new User('Patrick', 'Renner', 'test@test.com')
const user4 = new User('Patrick', 'Renner', 'test@test.com')
const user5 = new User('Patrick', 'Renner', 'test@test.com')
const user6 = new User('Patrick', 'Renner', 'test@test.com')

const product = new Product('robo', 350)

product.rate(Stars.oneStar, user)
product.rate(Stars.fiveStars, user2)
product.rate(Stars.fourStars, user3)
product.rate(Stars.fiveStars, user4)
product.rate(Stars.fiveStars, user5)
product.rate(Stars.twoStars, user6)
product.comment('aaaa', user)
user.addToCart(product)
product.show()
