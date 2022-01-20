import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FooterModule} from "./componentes/footer/footer.module";
import {PostImagenModule} from "./componentes/post-imagen/post-imagen.module";
import { RutaCategoriaComponent } from './rutas/ruta-categoria/ruta-categoria.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaCategoriaComponent,
    RutaInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    PostImagenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
