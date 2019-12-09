/**
 * Header component for Basic theme module
 */

import { Component, OnInit } from '@angular/core';
import { JWTAuthService } from '@core/services/jwt-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: JWTAuthService) { }

  ngOnInit() {
  }

}
