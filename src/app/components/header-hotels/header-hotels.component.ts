import { Component } from '@angular/core';
import { ApiService } from '../../services/apiservice/api.service';
import { hotelType } from '../../interfaces/userInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-hotels',
  imports: [CommonModule],
  templateUrl: './header-hotels.component.html',
  styleUrl: './header-hotels.component.css'
})
export class HeaderHotelsComponent {

  ngOnInit(){
    this.onGetAllHotels()
  }

  hotelArray:hotelType[]=[]

  constructor(private api:ApiService){}

  onGetAllHotels(){
    this.api.onFetchAllHotels().subscribe((res:any)=>{
     console.log(res.data)
     this.hotelArray=res.data
    })
  }

}
