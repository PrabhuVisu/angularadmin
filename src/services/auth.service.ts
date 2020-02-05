import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import * as config from '../config.json';

@Injectable()
export class AuthenticationService {
  loggedIn: boolean;
  workflowStatus: string;
  constructor(private http: HttpClient, private router: Router,
  ) { }

  login(username: any, password: any) {
    const formData: FormData = new FormData();
    formData.append('loginName', username);
    formData.append('password', password);
    console.log(username);
    console.log(password);
    console.log(config[0]["loginAPI"]);
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/xml')
      .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method');
    //Login API 
    return this.http.post<any>(config[0]["loginAPI"], formData, { withCredentials: true, responseType: 'text' as 'json' });
  }
  getProfileInfo() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>('https://dev.dwp.firstqa.com/server/common/api/v6.6/userProfile/get.json', { withCredentials: true, responseType: 'text' as 'json' });
  }
  getNotifications() {
  // tslint:disable-next-line:max-line-length
  return  this.http.get<any>('https://dev.dwp.firstqa.com/server/user/api/v7/notifications/list.json', { withCredentials: true, responseType: 'text' as 'json' });
  }
  getNotificationInfo(id: any) {
    const httpParams = new HttpParams().set('notificationId', id);
    return this.http.get<any>('https://dev.dwp.firstqa.com/server/user/api/v7/notifications/getDetails.json', {params: httpParams});
}
getPositions() {
 // const cpHeaders = new Headers({ 'Content-Type': 'application/json' });

  return this.http.get('/api/get');

}
getCandidates() {
  // const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
   return this.http.get('/api/getCandidates');

 }


}
