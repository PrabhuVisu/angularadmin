import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthenticationService, private toastr: ToastrService,
  ) {}

  ngOnInit() {
  }

  onLoggedin(username: any, password: any) {

    this.authService.login(username, password).subscribe(data => {
      const temp = JSON.parse(data);
      console.log(temp);
      if (data.search('SD200') !== -1 ) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('firstname', temp.Items[0].firstName );
      localStorage.setItem('role', temp.Items[0].roleName );
      localStorage.setItem('email', temp.Items[0].emailId1 );
      localStorage.setItem('id', temp.Items[0].id );
      localStorage.setItem('deptId', temp.Items[0].departmentId );
      localStorage.setItem('loginName', temp.Items[0].loginName );
     // this.toastr.success('LoggedIn Successfully!');
      this.router.navigate(['/dashboard']);
      } else if (data.search('SD205') !== -1) {
        this.toastr.error('Login name or password is wrong');

      } else if (data.search('SD394') !== -1) {
        this.toastr.error('User Account Locked');

      } else if (data.search('SD401') !== -1) {
        this.toastr.error('Not Authorized');

      } else {
        console.log('User Blocked');
      }
    });

  }

}
