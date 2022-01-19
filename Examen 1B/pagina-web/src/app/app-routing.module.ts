import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaCategoriaComponent} from "./rutas/ruta-categoria/ruta-categoria.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";

const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'categoria',
    component: RutaCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
