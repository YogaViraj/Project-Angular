import { Component, OnInit } from '@angular/core';
import { Domain } from 'Models/domain';
import { Technology } from 'Models/technology';
import { Designation } from 'Models/designation';
import { College } from 'Models/college';
import { ProfileStatus } from 'Models/profilestatus';
import { UserserviceService } from 'src/app/service/userservice.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { data } from 'jquery';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  designationValue:Designation[]=[];
  domainValue:Domain[]=[];
  technologyValue:Technology[]=[];
  collegeValue:College[]=[];
  profilestatusValue:ProfileStatus[]=[];
  
  DesignationValue:number=0;
  DomainValue:number=0;
  TechnologyValue:number=0;
  CollegeValue:number=0;
  ProfilestatusValue:number=0;


  Designation:any;
  Domain:any;
  Technology:any;
  College:any;
  ProfileStatus:any;
  Experiance:any;
  //experianceValue:Experiance[]=[];

  constructor(private FB: FormBuilder,private service:UserserviceService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getDesignation();
    this.getDomain();
    this.getTechnology();
    this.getCollege();
    this.getProfileStatus();
  }
  getProfileStatus() {
    this.service.getProfileStatus().subscribe((data : any)=> this.profilestatusValue=data);
  }
  getCollege() {
    this.service.getCollege().subscribe((data: any) => this.collegeValue=data);
  }
  getDomain() {
    this.service.getDomain().subscribe((data: any) => this.domainValue=data);
  }
  getTechnology() {
    this.service.getTechnology().subscribe((data: any) => this.technologyValue=data);
  }
  getDesignation() {
    this.service.getDesignation().subscribe((data: any) => this.designationValue=data);
  }

}
