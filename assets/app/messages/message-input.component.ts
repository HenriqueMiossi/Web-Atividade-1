import { Component } from "@angular/core";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent{

    OnSave(textoConsole: string){
        console.log(textoConsole);
    }

}