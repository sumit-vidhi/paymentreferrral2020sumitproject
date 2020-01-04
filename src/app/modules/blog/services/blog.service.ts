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


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private commonHttp: CommonHttpService
  ) { }


  getBlog(data): Observable<ApiResponseModel> {
    return this.commonHttp.post<ApiResponseModel>(appApiUrl.blog.getBlog, data);
  }

}
