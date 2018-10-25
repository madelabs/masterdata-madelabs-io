import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'pricing', component: PricingPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomePageComponent,
    FeaturesPageComponent,
    PricingPageComponent
  ],  
  providers: [],
  bootstrap: []
})
export class MarketingModule { }
