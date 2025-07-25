import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelpageComponent } from './pages/hotelpage/hotelpage.component';
import { guardGuard } from './guards/guard.guard';
import { PNFComponent } from './pnf/pnf.component';
import { adminGuard } from './guards/admin.guard';
import { ViewComponent } from './components/view/view.component';
import { HeaderHotelsComponent } from './components/header-hotels/header-hotels.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
// import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'hotel',component:HotelpageComponent,canActivate:[guardGuard],children:[
        {path:'',component:HeaderHotelsComponent},
        {path:'view/:id',component:ViewComponent},
        {path:'mybookings',component:MybookingsComponent}
    ]},
    {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then((res)=>res.AdminModule),canActivate:[adminGuard]},
    {path:'**',component:PNFComponent}
];
