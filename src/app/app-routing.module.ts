import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IndexComponent } from './components/index/index.component';
import { TemplateComponent } from './components/template/template.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';


// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent // Default Route
  },
  {
    path: 'template',
    component: TemplateComponent // Default Route
  },
  {
    path: 'login',
    component: LoginComponent // Default Route
  },
  {
    path: 'contact',
    component: ContactComponent // Default Route
  },
  {
    path: 'aboutus',
    component: AboutusComponent // Default Route
  },
  { path: '**', component: IndexComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
