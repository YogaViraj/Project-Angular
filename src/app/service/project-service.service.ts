import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
push(data: any): void {
  throw new Error('Method not implemented.');
}

constructor(private http : HttpClient) { }
private headers= new HttpHeaders(
  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AuthenticationService.GetData("token")}`
  }
)

baseurl = "https://localhost:7021/Profile/";

getProjectDetail(id : number) : Observable<any>{
  return this.http.get<any>(this.baseurl + `GetProjectDetailsById?Projectid=${id}`);
}

getProjectDetailByProfileID(id : number) : Observable<any>{
  return this.http.get<any>(this.baseurl + `GetProjectDetailsById?Profileid=${id}`);
}

getallProjectDetailByProfile( ) : Observable<any>{
  return this.http.get<any>(this.baseurl + 'GetallProjectDetails');
}
UpdateProjects(data:any){
  return this.http.put<any>(this.baseurl + 'UpdateProjects',data);
}
CreateProjects(data:any)
{
  return this.http.post<any>(this.baseurl + `AddProjects`,data,{headers:this.headers});
}
}
