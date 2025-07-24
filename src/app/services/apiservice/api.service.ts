import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResponce, countType, hotelType, userLogin } from '../../interfaces/userInterface';

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


}
