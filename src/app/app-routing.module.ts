import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component'
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AccountComponent } from './Components/account/account.component';
import { BookComponent } from './Components/book/book.component';
import { ContactComponent } from './Components/contact/contact.component';


const routes: Routes = [
  {path : '', children : [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'book', component : BookComponent},
  {path : 'about', component : AboutusComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'account', component : AccountComponent} ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration : 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
