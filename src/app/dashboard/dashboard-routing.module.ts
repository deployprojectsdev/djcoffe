import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { CultivoComponent } from '../cultivo/cultivo.component';
import { FincaComponent } from '../finca/finca.component';
import { SensorComponent } from '../sensor/sensor.component';
import { CrearFincaComponent } from '../crear-finca/crear-finca.component';
import { HomeComponent } from './home/home.component';
import { CrearCultivoComponent } from '../crear-cultivo/crear-cultivo.component';
import { EditarCultivoComponent } from '../editar-cultivo/editar-cultivo.component';
import { BorrarCultivoComponent } from '../borrar-cultivo/borrar-cultivo.component';
import { CrearSensorComponent } from '../crear-sensor/crear-sensor.component';
import { RolGuard } from '../guard/rol/rol.guard';
import { ActualizarFincaComponent } from '../actualizar-finca/actualizar-finca.component';
import { BorrarFincaComponent } from '../borrar-finca/borrar-finca.component';
import { ActualizarCultivoComponent } from '../actualizar-cultivo/actualizar-cultivo.component';
import { BorrarSensorComponent } from '../borrar-sensor/borrar-sensor.component';
import { ActualizarSensorComponent } from '../actualizar-sensor/actualizar-sensor.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'finca',
        component: FincaComponent,
        data: { title: 'Finca' },
      },
      {
        path: 'crear-finca',
        component: CrearFincaComponent,
        data: { title: 'Crear Finca' },
      },
      {
        path: 'actualizar-finca/:id',
        component: ActualizarFincaComponent,
        data: { title: 'Actualizar Finca' },
      },
      {
        path: 'borrar-finca/:id',
        component: BorrarFincaComponent,
        data: { title: 'Borrar Finca' },
      },


      {
        path: 'cultivo',
        component: CultivoComponent,
        data: { title: 'Cultivo' }
      },
      {
        path: 'crear-cultivo',
        component: CrearCultivoComponent,
        data: { title: 'Crear cultivo' }
      },
      {
        path: 'actualizar-cultivo/:id',
        component: ActualizarCultivoComponent,
        data: { title: 'Actualizar cultivo' }
      },
      {
        path: 'borrar-cultivo/:id',
        component: BorrarCultivoComponent,
        data: { title: 'Borrar cultivo' }
      },
      {
        path: 'sensor',
        component: SensorComponent,
        data: { title: 'Sensor', expectedRole: 'administrador' }, canActivate: [RolGuard]
      },
      {
        path: 'crear-sensor',
        component: CrearSensorComponent,
        data: { title: 'Crear Sensor', expectedRole: 'administrador' }, canActivate: [RolGuard]
      },
      {
        path: 'actualizar-sensor/:id',
        component: ActualizarSensorComponent,
        data: { title: 'Actualizar sensor' }
      },
      {
        path: 'borrar-sensor/:id',
        component: BorrarSensorComponent,
        data: { title: 'Borrar sensor' }
      },
      {
        path: 'default',
        component: DefaultComponent,
        data: { title: 'Default' }
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' },
      },
      
      {
        path: 'monitoreo',
        component: AnalyticsComponent,
        data: { title: 'Analytics' }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
