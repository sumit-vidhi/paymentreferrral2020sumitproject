import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IpServiceService {

  constructor(private http: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }
  public getIPAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }
}
