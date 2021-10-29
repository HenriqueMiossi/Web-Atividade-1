import { Component } from '@angular/core';
import { Person } from './auth/person.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {

    message = {
        content: 'Tô ficando fera no assunto',
        author: 'Vinicius'
    };

    pessoa1: Person = new Person(101, 'Vinicius', 25);
    pessoa2: Person;
    pessoa3: Person = new Person();
    
}