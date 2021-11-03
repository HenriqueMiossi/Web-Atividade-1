import { Component } from '@angular/core';
import { Person } from './auth/person.model';
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {

    nomeNgSwitch: string = "";
    mostrarElemento: boolean = true;
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageS: Message[] = [];

    messageBinding: Message = new Message("Texto da Mensagem", "Vinicius Rosalen");
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "Vinicius Rosalen Alias");
    
}