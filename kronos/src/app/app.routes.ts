import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';

import { Programas } from './programas/programas';
import { Fichas } from './fichas/fichas';
import { Disponibilidad } from './disponibilidad/disponibilidad';
import { Programacion } from './programacion/programacion';
import { Reportes } from './reportes/reportes';
import { Complementarias } from './complementarias/complementarias';


export const routes: Routes = [
    {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
    {path: 'usuarios', component: Usuarios},
    {path: 'programas', component: Programas},
    {path: 'fichas', component: Fichas},
    {path: 'disponibilidad', component: Disponibilidad},
    {path: 'programacion', component: Programacion},
    {path: 'reportes', component: Reportes},
    {path: 'complementarias', component: Complementarias}
   
    
];
