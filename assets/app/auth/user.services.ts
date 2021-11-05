import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {User} from "./user.model";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Mongoose } from "mongoose";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    addUser(user: User){
        const bodyReq = JSON.stringify(user);
        console.log(bodyReq);
        
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/node-mongodb-mongoose-user', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido));
    }
}
