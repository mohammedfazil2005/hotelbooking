import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  sidebarArray:Array<any>=[
    {id:1,title:'dashboard',icon:'fa-solid fa-chart-line',link:'/admin'},
    {id:2,title:'Add Hotel',link:'/admin/section2',icon:'fa-solid fa-hotel'},
    {id:3,title:'All Hotels',link:'/admin/section3',icon:'fa-solid fa-hotel'},
  ]

}
