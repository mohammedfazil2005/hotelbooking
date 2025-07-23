import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderHotelsComponent } from "../../components/header-hotels/header-hotels.component";

@Component({
  selector: 'app-hotelpage',
  imports: [HeaderHotelsComponent],
  templateUrl: './hotelpage.component.html',
  styleUrl: './hotelpage.component.css'
})
export class HotelpageComponent {

}
