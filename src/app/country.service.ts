import { Injectable } from '@angular/core';
import { Country } from './Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  selectedCountry: any;
  Countries: Country[] = [
    {
        id: 1,
        name: 'USA',
        language: 'English',
        colors: ['white', '#b22234', '#3c3b6e'] 
    },
    {
        id: 2,
        name: 'Finland',
        language: 'Finnish and Swedish',
        colors: ['white', '#003580']
    },
    {
        id: 3,
        name: 'Mexico',
        language: 'Spanish',
        colors: ['white', '#cd202a', '#016848']
    },
    {
        id: 4,
        name: 'Sweden',
        language: 'Swedish',
        colors: ['#FFec00', '#006aa7']
    },
    {
      id: 5,
      name: 'Australia',
      language: 'English',
      colors: ['#012169', 'white', '#E4002B']
  }
];
  constructor() { }

  getCountries(): Country[]
  {
      return this.Countries;
  }

  addCountry(newCountry: Country): void{

      this.Countries.push(newCountry);
  }

  editCountry(countryEdited: Country) :void 
  {
      let index = this.getById(countryEdited.id);
      this.Countries[index] = countryEdited;
  }

  getById(id: number): number {
      for(let i=0; i < this.Countries.length; i++){
          if(this.Countries[i].id === id){
              return i;
          }
      }
      return -1;
  }
}
