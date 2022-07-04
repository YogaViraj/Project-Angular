import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User} from 'Models/user';
import { Designation } from 'Models/designation';
import { Organisation } from 'Models/organisation';
import { College } from 'Models/college';
import { AuthenticationService } from './authentication.service';
import { Domain } from 'Models/domain';
import { Technology } from 'Models/technology';
import { ProfileStatus } from 'Models/profilestatus';
import { Language } from 'Models/language';
import { BreakDuration } from 'Models/breakduration';
import { SocialMedia } from 'Models/socialMedia';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  
  push(data: any): void {
    throw new Error('Method not implemented.');
  }
  getLanguage():Observable<Language[]>
  {
    throw new Error('Method not implemented.');
  }

  getBreakduration():Observable<BreakDuration[]>
  {
    throw new Error('Method not implemented.');
  }

  getSocialmedia():Observable<SocialMedia[]>
  {
    throw new Error('Method not implemented.');
  }

  getProfileStatus():Observable<ProfileStatus[]>{
    throw new Error('Method not implemented.');
  }
  
  getTechnology():Observable<Technology[]> {
    throw new Error('Method not implemented.');
  }
  getDomain():Observable<Domain[]> {
    throw new Error('Method not implemented.');
  }

  baseURL = 'https://localhost:7021/'

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders(
    {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AuthenticationService.GetData("token")}`
  })

  getUserDetails(userId:number)
  {
    return this.http.get<any>(`https://localhost:7021/User/GetUserById?id=${userId}`,{ headers: this.headers });
  }
  getUserProfile()
  {
    return this.http.get<any>(`https://localhost:7021/User/GetUserProfile`,{ headers: this.headers });
  }

  getCollege():Observable<College[]>
  {
    return this.http.get<College[]>('https://localhost:7021/College/ViewColleges');
  }
  
  getDesignation():Observable<Designation[]>
  {
    return this.http.get<Designation[]>('https://localhost:7021/Designation/ViewDesignations');
  }

  
  getOrganisation():Observable<Organisation[]>
  {
    return this.http.get<Organisation[]>('https://localhost:7021/Organisation/ViewOrganisations');
  }

  onSubmit(userPassword:any)
  {
    console.log(userPassword);
    return this.http.put<any>(`https://localhost:7021/User/ChangePassword/Change Password?OldPassword=${userPassword.OldPassword}&NewPassword=${userPassword.NewPassword}&ConfirmPassword=${userPassword.ConfirmPassword}`,userPassword,{headers:this.headers})
  }

  Login(user:any)
  {
    return this.http.post<any>(`https://localhost:7021/Login/AuthLogin/Login?Username=${user.UserName}&password=${user.Password}`, user, { headers: this.headers })
  
  }
  // Login(user: any) {
  //   return this.http.post<any>(`https://localhost:7021/Login/AuthLogin/Login?Username=${user.UserName}&password=${user.Password}`, user, { headers: this.header })
  // }

  addPersonalDetail(user:any)
  {
    return this.http.post<any>(`https://localhost:7021/Profile/AddPersonalDetail`,user,{headers : this.headers}); 
  }

  getPersonalDetails(personalId:number)
  {    
    return this.http.get<any>(`https://localhost:7021/Profile/GetPersonalDetailsById?Personalid=${personalId}`,{headers:this.headers});
  }

  updatePersonalDetail(personalDetails:any)
  {
    console.log("updateEducation");
    console.log(personalDetails);
    return this.http.put<any>(`https://localhost:7021/Profile/UpdatePersonalDetail`,personalDetails,{headers:this.headers});
  }

  getPersonalDetailByProfileId(profileId:number)
  {
    return this.http.get<any>( `https://localhost:7021/Profile/GetAllPersonalDetailsByProfileId?Profileid=${profileId}`,{ headers: this.headers });
  }
  
  addEducation(user:any)
  {
    return this.http.post<any>(`https://localhost:7021/Profile/AddEducation`,user,{headers : this.headers});   
  }

  getEducationDetails(educationId:number)
  {
    return this.http.get<any>(`https://localhost:7021/Profile/GetEducationDetailsById?Educationid=${educationId}`,{headers:this.headers});
  }

  updateEducation(education:any)
  {
    console.log("updateEducation");
    console.log(education);
    return this.http.put<any>(`https://localhost:7021/Profile/UpdateEducation`,education,{headers:this.headers});
  }

  getEducationByProfileId(profileId:number)
  {
    return this.http.get<any>( `https://localhost:7021/Profile/GetAllEducationDetailsByProfileId?Profileid=${profileId}`,{ headers: this.headers });
  }

  addEmployee(userValue:User):Observable<User>
  {
  const url='https://localhost:7021/User/AddUser';
  console.warn(userValue);
  return this.http.post<User>(url,userValue,{headers : this.headers});
  }

  CancelDrive(userId:number){
    console.log(userId);
     return this.http.delete<any>(`https://localhost:7021/User/Disable?id=${userId}`, { headers: this.headers });
  }

  updateUser(user:any)
  {
    return this.http.put<any>(`https://localhost:7021/User/UpdateUser`,user,{headers:this.headers});
  }


}
  

