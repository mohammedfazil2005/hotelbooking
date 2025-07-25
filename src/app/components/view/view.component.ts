import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/apiservice/api.service';
import { apiResponce, hotelType } from '../../interfaces/userInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  paramID:string=""
  singleHotel:any|hotelType=""
  totalPrice:number=0
  totalUsers:number=1

  ngOnInit(){
    this.getSingleHotel()
  }



  constructor(private router:ActivatedRoute,private api:ApiService){
     this.paramID=this.router.snapshot.params['id']
     console.log(this.paramID)
  }

  getSingleHotel(){
    this.api.onGetSingleHotel(this.paramID).subscribe((res:hotelType)=>{
      this.singleHotel=res
      this.totalPrice=res.hotelrate
      // console.log(this.singleHotel)
  })
  }

  totalUserUpdateButton(value:string){
    if(value=="add"){
      this.totalUsers+=1
      this.totalPrice+=this.singleHotel.hotelrate
      console.log(this.totalPrice)
    }else{
      if(this.totalUsers>1){
        this.totalUsers-=1
        this.totalPrice-=this.singleHotel.hotelrate
      }
    }
  }

  onBookClick(){
    console.log(this.singleHotel.id)
    const hotelDetails={totalpersons:this.totalUsers,totalprice:this.totalPrice,hotelid:this.singleHotel.id}
    console.log(hotelDetails)
    this.api.onBooking(hotelDetails).subscribe({
      next:(res:apiResponce)=>{
        console.log(res)
        alert(res.message)
      },
      error:(reason:apiResponce)=>{
        console.log(reason)
        alert(reason.error.message)
      }
    })
  }

}
