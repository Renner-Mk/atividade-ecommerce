import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

export class Comment{
    private id: string = uuidv4()
    constructor(
        private _from: User,
        public comment: string,
        private _produtcId: string
    ) {}

    get from(): User{
        return  this._from
    }

    get produtcId(): string{
        return  this._produtcId
    }
}