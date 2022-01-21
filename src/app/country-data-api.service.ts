import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryDataApiService {

  urlBase: string = "https://restcountries.com/v3.1/name/";
  selectedCountry?: string;
  
  constructor(private http: HttpClient) { }

  GetCountryInfo(country: string): Observable<any> {
    let fullUrl = `${this.urlBase}${country}`;
    let result: Observable<any> = this.http.get(fullUrl);
    console.log(result);
    return result;
  }
}
