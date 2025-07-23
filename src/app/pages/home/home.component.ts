import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeaderHotelsComponent } from "../../components/header-hotels/header-hotels.component";
import { LoginComponent } from "../../components/login/login.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, LoginComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isHeader:boolean=true

  // getting data from child

  getDataFromChild(event:string){
    console.log(event)

    if(sessionStorage.getItem("token")){
      this.isHeader=true
      console.log(this.isHeader)
    }else{
      this.isHeader=false
      console.log(this.isHeader)
    }
    
  }

  closeLogin(event:string){
    this.isHeader=true
  }

}
