import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageViewComponent } from './views/homepage-view/homepage-view.component';


const routes: Routes = [
  {path: '', component: HomepageViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
