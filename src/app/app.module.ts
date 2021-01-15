import { routing } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { PortalPageComponent } from './portal-page/portal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PricingPageComponent,
    PortalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
