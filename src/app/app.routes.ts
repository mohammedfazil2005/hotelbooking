import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelpageComponent } from './pages/hotelpage/hotelpage.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'hotel',component:HotelpageComponent},
    {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then((res)=>res.AdminModule)}
];
