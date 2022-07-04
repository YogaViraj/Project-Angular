// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
//import { AuthenticationService } from 'src/services/authentication.service';

import { User} from 'Models/user'; 
//import { ConnectionService } from 'src/services/connection.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  IsAdmin: boolean = false;
  IsHR: boolean = false;
  userValue:User[]=[];

 // employeeDetails: any;
  //employeeID='';
 // employeeACENumber: any;
  constructor(private http: HttpClient, private route: Router, private service:UserserviceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  user: any = {

    UserName: '',
    Password: '',

  }
  // ngOnInit(): void {
  // }

  onSubmit() {
    const headers = { 'content-type': 'application/json' }

  console.log(this.user)
      this.service.Login(this.user).subscribe((data) => {

        this.IsAdmin = data.isAdmin
        this.IsHR = data.isHR
        
        AuthenticationService.SetDateWithExpiry("token", data.token, data.expiryInMinutes)
        AuthenticationService.SetDateWithExpiry("Admin", data.isAdmin, data.expiryInMinutes)
        AuthenticationService.SetDateWithExpiry("HR", data.isHR, data.expiryInMinutes)

        console.log(AuthenticationService.GetData("token"))
        console.log(AuthenticationService.GetData("Admin"))
        console.log(AuthenticationService.GetData("HR"))

        if (this.IsAdmin) {
          this.route.navigateByUrl("/adminhome");  //navigation
        }
        else if (this.IsHR) {
          this.route.navigateByUrl("/hrhome");
        }
        else {
          this.route.navigateByUrl("/");
        }
        console.log(data)

      });
    }
      
// export class LoginComponent implements OnInit {
//   @Input() artsrc: string = " ";
//   //data: any;
//   totalLength: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http
//       .get<any>(this.artsrc)
//       .subscribe((data) => {
//         this.data = data;
//         this.totalLength = data.length;
//         console.log(data);
//       });
//   }

//   public data: LoginComponent[] = [

//   ];
  }
