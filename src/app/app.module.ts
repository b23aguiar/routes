import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app.routing.module';

import { AuthService } from './login/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './alunos/guards/alunos.guard';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
// import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
