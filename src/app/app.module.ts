import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { BookComponent } from './Components/book/book.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AccountComponent } from './Components/account/account.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    BookComponent,
    ContactComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
