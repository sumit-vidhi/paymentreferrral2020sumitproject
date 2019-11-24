import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// custom validator to check that two fields match
 function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
		    userName: ['11', Validators.required],
            firstName: ['11', Validators.required],
            lastName: ['11', Validators.required],
            email: ['a@a.com', [Validators.required, Validators.email]],
			confirmEmail: ['a@a.com', [Validators.required, Validators.email]],
            password: ['111111', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['111111', Validators.required],
		    address: ['dsfsdfdsf', Validators.required],
			address2: ['dsfsdfdsf', Validators.required],
			state: ['sdfdsfsdf', Validators.required],
			city: ['sdfdsfdsf', Validators.required],
			postalCode: ['dsfsdfsdfdsf', Validators.required],
			phone: ['22112121212', Validators.required],
			country: ['AF', Validators.required],
			  
        }, {
            validator: [MustMatch('password', 'confirmPassword'), MustMatch('email', 'confirmEmail')]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)')
    }

}
