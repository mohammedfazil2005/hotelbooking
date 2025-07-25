import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() customEvent=new EventEmitter()
  
  isLoggedIn:boolean=false

  constructor(private router:Router){}

  onLogout(){
    alert("Logged out!")
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

  ngOnInit(){
    if(sessionStorage.getItem("token")){
      this.isLoggedIn=true
    }else{
      this.isLoggedIn=false
    }
  }

  sendData(){
    this.customEvent.emit('s')
  }

  

}
