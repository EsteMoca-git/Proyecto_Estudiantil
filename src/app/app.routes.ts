import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Basico } from './pages/basico/basico';
import { Intermedio } from './pages/intermedio/intermedio';
import { Avanzado } from './pages/avanzado/avanzado';
import { DesdeCero } from './pages/desde-cero/desde-cero';
import { Form } from './pages/form/form';
import { Alfabeto } from './pages/basico/gramatica/alfabeto/alfabeto';
import { Tema } from './pages/basico/tema/tema';
import { Completar } from './pages/basico/ejercicios/completar/completar';


export const routes: Routes = [
    
    
    {path: '', component: Home},
    {path: 'basico', component: Basico, children: [
        {path: 'ejercicios/:tema', component: Completar},
        {path: ':seccion/:tema', component: Tema}
        
    ]},

    {path: 'intermedio', component : Intermedio, children: [
        {path: 'ejercicios/:tema', component: Completar},
        {path: ':seccion/:tema', component: Tema}
        
    ]},
    {
    path: 'avanzado', component: Avanzado, children: [
        { path: 'ejercicios/:tema', component: Completar },
        { path: ':seccion/:tema', component: Tema }
    ]
    },
    {path: 'desde_cero', component: DesdeCero, children: [
        { path: 'ejercicios/:tema', component: Completar },
        { path: ':seccion/:tema', component: Tema }
    ]
    },
    {path: 'form', component: Form},
    
];
