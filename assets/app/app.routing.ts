import { Routes, RouterModule, Router } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./authentication.component";
import { Message } from "./messages/message.model";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
    {path: 'mensagens', component: MessagesComponent},
    {path: 'autenticacao', component: AuthenticationComponent}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);
