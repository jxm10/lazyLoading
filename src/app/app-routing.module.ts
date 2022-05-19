import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path : "login", component : LogInComponent
  },
  {
    path: "home", 
    loadChildren:() => import ("./home/home.module" ).then(home => (home.HomeModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
