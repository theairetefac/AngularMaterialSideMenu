import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from "./pages/page-one/page-one.component";
import {PageTwoComponent} from "./pages/page-two/page-two.component";
import {PageThreeComponent} from "./pages/page-three/page-three.component";
import {PageFourComponent} from "./pages/page-four/page-four.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoginComponent} from "./auth/login/login.component";
import {NotAuthGuard} from "./auth/not-auth.guard";

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: '',
    component: PageOneComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-2',
    component: PageTwoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-3',
    component: PageThreeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-4',
    component: PageFourComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
