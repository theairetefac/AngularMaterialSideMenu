import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from "./pages/page-one/page-one.component";
import { PageTwoComponent } from "./pages/page-two/page-two.component";
import { AuthGuard } from "./auth/auth.guard";
import { LoginComponent } from "./auth/login/login.component";
import { NotAuthGuard } from "./auth/not-auth.guard";
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
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
    path: 'books',
    loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
