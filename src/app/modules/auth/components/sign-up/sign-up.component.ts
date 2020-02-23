import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { Router, ActivatedRoute } from '@angular/router';
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
    referralName: any = 'NA';
    referralId: any;
    referralEmail: any;
    constructor(private formBuilder: FormBuilder, private authService: AuthService,
        private router: Router, private loader: LoaderService,
        private route: ActivatedRoute, ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', [Validators.required, Validators.minLength(6)], this.isUernameUnique.bind(this)],
            email: ['', [Validators.required, Validators.email], this.isEmailUnique.bind(this)],
            confirmEmail: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            accept: ['', Validators.requiredTrue]
        }, {
            validator: [MustMatch('password', 'confirmPassword'), MustMatch('email', 'confirmEmail')]
        });

        this.checkReferralCode();
    }

    checkReferralCode() {
        this.route.queryParams
            .subscribe(params => {
                console.log(params);
                var size = Object.keys(params).length;
                console.log(size)
                if (size === 1) {
                    this.loader.startLoading();
                    this.authService.getReferral(params).subscribe((result) => {
                        this.loader.stopLoading();
                        if (result.status === 'success') {
                            this.referralName = result.record.firstName + ' ' + result.record.lastName;
                            this.referralId = result.record.userId;
                            this.referralEmail = result.record.email;
                            sessionStorage.setItem("refferalName", this.referralName);
                            sessionStorage.setItem("referralId", this.referralId);
                        }
                    })
                } else {
                    if (sessionStorage.getItem("refferalName")) {
                        this.referralName = sessionStorage.getItem("refferalName");
                        this.referralId = sessionStorage.getItem("referralId");
                    }
                }
            })
    }

    isUernameUnique(control: FormControl) {
        const q = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.authService.checkEmailToken({ email: control.value }).subscribe((res) => {
                    if (res.status == 'error') {
                        resolve({ 'isUernameUnique': true });
                    } else {
                        resolve(null);
                    }
                })
            }, 1000);
        });
        return q;
    }

    isEmailUnique(control: FormControl) {
        const q = new Promise((resolve, reject) => {
            setTimeout(() => {
                this.authService.checkEmailToken({ email: control.value }).subscribe((res) => {
                    if (res.status == 'error') {
                        resolve({ 'isEmailUnique': true });
                    } else {
                        resolve(null);
                    }
                })
            }, 1000);
        });
        return q;
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    get accept() {
        return this.registerForm.get('accept');
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        const formData = this.registerForm.value;
        formData.referralId = 1;
        formData.referralEmail = "";
        formData.referralName = "";
        if (this.referralId) {
            formData.referralId = this.referralId
        }
        if (this.referralEmail) {
            formData.referralEmail = this.referralEmail
        }
        if (this.referralName) {
            formData.referralName = this.referralName
        }
        this.loader.startLoading();
        this.authService.register(formData).subscribe((result) => {
            this.loader.stopLoading();
            if (result.status == 'success') {
                this.router.navigate(['auth/thankyou']);
            } else {
                alert(result.message);
            }
        })
    }

}
