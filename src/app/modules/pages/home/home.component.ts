import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { LoaderService } from '@core/services/loader-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _trialEndsAt;

  private _diff: number;
  private _days: number;
  private _hours: number;

  private _minutes: number;

  private _seconds: number;
  commingSoon = false;
  code: any = "";
  urlCode: any = '';
  constructor(public loginService: JWTAuthService, private route: ActivatedRoute, private loader: LoaderService, public _router: Router) {

  }

  ngOnInit() {

    this._trialEndsAt = "2020-02-15";

    interval(3000).pipe(map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
      if (this._days <= 0 && this._hours <= 0 && this._minutes <= 0 && this._seconds <= 0) {
        this.commingSoon = true;
      }
    });
    this.urlCode = "";
    this.code = "";
    this.checkReferralCode();
  }

  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }

  checkReferralCode() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        var size = Object.keys(params).length;
        console.log(size)
        if (size === 1) {
          this.code = params;
          console.log(this.code);
          this.urlCode = "?code=" + this.code.code;
        }

      })
  }
  goSignup() {
    this._router.navigate(['/auth/reg'], { queryParams: { code: this.code.code } })
  }

}