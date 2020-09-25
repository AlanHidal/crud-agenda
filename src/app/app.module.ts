import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componetes/home/home.component';
import { TelefonoComponent } from './componetes/telefono/telefono.component';
import { HeaderComponent } from './componetes/mix/header/header.component';
import { ModalAddContactComponent } from './componetes/modal/contact-form/modal-add-contact/modal-add-contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalEditphoneComponent } from './componetes/modal/contact-form/modal-editphone/modal-editphone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelefonoComponent,
    HeaderComponent,
    ModalAddContactComponent,
    ModalEditphoneComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
