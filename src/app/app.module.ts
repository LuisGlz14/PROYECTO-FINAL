import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { TexttospeechComponent } from './components/texttospeech/texttospeech.component';
import { TtsdialogComponent } from './components/ttsdialog/ttsdialog.component';
import { FeedComponent } from './components/feed/feed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationsdialogComponent } from './components/notificationsdialog/notificationsdialog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditComponent } from './components/edit/edit.component';
import { NewpostbuttonComponent } from './components/newpostbutton/newpostbutton.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    FaqComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    TexttospeechComponent,
    TtsdialogComponent,
    FeedComponent,
    NavbarComponent,
    NotificationsdialogComponent,
    ProfileComponent,
    ConfiguracionComponent,
    EditComponent,
    NewpostbuttonComponent,
    NewpostComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
