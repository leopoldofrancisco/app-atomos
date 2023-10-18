import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/list', component: ProductReadComponent },
  {path: 'product/create', component: ProductCreateComponent },
  {path: 'product/update/:id', component: ProductEditComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
