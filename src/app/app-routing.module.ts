import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/acess/guard/auth.guard';
import { PostLoginComponent } from './components/acess/post-login/post-login.component';
import { HistoricCouponComponent } from './components/historic-coupon/historic-coupon.component';
import { HomeComponent } from './components/home/home.component';
import { ValidateCouponComponent } from './components/validate-coupon/validate-coupon.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: PostLoginComponent, canLoad: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  {path: 'h', component: ValidateCouponComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
