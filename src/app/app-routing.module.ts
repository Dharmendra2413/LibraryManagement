import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CityComponent } from './city/city.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NeighbourhoodComponent } from './neighbourhood/neighbourhood.component';
import { OliveResidencesComponent } from './newcondos/olive-residences/olive-residences/olive-residences.component';
import { ResaleComponent } from './resale/resale.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'map',component:MapComponent},
  {path:'search',component:SearchComponent},
  {path:'Resale',component:ResaleComponent},
  {path:'Assignment',component:AssignmentComponent},
  {path:'City',component:CityComponent},
  {path:'neighbourhood',component:NeighbourhoodComponent},
  {path:'Contact',component:ContactComponent},
  {path:'olive-residence', component:OliveResidencesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
