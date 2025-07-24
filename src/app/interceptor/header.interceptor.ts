import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const baseURL='http://localhost:3000/api'
  const token=sessionStorage.getItem("token")||''

  const newHeader=req.clone({
    url:baseURL+req.url,
    setHeaders:{Authorization:`Bearer ${token}`}
  })
 

  return next(newHeader);
};
