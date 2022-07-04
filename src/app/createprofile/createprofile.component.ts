import { Component,Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {
  @Input() artsrc: string = " ";
  //data: any;
  totalLength: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>(this.artsrc)
      .subscribe((data) => {
        this.data = data;
        this.totalLength = data.length;
        console.log(data);
      });
  }

  public data: CreateprofileComponent[] = [

  ];
}