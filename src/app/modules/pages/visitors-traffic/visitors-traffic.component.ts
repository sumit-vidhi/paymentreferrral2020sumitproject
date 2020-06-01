import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@core/services/loader-service';
import { PageService } from '@modules/pages/services/page.service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visitors-traffic',
  templateUrl: './visitors-traffic.component.html',
  styleUrls: ['./visitors-traffic.component.scss']
})
export class VisitorsTrafficComponent implements OnInit {
  data: any;
  modalReference: NgbModalRef;
  constructor(private pageService: PageService, public modalService: NgbModal, private loader: LoaderService, public loginService: JWTAuthService) { }

  ngOnInit() {
    this.loader.startLoading();
    this.pageService.getPage({ title: 'visitors-traffic' }).subscribe((result: any) => {
      this.loader.stopLoading();
      this.data = result.record[0].body;
    })
  }

  open(content) {

    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'ticket-modal' });

  }


  buyMoneyPlugin(content) {
    this.open(content);

    // this.loader.startLoading();
    // const userId = this.loginService.getLoginUserId();
    // this.userService.buyPlugin({ userId: userId }).subscribe((result) => {
    //   this.loader.stopLoading();
    //   if (result.status === 'success') {
    //     result.record.authToken = result.record.accessToken;
    //     this.loginService.setLoginUserDetail(result.record);
    //     this.ngOnInit();
    //   }
    // })
  }

}
