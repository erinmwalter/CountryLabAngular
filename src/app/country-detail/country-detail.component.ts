import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../Country';
import { CountryDataApiService } from '../country-data-api.service';
import { CountryService } from '../country.service';
import { CountryData, Convert } from '../CountryData';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  constructor(private router: Router, private cServ: CountryService, private cAPI: CountryDataApiService) { }
  selectedCountry?: CountryData[];

  ngOnInit(): void {
    this.getCountry();
  }

  goBack(): void {
      this.router.navigate(['/list']);
  }

  getCountry(){
    let country: any = this.cAPI.selectedCountry;
    this.cAPI.GetCountryInfo(country).subscribe(
      (response:any) => {
        console.log(response);
        let countryjson = Convert.countryDataToJson(response);
        let returnedCountry = Convert.toCountryData(countryjson);
        this.selectedCountry = returnedCountry;
      }
    )
  }
}
