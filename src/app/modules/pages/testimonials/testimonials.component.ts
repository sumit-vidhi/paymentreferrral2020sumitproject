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
  supportForm: FormGroup;
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
  subject: any;
  description: any;
  createdAt: any;
  modalReference: NgbModalRef;
  reply: any;
  createTicket: boolean = false;
  passData: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService, public modalService: NgbModal) { }

  ngOnInit() {
    this.supportForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required]

    });


    this.loader.startLoading();
    this.userService.getSupportReply().subscribe((result) => {
      this.loader.stopLoading();
      if (result.status == 'success') {
        this.supportData = result.record;
        if (result.record.length) {
          const date1 = new Date(result.record[0].createdAt);
          const date2 = new Date();
          var hours = Math.abs(date1.getTime() - date2.getTime()) / 36e5;
          console.log(hours);
          if (hours < 4) {
            this.sendSupportButton = false;
          }
        }

      }

    })
    if (this.loginService.getUserAccessToken()) {
      this.email = this.getEmail();
      this.userName = this.getUserName();
      this.firstName = this.getFirstName();
      this.lastName = this.getLastName();
      this.supportForm.controls.email.setValue(this.email);
      this.supportForm.controls.firstName.setValue(this.firstName);
      // this.supportForm.controls.email.disable();
      // this.supportForm.controls.firstName.disable();
    }

  }


  viewSupport(data, content, view) {

    this.passData = data;
    this.subject = data.subject;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.reply = view;
    this.open(content);
  }

  open(content) {

    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'ticket-modal' });

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



  get f() { return this.supportForm.controls; }



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
    if (this.supportForm.invalid) {
      return;
    }

    const formdata = this.supportForm.value;
    if (this.loginService.getUserAccessToken()) {
      formdata.userId = this.loginService.getLoginUserId();
      formdata.email = this.email;
      formdata.firstName = this.firstName;

      this.loader.startLoading();
      this.userService.saveSupportTicket(formdata).subscribe((result) => {
        this.submitted = false;
        this.loader.stopLoading();
        if (result.status === 'success') {
          alert("Ticket has been created successfully.");
          this.createTicket = false;
          this.ngOnInit();
        }
      })
    } else {
      this.loader.startLoading();
      this.userService.saveSupport(formdata).subscribe((result) => {
        this.submitted = false;
        this.loader.stopLoading();
        if (result.status === 'success') {
          alert("Ticket has been created successfully.");
          this.createTicket = false;
          this.ngOnInit();
        }
      })
    }
  }

  save(event) {
    this.modalReference.close();
    this.ngOnInit();
  }


}
