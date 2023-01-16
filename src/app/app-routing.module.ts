import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent, TourListComponent } from './admin';
import { AdminComponent } from './admin/admin.component';
import { ContactListComponent } from './admin/pages/contact-list/contact-list.component';
import { CustomerListComponent } from './admin/pages/customer-list/customer-list.component';
import { NewListComponent } from './admin/pages/new-list/new-list.component';
import { OrderComponent } from './admin/pages/order/order.component';
import { PlaceListComponent } from './admin/pages/place-list/place-list.component';
import { BooktourComponent } from './components/booktour/booktour.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';

import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { NewComponent } from './components/new/new.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"detail/:tourId",
    component: DetailComponent
  },
  {
    path:"newh",
    component: NewComponent
  },
  {
    path:"book",
    component:BooktourComponent
  },
  {
    path:"admin",
    component: AdminComponent
  },
  {
    path:'place',
    component:PlaceListComponent
  },
  {
    path:'tour',
    component:TourListComponent
  },
  {
    path:'category',
    component:CategoryListComponent
  },
  {
    path:'customer',
    component:CustomerListComponent
  },
  {
    path:'new',
    component:NewListComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'contact',
    component:ContactListComponent
  },
  {
    path:'intro',
    component:IntroComponent
  },
  {
    path:'contact1',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'order/:tourId',
    component:BooktourComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
