import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from '../app/body/body.component';
import{ BlogsComponent } from '../app/blogs/blogs.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'home', component: BodyComponent},
  {path: 'blog', component: BlogsComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
