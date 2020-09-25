import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componetes/home/home.component';
import { TelefonoComponent } from './componetes/telefono/telefono.component';
import { HeaderComponent } from './componetes/mix/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelefonoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
