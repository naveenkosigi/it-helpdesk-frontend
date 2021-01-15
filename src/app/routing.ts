import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PortalPageComponent } from './portal-page/portal-page.component';

const routes:Routes=[
    {path:'home',component:MainPageComponent,children:
      [
      {path:'pricing',component:PricingPageComponent}
      ]
    },
    {path:'portal',component:PortalPageComponent},
    {path:'**',redirectTo:'home'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class routing{

}
