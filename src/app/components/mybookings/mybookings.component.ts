import { Component } from '@angular/core';
import { ApiService } from '../../services/apiservice/api.service';
import { bookingType, hotelType } from '../../interfaces/userInterface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mybookings',
  imports: [CommonModule,RouterLink],
  templateUrl: './mybookings.component.html',
  styleUrl: './mybookings.component.css'
})
export class MybookingsComponent {

  ngOnInit(){
    this.getMyBookings()
  }

  userHotels:bookingType[]=[]

  constructor(private api:ApiService){}

  getMyBookings(){
    this.api.onGetUserHotels().subscribe({
      next:(res:bookingType[])=>{
        // console.log(res)
        this.userHotels=res
        console.log(this.userHotels)
      },
      error:(reason:any)=>{
        console.log(reason.error.message)
      }

    })
  }

  


}
