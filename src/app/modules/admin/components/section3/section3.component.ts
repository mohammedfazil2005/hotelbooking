import { Component } from '@angular/core';
import { ApiService } from '../../../../services/apiservice/api.service';
import { hotelType } from '../../../../interfaces/userInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  imports: [CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {

  allHotelArray:hotelType[]=[]


  constructor(private api:ApiService){}

  ngOnInit(){
    this.onGetUsers()
  }


  onGetUsers(){
    this.api.onFetchAllHotels().subscribe((res:any)=>{
      this.allHotelArray=res.data
    })
  }
}
