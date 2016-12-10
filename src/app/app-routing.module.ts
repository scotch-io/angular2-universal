import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: 'Home | Scotchiversal' } },
      { path: 'about', component: AboutComponent, data: { title: 'About | Scotchiversal' } },
      { path: 'contact', component: ContactComponent, data: { title: 'Contact | Scotchiversal' } }
    ])
  ],
})
export class AppRoutingModule { }
