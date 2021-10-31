import { Component } from "@angular/core";
import { MessageService } from "./message.services";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    /*providers: [MessageService]*/

})
export class MessageInputComponent{
    
    constructor (private messageService : MessageService){}

    OnSubmit(form : NgForm){
       
        console.log(form);
    }

}