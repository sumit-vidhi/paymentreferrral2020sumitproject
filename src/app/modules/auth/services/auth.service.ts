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
export class AuthService {

  constructor(
    private commonHttp: CommonHttpService
  ) { }

  /**
   * @function login
   * @description
   * Making a user login request
   * @param param {UserLogin}
   * @returns {Observable<ApiResponseModel>}
   */
  login(param: UserLogin): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.login, param);
  }
  
  /**
   * @function login
   * @description
   * Making a user login request
   * @param param {UserLogin}
   * @returns {Observable<ApiResponseModel>}
   */
  register(formData): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.auth.register, param);
  }
}
