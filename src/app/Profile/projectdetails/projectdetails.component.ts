import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/service/project-service.service';
import { Project } from 'Models/projects';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-projectdetails',
  templateUrl: './Projectdetails.component.html',
  styleUrls: ['./Projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  profileId = 4;
  constructor(private projectService : ProjectServiceService,private http: HttpClient) { }
//  year:any;
selectedYear: number=0;
  years: number[] = [];
  projectId : number = 13;
  // profileId : number = 4;
 Project:any;
 project:Project[]=[];
  data : any ;
  projectfield:any = {
    projectId:0,
    profileId: this.profileId,
    projectname:'',
    projectdescription:'',
    startingMonth:'',
    startingYear:0,
    endingMonth:'',
    endingYear:0,
    designation: '',
    toolsused: '',

  }
  ngOnInit() {
    this.getProjectbyId();
    this.selectedYear = new Date().getFullYear();
    for (let year = this.selectedYear; year >= 2000; year--) {
    this.years.push(year);
  }
}
  getProjectbyId(){
    this.projectService.getProjectDetail(this.projectId).subscribe((res)=>{
      this.projectfield = res;
      this.projectfield.designation = res.role;
      console.log(this.projectfield);
    })
  }
  
//   getallProjectdetails(){
//     this.projectService.getallProjectDetailByProfile().subscribe((res)=>{
//       this.data = res;
//       console.log(this.data);
//   })
//  }

 GetAllProjectDetailsByProfileId(){
  this.projectService.getProjectDetailByProfileID(this.profileId).subscribe((res)=>{
    this.projectfield = res;
    console.log(this.data);
})
}

OnSubmit(){
  
  console.log(this.projectfield);
  this.projectService.CreateProjects(this.projectfield).subscribe(data=>this.projectfield.push(data));
  }

Update(){
  this.data = this.projectfield;
  this.projectService.UpdateProjects(this.data).subscribe(data=>this.data.push(data));
}

Delete(){
  this.data = this.projectfield;
  // this.projectService.DeleteProjects(this.data).subscribe(data=>this.data.push(data));
  }
}

