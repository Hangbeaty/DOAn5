import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { actions, pages } from './admin';

import { MODULES } from '.';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DetailComponent } from './components/detail/detail.component';
import { NewComponent } from './components/new/new.component';
import { BooktourComponent } from './components/booktour/booktour.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { OrderActionComponent } from './admin/action/order-action/order-action.component';
import { OrderComponent } from './admin/pages/order/order.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ComponentsComponent,
    HomeComponent,

    // CategoryListComponent,
    // TourListComponent,
    ...pages,
    ...actions,
    DetailComponent,
    NewComponent,
    BooktourComponent,
    LoginComponent,
    ContactComponent,
    OrderActionComponent,
    OrderComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...MODULES,
    NgxPaginationModule,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [MessageService, DialogService],
})
export class AppModule {}
