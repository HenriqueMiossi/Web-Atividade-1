import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent{
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        localStorage.setItem('username', this.myForm.controls.emailTS.value);
        console.log(this.myForm.controls.emailTS.value);
        
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        });
    }
}