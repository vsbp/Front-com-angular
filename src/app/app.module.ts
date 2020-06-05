import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FooterComponent } from './components/templates/footer/footer.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { HomeComponent } from './components/views/home/home.component';
import { UsuarioComponent } from './components/views/usuario/usuario.component';
import { IngressoComponent } from './components/views/ingresso/ingresso.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoCrudComponent } from './components/views/evento-crud/evento-crud.component';
import { UsuarioCreateComponent } from './components/usuario-crud/usuario-create/usuario-create.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventoCrudComponent,
    IngressoComponent,
    UsuarioComponent,
    EventoCreateComponent,
    EventoCrudComponent,
    UsuarioCreateComponent,
    EventoReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
