import { TelefonoComponent } from './componetes/telefono/telefono.component';

import { HomeComponent } from './componetes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'home', component:HomeComponent},
{ path: 'telefonos', component:TelefonoComponent},
{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
