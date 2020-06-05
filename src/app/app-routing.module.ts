import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { EventoCrudComponent } from './components/views/evento-crud/evento-crud.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { UsuarioComponent } from './components/views/usuario/usuario.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'evento',
    component: EventoCrudComponent
  },
  {
    path: 'evento/evento-create',
    component: EventoCreateComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
