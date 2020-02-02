/**
 * Creating a new instance of AuthService
 * @class AuthService
 * @description
 * This is auth service, responsible for managing the Authentication related task.
 */

import { Injectable } from '@angular/core';
import { CommonHttpService } from '@core/services/common-http.service';
import { appApiUrl } from "@configs/app-api-urls.config";
import { ToggleNu } from "@shared/enum/toggle";
import { ApiResponseModel } from '@shared/models/api-response-model';
import { Observable } from 'rxjs';

interface UserLogin {
  email: string;
  password: string;
  remember_me?: ToggleNu;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private commonHttp: CommonHttpService
  ) { }


  editProfile(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.editProfile, data);
  }
  getProfile(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getdata);
  }

  getdashboardData(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getdashboradData);
  }

  getWalletData(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getWalletData);
  }
  getWalletCredit(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getWalletCredit);
  }

  getSponserReferralData(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getSponserReferralData);
  }

  getReferralData(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getReferralData);
  }

  changepassword(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.updatePassword, data);
  }

  addWalletCredit(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.addWalletCredit, data);
  }

  addCash(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.addCash, data);
  }

  buyPlugin(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.buyPlugin, data);
  }

  getSupportReply(): Observable<ApiResponseModel> {
    return this.commonHttp.get<ApiResponseModel>(appApiUrl.auth.getSupportReply);
  }

  saveSupportTicket(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.saveSupportTicket, data);
  }
  saveSupport(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.saveSupport, data);
  }

  getReply(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.getReply, data);
  }

  saveReply(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.saveReply, data);
  }

  addUrl(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.addUrl, data);
  }

  getBlogPage(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.blog.getBlogPage, data);
  }
  imageUpload(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.imageUpload, data);
  }


}
