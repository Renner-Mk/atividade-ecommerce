import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

export enum Stars {
    oneStar = 1,
    twoStars,
    threeStars,
    fourStars,
    fiveStars
}

export class Rating{
    private id: string = uuidv4()
    constructor(
        public rate: Stars,
        private _user: User,
        private _produtcId: string
    ) {}

    get User(): User{
        return  this._user
    }

    get produtcId(): string{
        return  this._produtcId
    }
}