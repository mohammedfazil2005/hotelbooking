import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../services/apiservice/api.service';

export const guardGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  let apiservice=inject(ApiService)
  if(sessionStorage.getItem("token")){
    return true
  }else{
    
    apiservice.isHeader=false
    alert("Please Login")
    router.navigateByUrl('/')
    
    return false
  }
  
};
