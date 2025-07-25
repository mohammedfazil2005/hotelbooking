import { Component } from '@angular/core';
import { ApiService } from '../../../../services/apiservice/api.service';
import { apiResponce, hotelType } from '../../../../interfaces/userInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  imports: [CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {

  allHotelArray:hotelType[]=[]
  hotelData:any|hotelType=''

  constructor(private api:ApiService){}

  ngOnInit(){
    this.onGetUsers()
  }


  onGetUsers(){
    this.api.onFetchAllHotels().subscribe((res:any)=>{
      this.allHotelArray=res.data
    })
  }

  onEyeClick(id:number){
    this.hotelData=this.allHotelArray.find((a)=>a.id==id)
    console.log(this.hotelData)
  }

  onDeleteHotel(){
    this.api.onDeleteHotel(this.hotelData.id).subscribe({
      next:(responce:apiResponce)=>{
        console.log(responce)
        alert(responce.message)
        this.onGetUsers()
      },
      error:(reason:apiResponce)=>{
        console.log(reason)
        alert(reason.error.message)
      }
    })
  }


}
