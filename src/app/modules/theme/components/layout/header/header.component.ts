/**
 * Header component for Basic theme module
 */

import { Component, OnInit, HostListener } from '@angular/core';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: string;
  user_dropdown: boolean = false;

  constructor(public loginService: JWTAuthService, public _router: Router) {
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    this.user_dropdown = false;
  }

  ngOnInit() {    

  }

  openUserDropdown(){
    this.user_dropdown = !this.user_dropdown;       
  }

}
