/**
 * Header component for Basic theme module
 */

import { Component, OnInit } from '@angular/core';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  router: string;

  constructor(public loginService: JWTAuthService, public _router: Router) {
  }

  ngOnInit() {
  }

}
