import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountryDataApiService } from './country-data-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries';

  constructor(private cdas: CountryDataApiService, private router: Router){}

  searchForCountry(){
    let search: string = (<HTMLInputElement>document.getElementById("countrySearch")).value;
    console.log(search);
    this.cdas.selectedCountry = search;
    this.router.navigate(['/detail']);
  }
}
