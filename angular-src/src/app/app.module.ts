import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { QuerysService } from './services/querys.service';

import { SharedModule } from './shared/shared.directive';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ShowEstabelecimentoComponent } from './components/show-estabelecimento/show-estabelecimento.component';
import { ShowEventoComponent } from './components/show-evento/show-evento.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro', component: RegisterComponent},
  {path:'consultas', component: ConsultasComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    ConsultasComponent,
    ShowUsersComponent,
    ShowEstabelecimentoComponent,
    ShowEventoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    SharedModule
  ],
  providers: [
    QuerysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
