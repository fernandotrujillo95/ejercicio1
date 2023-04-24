import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { FotoComponent } from './foto/foto.component';

const routes: Routes = [
  {path:"actividad1", component:FormularioComponent},
  {path:"actividad2", component:FotoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
