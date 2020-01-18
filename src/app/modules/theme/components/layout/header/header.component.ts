/**
 * Header component for Basic theme module
 */

import { Component, OnInit, HostListener } from '@angular/core';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: string;
  user_dropdown: boolean = false;
  blogPage: any;
  constructor(public loginService: JWTAuthService, public _router: Router,
    public userservice: UserService) {
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.user_dropdown = false;
  }

  ngOnInit() {
    let plan = 'basic';
    if (this.loginService.getUserAccessToken()) {
      plan = this.loginService.getPlan();
    }
    this.userservice.getBlogPage({ plan: plan }).subscribe((result) => {
      console.log(result.record);
      this.blogPage = result.record;

    })

  }

  openUserDropdown() {
    this.user_dropdown = !this.user_dropdown;
  }

}
