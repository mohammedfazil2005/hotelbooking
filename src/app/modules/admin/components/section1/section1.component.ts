import { Component } from '@angular/core';
import { countType, userLogin } from '../../../../interfaces/userInterface';
import { ApiService } from '../../../../services/apiservice/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section1',
  imports: [CommonModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

   allUsersArray:userLogin[]=[]
   allCounts:countType

  constructor(private api:ApiService){
    this.allCounts={
      totalHotels:0,
      totalusers:0
    }
  }

  ngOnInit(){
    this.onGetUsers()
    this.onGetCounts()
  }


  onGetUsers(){
    this.api.onFetchAllUsers().subscribe((res:any)=>{
      this.allUsersArray=res.data
    })
  }

  onGetCounts(){
    this.api.onFetchCounts().subscribe((res:countType)=>{
      this.allCounts=res
    })
  }

}
