import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeaderHotelsComponent } from "../../components/header-hotels/header-hotels.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, HeaderHotelsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  image:string="../../../../public/jap.jpg"

}
