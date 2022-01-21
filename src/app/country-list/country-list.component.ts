import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../Country';
import { CountryService } from '../country.service'; 
import { CountryDataApiService } from '../country-data-api.service';
import { CountryData } from '../CountryData';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  Countries: Country[] = this.cServ.getCountries();
  selectedCountry?: Country;

  constructor(private cServ: CountryService, private router: Router, private cdas: CountryDataApiService) { }

  ngOnInit(): void {
    console.log(this.Countries);
  }


  onSelect(country: Country): void {
    this.cServ.selectedCountry = country;
    this.cdas.selectedCountry = country.name;
    this.router.navigate(['/detail']);
  }

}
