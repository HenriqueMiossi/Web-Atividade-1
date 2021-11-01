export class User {
    email: string;
    password: string;
    firstName?: string;
    lastname?: string;

    constructor(email: string) {
        this.email = email;
    }
}
