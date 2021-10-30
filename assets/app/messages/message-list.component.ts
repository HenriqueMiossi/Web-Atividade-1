import { Message } from "./message.model";
import { Component } from "@angular/core";

@Component({
    selector: 'app-message-list',
    template: `
    <div class="cold-md-8 col-md-offset-2">
        <app-message [messageVarClasse]="msg"
           (editClicked_MessageMetodoClasse)="msg.content = $event"
           *ngFor="let msg of messageS" >
           </app-message>
           </div>
    `
})


export class MessageListComponent{
    messageS: Message[] = [ new Message("Texto Da Mensagem", "ViniciusRosalen" ),
    new Message("Texto 2 Da Mensagem", "RosalenSilva" ),
    new Message("Texto 3 Da Mensagem", "SilvaVinicius" ),
  ];
}