import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { MotherComponent } from './mother/mother.component';
import { FatherComponent } from './father/father.component';
import {GfatherComponent} from './gfather/gfather.component';
import {GmotherComponent} from './gMOther/gmother.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes:Routes=[
{
    path:'',
    redirectTo: '/mother', pathMatch: 'full'
},
{
    path:'mother',
    component: MotherComponent
},
{
    path:'grandmother',
    component: GmotherComponent
},
{
    path:'father',
    component: FatherComponent
},
{
    path:'grandfather',
    component: GfatherComponent
},
{
    path:'**',
    component: PageNotFoundComponent
}
];
 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })
 
 export class AppRoutingModule{}
 export const routingComponents = [MotherComponent,
     FatherComponent,
      PageNotFoundComponent,
      GmotherComponent,
      GfatherComponent]