import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LibraryManagement';
  onClick(){
    alert('Welcome Dharmendra');
  }
  public selectLanguage(event: any){
    
  }
}
