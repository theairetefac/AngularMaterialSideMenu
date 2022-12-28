import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from "./pages/page-one/page-one.component";
import {PageTwoComponent} from "./pages/page-two/page-two.component";
import {PageThreeComponent} from "./pages/page-three/page-three.component";
import {PageFourComponent} from "./pages/page-four/page-four.component";

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent
  },
  {
    path: 'page-2',
    component: PageTwoComponent
  },
  {
    path: 'page-3',
    component: PageThreeComponent
  },
  {
    path: 'page-4',
    component: PageFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
