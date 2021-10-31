import { Routes, RouterModule, Router } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./authentication.component";
import { Message } from "./messages/message.model";
import { AUTH_ROUTES } from "./auth/auth.routers";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
    {path: 'mensagens', component: MessagesComponent},
    {path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);
