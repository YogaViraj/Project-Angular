import { Component, ViewChild, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Language } from 'Models/language';
import { BreakDuration } from 'Models/breakduration';
import { SocialMedia } from 'Models/socialMedia';
//import { User } from 'Models/user';
import { PersonalDetails } from 'Models/personalDetails';
import { FormBuilder } from '@angular/forms';
//import { PersonalServiceService } from 'src/app/service/personal-service.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  profileId = 2;
  imageError!: string;
  child: any;
  
 // @Input() artsrc: string = " ";
  //data: any;
  // personalDetails: any;
  // imageError!: string;
  // Name: any;
  // Objective: any;
  // Dateofbirth:any;
  // Nationality: any;
  // Dateofjoining:any;
  // Email:any;
  // LanguageValue: string='';
  // BreakdurationValue: string='';
  // SocialmediaValue:string='';

  constructor(private userService: UserserviceService, private http: HttpClient) { }
  ngOnInit(): void {
    this.getLanguage();
    this.getBreakduration();
    this.getSocialmedia();
  }

  languageValue:Language[]=[];
  language:number=0;
  breakdurationValue:BreakDuration[]=[];
  breakduration:number=0;
  socialmediaValue:SocialMedia[]=[];
  socialmedia:number=0;
  
  personalDetailsId : number = 2;
  Personal:any;
  personal:PersonalDetails[]=[];
  data : any;
  user:any = {
    personalDetailsId:0,
    profileId: this.profileId,
    profilePhoto:'',
    objective: '',
    name:'',
    dateOfBirth: '',
    nationality: '',
    mailAddress: '',
    dateOfJoining:'',

    this.language ={
      languageId: 0,
      languageName: '',
      read: '',
      write: '',
      speak: '',
    },

    this.breakDuration = {
      breakDuration_Id: 0,
      starting:'',
      ending: '',
    },
    
    this.socialmedia = {
      socialMedia_Id: 0,
      socialMedia_Name: '',
      socialMedia_Link: '',
    }
  }
  getLanguage()
  {
    this.userService.getLanguage().subscribe((data:any)=>
    {
      this.languageValue=data;
    });
  }
  getBreakduration()
  {
    this.userService.getBreakduration().subscribe((data:any)=>
    {
      this.languageValue=data;
    });
  }

  getSocialmedia()
  {
    this.userService.getSocialmedia().subscribe((data:any)=>
    {
      this.languageValue=data;
    });
  }

  GetAllPersonalDetailsByProfileId(){
    this.userService.getPersonalDetailByProfileId(this.profileId).subscribe((res)=>{
      this.user = res;
      console.log(this.data);
  })
  }
  // getPersonalDetailsbyId(){
  //   this.userService.getPersonalDetails(this.personalDetailsId).subscribe((res)=>{
  //     this.user = res;
  //     this.user.designation = res.role;
  //     console.log(this.user);
  //   })
  // }


  //   // language: Language | null,
  //   // breakDuration: BreakDuration | null,
  //   // socialmedia: SocialMedia | null,
  //   // education: Education[] | null;
  //   // projects: Projects[] | null;
  //   // skills: Skills[] | null;
  //   // users: User | null,
  //   isActive: true,
  // }

  // personaldata()
  // {
  //   var personalDetails: any={
  //     "personalDetailsId": 0,
  //     "name": this.Name,
  //     "objective": this.Objective,
  //     "dateOfBirth": this.Dateofbirth,
  //     "nationality": this.Nationality,
  //     "mailAddress": this.Email,
  //     "dateOfJoining": this.Dateofjoining,
  //     "languageid": this.LanguageValue,
  //     "breakDurationid": this.BreakdurationValue,
  //     "socialmediaid": this.SocialmediaValue,
  //   };

  //   const headers={'content-type':'application/json'}
  //   console.log(this.personal)
  //   this.http.post<any>('https://localhost:7021/Profile/AddPersonal',this.personal,{headers:headers})
  //   .subscribe((data)=>{
  //     console.log(data)
  //   });
  

  // ngOnInit(): void {
  //   // this.http
  //   //   .get<any>(this.artsrc)
  //   //   .subscribe((data) => {
  //   //     this.data = data;
  //   //     this.totalLength = data.length;
  //   //     console.log(data);
  //   //   });
  // }

  // public data: PersonalDetails[] = [

  // ];

personalSubmit()
{
  console.log(this.user);
  this.userService.addPersonalDetail(this.user).subscribe(data=>this.user.push(data));
}

Update(){
  this.data = this.user;
  this.userService.updatePersonalDetail(this.data).subscribe(data=>this.data.push(data));
}

  fileChangeEvent(fileInput:any){
    // this.imageError="";

    if(fileInput.target.files && fileInput.target.files[0]){

      const max_size = 20971520;
      const allowed_type = ['image/jpeg', 'image/png'];
      if(fileInput.target.files[0].size > max_size){
         this.imageError = 'maximum file size allowed is '+ max_size / 1000 +'Mb';

        return false;
      }
      console.log(fileInput.target.files[0].type)

      if(!allowed_type.includes(fileInput.target.files[0].type)){
        // this.imageError = 'Only images are allowed (either JPG or PNG)';
        return false;
      }

      const reader = new FileReader();
      reader.onload = (e:any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs =>{

          const imgBase64Path = e.target.result;
          // this.cardImageBase64 = imgBase64Path;
          // this.isImageSaved = true;
          console.log(imgBase64Path)
          console.log(image.src)
        }
      };


      reader.readAsDataURL(fileInput.target.files[0]);
    } return false;
    
  }
}