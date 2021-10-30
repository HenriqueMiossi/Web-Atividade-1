import { Component } from '@angular/core';
import { Person } from './auth/person.model';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {

    nomeNgSwitch: string = "";
    mostrarElemento: boolean = true;
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageS: Message[] = [ new Message("Texto Da Mensagem", "ViniciusRosalen" ),
                            new Message("Texto 2 Da Mensagem", "RosalenSilva" ),
                            new Message("Texto 3 Da Mensagem", "SilvaVinicius" ),
                          ];

    messageBinding: Message = new Message("Texto da Mensagem", "Vinicius Rosalen");
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "Vinicius Rosalen Alias");
    
}