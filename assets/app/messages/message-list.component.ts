import { Message } from "./message.model";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message-list',
    template: `
    <div class="cold-md-8 col-md-offset-2">
        <app-message [messageVarClasse]="msg"
           (editClicked_MessageMetodoClasse)="msg.content = $event"
           *ngFor="let msg of messageS" >
           </app-message>
           </div>
    `,
    /*providers: [MessageService]*/
})



export class MessageListComponent implements OnInit{
    messageS: Message[] = [];

  constructor (private messageService : MessageService){}

  ngOnInit(): void {
    this.messageService.getMessages()
      .subscribe(
        (dadosSucesso: Message[]) => {
          this.messageS = dadosSucesso;
          console.log(dadosSucesso)
        },
        dadosErro => console.log(dadosErro)
      );
  }

}