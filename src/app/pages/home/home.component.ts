import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeaderHotelsComponent } from "../../components/header-hotels/header-hotels.component";
import { LoginComponent } from "../../components/login/login.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/apiservice/api.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, LoginComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router:Router,public api:ApiService){}

  // getting data from child

  getDataFromChild(event:string){


    if(sessionStorage.getItem("token")){
      this.api.isHeader=true
      this.router.navigateByUrl('/hotel')
    }else{
      this.api.isHeader=false
      
    }
    
  }

  closeLogin(event:string){
    this.api.isHeader=true
  }

}
