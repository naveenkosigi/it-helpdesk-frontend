import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:MainPageComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class routing{

}
