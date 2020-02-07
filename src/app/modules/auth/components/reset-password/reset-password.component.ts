import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { LoaderService } from '@core/services/loader-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  message:any;
  constructor( private fb : FormBuilder,
    private authService : AuthService, private loader: LoaderService) { }

  ngOnInit() {
    this.forgotForm = this.fb.group({	 
      email 	: ['', [
        Validators.required
      ]]
    }); 
  }

  onSubmit(){
    let formModel = this.forgotForm.value;
    this.loader.startLoading();
    this.authService.forgotPassword(formModel)
    .subscribe((result)=>{
      this.loader.stopLoading();
      this.forgotForm.reset();
      if(result.status === 'success'){
        this.message='Reset password instructions has been sent to your email address. Please check your email'; 
      } else if (result.status === 'notActive') {
        alert("Your email address is inactive please check your inbox and activate account.");
      }   
      else{
        this.message='We have no account for this email, Please try again with other email.';
      } 
    });
  }

}
