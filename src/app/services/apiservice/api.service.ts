import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResponce, bookingType, countType, hotelType, onAddHotel, userLogin } from '../../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isHeader:boolean=true

  constructor(private http:HttpClient) { }

  onRegister(body:userLogin){
    return this.http.post<apiResponce>('/user/register',body)
  }

  onLogin(body:userLogin){
    return this.http.post<apiResponce>('/user/login',body)
  }

  onFetchAllHotels(){
    return this.http.get('/hotel/gethotels')
  }
  onFetchAllUsers(){
    return this.http.get<userLogin>('/user/getusers')
  }


  onAddHotel(body:any){
    return this.http.post<apiResponce>('/hotel/addhotel',body)
  }

  onFetchCounts(){
    return this.http.get<countType>('/user/getcount')
  }

  onGetSingleHotel(id:string){
    return this.http.get<hotelType>(`/hotel/onGetSingleHotel/${id}`)
  }
  onBooking(body:onAddHotel){
    return this.http.post<apiResponce>(`/hotel/onBooking`,body)
  }
  onGetUserHotels(){
    return this.http.get<bookingType[]>('/hotel/onGetUserHotels')
  }
  onDeleteHotel(id:number){
    return this.http.delete<apiResponce>(`/hotel/deletehotel/${id}`)
  }


}
