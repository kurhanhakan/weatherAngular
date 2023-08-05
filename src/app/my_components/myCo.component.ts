import { Component } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from './weather.service';


@Component({
    selector : 'my-component',
    templateUrl: 'weather.component.html',
    styleUrls:['./weatherStyle.component.css']

})

export class MyComponent {
    pageTitle: string = "This is test page";
    weatherData: Weather | undefined;
    errorMessage: string = '';
    cityName: String = 'London';


    constructor(private weatherService: WeatherService) {

    }

    ngOnInit(): void {
        this.getWeatherDate();
    }
    getWeatherDate(): void {
        this.weatherService.getWeatherData(this.cityName).subscribe(
            (data: Weather) => {
                this.weatherData = data;
            },
            (error) => {
                this.errorMessage = "We get an error here";
            }
        );  
    }
}