import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryComponent} from './list-category/list-category.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';
import {InfoCategoryComponent} from './info-category/info-category.component';


const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent
  },
  {
    path: 'create',
    component: CreateCategoryComponent
  },
  {
    path: 'edit/:id',
    component: EditCategoryComponent
  },
  {
    path: 'info/:id',
    component: InfoCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
