import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlatformFeaturesComponent } from './platform-features/platform-features.component';
import {OurteamComponent} from "./ourteam/ourteam.component";
import {ContactusComponent} from "./contactus/contactus.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'platform-features', component: PlatformFeaturesComponent},
  { path: 'ourteam', component: OurteamComponent},
  { path: 'contactus', component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
