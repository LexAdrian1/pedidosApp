import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./pages/productos/list/list.module').then(m => m.ListModule) }, 
  { path: 'new', loadChildren: () => import('./pages/productos/new/new.module').then(m => m.NewModule) }, 
  { path: 'details', loadChildren: () => import('./pages/productos/details/details.module').then(m => m.DetailsModule) }, 
  { path: 'edit', loadChildren: () => import('./pages/productos/edit/edit.module').then(m => m.EditModule) },
  { path: 'table', loadChildren: () => import('./shared/components/table/table.module').then(m => m.TableModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
