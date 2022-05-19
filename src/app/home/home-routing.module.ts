import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: "", component : HomeComponent,
    children:[
      {
    path : "user", component : UserComponent
      },
      {
        path : "profile", component : ProfileComponent
      },
      // {
      //   path: "home", 
      //   loadChildren:() => import ("./home/home.module" ).then(home => (home.HomeModule))
      // }
      {
        path: "product", 
        loadChildren:() => import ('./product/product.module').then(product => (product.ProductModule))
      }
]},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
