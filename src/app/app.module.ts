import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SearchComponent } from './search/search.component';
import { ResaleComponent } from './resale/resale.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CityComponent } from './city/city.component';
import { NeighbourhoodComponent } from './neighbourhood/neighbourhood.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { DialogMoreinfoComponent } from './dialog-moreinfo/dialog-moreinfo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SquarePipe,getdayPipe } from '../app/Utility/CustomPipes';
import { ListYourAssignmentComponent } from './list-your-assignment/list-your-assignment.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OliveResidencesComponent } from './newcondos/olive-residences/olive-residences/olive-residences.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    SearchComponent,
    ResaleComponent,
    AssignmentComponent,
    CityComponent,
    NeighbourhoodComponent,
    ContactComponent,
    MapComponent,
    DialogMoreinfoComponent,
    SquarePipe,
    getdayPipe,
    ListYourAssignmentComponent,
    OliveResidencesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatDialogModule,
    MatFormFieldModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoder,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function httpTranslateLoder(http: HttpClient){
  return new TranslateHttpLoader(http);
}

