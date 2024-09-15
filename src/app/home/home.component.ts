import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';
  selectedRegion: string = '';
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; // Add more regions as needed
  countries = [
    {
      id: 1,
      name: 'Germany',
      flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
      population: 83783942,
      region: 'Europe',
      subRegion: 'Western Europe',
      capital: 'Berlin',
      topLevelDomain: '.de',
      currencies: 'Euro',
      languages: 'German',
      nativeName: 'Deutschland',
      borderCountries: ['Denmark', 'Poland', 'Czech Republic', 'Austria', 'Switzerland', 'France', 'Luxembourg', 'Belgium', 'Netherlands']
    },
    {
      id: 2,
      name: 'Brazil',
      flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
      population: 212559417,
      region: 'Americas',
      subRegion: 'South America',
      capital: 'Brasília',
      topLevelDomain: '.br',
      currencies: 'Brazilian Real',
      languages: 'Portuguese',
      nativeName: 'Brasil',
      borderCountries: ['Argentina', 'Bolivia', 'Colombia', 'Guyana', 'Paraguay', 'Peru', 'Suriname', 'Uruguay', 'Venezuela']
    },
    {
      id: 3,
      name: 'Canada',
      flag: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
      population: 37742154,
      region: 'Americas',
      subRegion: 'Northern America',
      capital: 'Ottawa',
      topLevelDomain: '.ca',
      currencies: 'Canadian Dollar',
      languages: 'English, French',
      nativeName: 'Canada',
      borderCountries: ['United States']
    },
    {
      id: 4,
      name: 'Australia',
      flag: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg',
      population: 25409300,
      region: 'Oceania',
      subRegion: 'Australia and New Zealand',
      capital: 'Canberra',
      topLevelDomain: '.au',
      currencies: 'Australian Dollar',
      languages: 'English',
      nativeName: 'Australia',
      borderCountries: []
    },
    {
      id: 5,
      name: 'Japan',
      flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
      population: 126476461,
      region: 'Asia',
      subRegion: 'Eastern Asia',
      capital: 'Tokyo',
      topLevelDomain: '.jp',
      currencies: 'Japanese Yen',
      languages: 'Japanese',
      nativeName: '日本',
      borderCountries: []
    },
    {
      id: 6,
      name: 'South Africa',
      flag: 'https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg',
      population: 59308690,
      region: 'Africa',
      subRegion: 'Southern Africa',
      capital: 'Pretoria (administrative), Bloemfontein (judicial), Cape Town (legislative)',
      topLevelDomain: '.za',
      currencies: 'South African Rand',
      languages: '11 official languages including Afrikaans, English, isiZulu',
      nativeName: 'South Africa',
      borderCountries: ['Botswana', 'Lesotho', 'Mozambique', 'Namibia', 'Swaziland', 'Zimbabwe']
    },
    {
      id: 7,
      name: 'France',
      flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
      population: 65273511,
      region: 'Europe',
      subRegion: 'Western Europe',
      capital: 'Paris',
      topLevelDomain: '.fr',
      currencies: 'Euro',
      languages: 'French',
      nativeName: 'France',
      borderCountries: ['Andorra', 'Belgium', 'Luxembourg', 'Germany', 'Switzerland', 'Italy', 'Monaco', 'Spain']
    },
    {
      id: 8,
      name: 'India',
      flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
      population: 1380004385,
      region: 'Asia',
      subRegion: 'Southern Asia',
      capital: 'New Delhi',
      topLevelDomain: '.in',
      currencies: 'Indian Rupee',
      languages: 'Hindi, English',
      nativeName: 'भारत',
      borderCountries: ['Bangladesh', 'Bhutan', 'China', 'Myanmar', 'Nepal', 'Pakistan']
    },
    {
      id: 9,
      name: 'Mexico',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png',
      population: 128932753,
      region: 'Americas',
      subRegion: 'Central America',
      capital: 'Mexico City',
      topLevelDomain: '.mx',
      currencies: 'Mexican Peso',
      languages: 'Spanish',
      nativeName: 'México',
      borderCountries: ['Belize', 'Guatemala', 'United States', 'Honduras', 'El Salvador']
    },
    {
      id: 10,
      name: 'Russia',
      flag: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
      population: 145912025,
      region: 'Europe',
      subRegion: 'Eastern Europe',
      capital: 'Moscow',
      topLevelDomain: '.ru',
      currencies: 'Russian Ruble',
      languages: 'Russian',
      nativeName: 'Россия',
      borderCountries: ['Azerbaijan', 'Belarus', 'China', 'Estonia', 'Finland', 'Georgia', 'Kazakhstan', 'Latvia', 'Lithuania', 'Mongolia', 'Norway', 'Poland', 'Ukraine']
    }
  ];
  

  constructor(private router: Router) {}

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }


  goToCountryDetail(country: any) {
    this.router.navigate(['/detail'], { queryParams: { id: country.id } });
  }
  filteredCountries = this.countries;
  filterCountries() {
    this.filteredCountries = this.countries.filter(country => {
      const matchesName = country.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesRegion = this.selectedRegion ? country.region === this.selectedRegion : true;
      return matchesName && matchesRegion;
    });
  }
}
