import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "./user.services";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit{
    myForm: FormGroup;

    constructor(private userServiceObj: UserService) {}

    onSubmit(){
        //this.myForm.reset();

        const newUser = new User(
            this.myForm.controls.emailTS.value,
            this.myForm.controls.passwordTS.value,
            this.myForm.controls.firstNameTS.value,
            this.myForm.controls.lastNameTS.value,
            this.myForm.controls.countryTS.value,
        );
        this.userServiceObj.addUser(newUser)
        .subscribe(
            dadosSucesso => console.log(dadosSucesso),
            dadosErro => console.log(dadosErro)
        );
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")

            ]),
            passwordTS: new FormControl(null, Validators.required),
            countryTS: new FormControl(null, Validators.required),
            termoTS: new FormControl(null, Validators.required)
        });
    }
}