import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdheaderComponent } from './admin/adheader/adheader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdheaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AdheaderComponent,
  ]
})
export class SharedModule { }
