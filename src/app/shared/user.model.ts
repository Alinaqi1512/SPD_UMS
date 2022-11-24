export class UserModel {
    public username: string;
    public email: string;
    public password: string;
    public PhoneNumber: string;
    public Gender: Gender;
}

export enum Gender {
    Male = 1,
    Female = 2,
    Others = 3
}

export class UserLoginModel {

    public username: string;

    public password: string;
}

export class Response {
    public Status: string;
    public Message: string
    public IsSuccess: boolean
}

export class User {
    constructor(public username: string, public id: string, private _token: string, private _tokenExpiryDate: Date) { }

    get token() {
        if (!this._tokenExpiryDate || new Date() > this._tokenExpiryDate) {
            return null;
        }
        return this._token;
    }
}