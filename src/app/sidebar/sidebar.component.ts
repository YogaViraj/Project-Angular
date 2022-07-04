import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [

    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ])

    ]),
    trigger('easeInOut', [

      transition('void => *', [
        style({
          opacity: 0
        }),
        animate("500ms ease-in", style({
          opacity: 1
        }))
      ]),
      transition('* => void', [
        style({
          opacity: 1
        }),
        animate("500ms ease-in", style({
          opacity: 0
        }))

      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private service: AuthenticationService) { }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {  
  // }
  
  logout() {
    this.service.ClearToken();
  }
  isShowDivIf = false;
  toggleSidebar() {
    this.isShowDivIf = !this.isShowDivIf;
  }

}
