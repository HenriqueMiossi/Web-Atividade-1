export class User {
    email: string;
    password: string;
    firstName?: string;
    lastname?: string;

    constructor(email: string, password: string, firstName: string, lastName: string) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastname = lastName;
    }
}
