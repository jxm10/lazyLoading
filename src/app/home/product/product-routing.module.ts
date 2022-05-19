import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  {
    path:"", component: ProductComponent
  },
  {
    path: "provider",
    loadChildren: () => import ('./provider/provider.module').then(provider => provider.ProviderModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
