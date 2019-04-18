import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'category-list', loadChildren: './category-list/category-list.module#CategoryListPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'page/:id', loadChildren: './page/page.module#PagePageModule' },
  { path: 'single-page', loadChildren: './single-page/single-page.module#SinglePagePageModule' },
  { path: 'degree-page/:id/:gal/:cur', loadChildren: './degree-page/degree-page.module#DegreePagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
