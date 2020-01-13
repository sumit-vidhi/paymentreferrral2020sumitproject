import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  message: any;
  referral: any;
  email: any;
  userName: any;
  firstName: any;
  lastName: any;
  sendSupportButton: boolean = true;
  supportData: any = [];
  closeResult: string;
  subject:any;
  modalReference: NgbModalRef;
  reply:any;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService,public modalService: NgbModal) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      subject: ['', Validators.required],
      description: ['', Validators.required]

    });


    this.loader.startLoading();
    this.userService.getSupportReply().subscribe((result) => {
      this.loader.stopLoading();
      if (result.status == 'success') {
        this.supportData = result.record;
        const date1 = new Date(result.record[0].createdAt);
        const date2 = new Date();
        var hours = Math.abs(date1.getTime() - date2.getTime()) / 36e5;
        if (hours < 4) {
          this.sendSupportButton = false;
        }
      }

    })
    this.email = this.getEmail();
    this.userName = this.getUserName();
    this.firstName = this.getFirstName();
    this.lastName = this.getLastName();
  }

  viewSupport(data, content,view) {
    this.subject=data.subject;
    this.reply=view;
    this.open(content);
  }

  open(content) {

    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  get f() { return this.editForm.controls; }



  getEmail() {
    return this.loginService.getLoginUserEmail();
  }

  getReferralCode() {
    return this.loginService.getRefferalCode();
  }

  getUserName() {
    return this.loginService.getLoginUserName();
  }
  getFirstName() {
    return this.loginService.getFirstUserName();
  }

  getLastName() {
    return this.loginService.getLastUserName();
  }


  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    const formdata = this.editForm.value;
    formdata.userId = this.loginService.getLoginUserId();
    formdata.email = this.email;
    formdata.name = this.firstName + ' ' + this.lastName;
    this.loader.startLoading();
    this.userService.saveSupportTicket(formdata).subscribe((result) => {
      this.submitted = false;
      this.loader.stopLoading();
      if (result.status === 'success') {
        this.ngOnInit();
      }
    })
  }


}
