import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderHotelsComponent } from "../../components/header-hotels/header-hotels.component";
import { Router } from '@angular/router';
import { AdminRoutingModule } from "../../modules/admin/admin-routing.module";

@Component({
  selector: 'app-hotelpage',
  imports: [ AdminRoutingModule],
  templateUrl: './hotelpage.component.html',
  styleUrl: './hotelpage.component.css'
})
export class HotelpageComponent {

  constructor(private router:Router){}

  onLogout(){
    alert("Logged out!")
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

}
