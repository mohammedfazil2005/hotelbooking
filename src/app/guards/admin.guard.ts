import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { ApiService } from '../services/apiservice/api.service';

export const adminGuard: CanActivateFn = (route, state) => {
 const router=inject(Router)
  
  if(sessionStorage.getItem("role")=="admin"){
    return true
  }else{
        alert("Unauthorized!")
    router.navigateByUrl('/')
    
    return false
  }
};
