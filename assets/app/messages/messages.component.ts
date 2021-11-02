import { Component, Input } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";


@Component({
    selector: 'app-messages',
    template: `
    <div class="row">
        <strong class="col-md-8 col-md-offset-2"> == Após Reestruturação == </strong>
        <app-message-input></app-message-input>
    </div>
    <hr/>
    <div class="row">
        <app-message-list></app-message-list>
        <strong class="col-md-8 col-md-offset-2"> == Após Reestruturação == </strong>
    </div>
`
})

export class MessagesComponent{
    @Input() messageVarClasse : Message = new Message("","");
    @Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

    constructor(private messageServiceObj : MessageService){}
    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }
    
}