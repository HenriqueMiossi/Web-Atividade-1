export class User {
    email: string;
    password: string;
    firstName?: string;
    lastname?: string;
    country?: string;

    constructor(email: string, password: string, firstName: string, lastName: string, country: string) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastname = lastName;
        this.country = country
    }
}
