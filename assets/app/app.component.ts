import { Component } from '@angular/core';
import { Person } from './auth/person.model';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {

    messageBinding: Message = new Message("Texto da Mensagem", "Vinicius Rosalen");
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "Vinicius Rosalen Alias");
    
}