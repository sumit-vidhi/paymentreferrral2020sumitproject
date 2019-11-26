import { 
  Component, 
  OnInit,
  Input 
}                       from '@angular/core';

import { 
  ActivatedRoute, 
  ParamMap 
}                       from '@angular/router';

import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-email-varification',
  templateUrl: './email-varification.component.html',
  styleUrls: ['./email-varification.component.css']
})


export class EmailVarificationComponent implements OnInit {

  constructor (
    private route : ActivatedRoute,
    private authService:AuthService
  ){}

  isEmailConfirmed:boolean;
  alreadyactivate:boolean;
  
  ngOnInit() {
    this.isEmailConfirmed = false;
    this.route.params.subscribe(params => {
     this.authService.confirm({ 
        id : params.id, 
        token : params.code 
      })
      .then(response => {
        if(response.code == 200){

          if(response.message=='Success'){
            this.isEmailConfirmed = true; 
          }
          if(response.message=='alreadyactivate'){
            this.alreadyactivate = true; 
          }
         
        }
      
      })
    })	
  }

}
