import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-support-reply',
  templateUrl: './support-reply.component.html',
  styleUrls: ['./support-reply.component.scss']
})
export class SupportReplyComponent implements OnInit {

  @Input() supportData: any;
  replyForm: FormGroup;
  supportReply: any;
  userId: any;
  name: any;
  status: any;
  reply: boolean = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService, public modalService: NgbModal) {
    this.userId = this.loginService.getLoginUserId();
    this.name = this.loginService.getFirstUserName();
  }

  ngOnInit() {

    this.replyForm = this.formBuilder.group({
      supportId: [this.supportData.id],
      fromId: [this.supportData.fromId],
      message: ['', Validators.required]

    });
    const supportId = this.supportData.id;
    this.status = this.supportData.status;
    if (this.status == 0) {
      this.reply = true;
    }
    this.loader.startLoading();
    this.userService.getReply({ id: supportId }).subscribe((result) => {
      if (result.status == 'success') {
        this.loader.stopLoading();
        this.supportReply = result.record;
      }
    })
  }

  get f() { return this.replyForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.replyForm.invalid) {
      return;
    }
    const data = this.replyForm.value;
    this.loader.startLoading();
    this.userService.saveReply(data).subscribe((result) => {
      if (result.status == 'success') {
        this.loader.stopLoading();
        this.ngOnInit();
      }
    })
  }

}
