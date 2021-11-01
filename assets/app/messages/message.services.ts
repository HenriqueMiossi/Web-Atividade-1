import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {Message} from "./message.model";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message : Message){
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages(){
        return this.messageSService;
    }

    deleteMessage(message : Message){
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}
