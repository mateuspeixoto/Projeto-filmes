import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { FeatureComponent } from './feature/feature.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    FeatureComponent,
  ],
  imports: [
    BrowserModule, // Importa o módulo BrowserModule, que fornece recursos essenciais para a execução de aplicativos no navegador.
    AppRoutingModule, // Importa o módulo AppRoutingModule, que contém as rotas de navegação do aplicativo.
    FormsModule // Importa o módulo FormsModule, que fornece suporte para formulários no Angular.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
