import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Weather } from "./weather";

@Injectable({
    providedIn:'root'
})

export class WeatherService {
    private apiKey = ""
    private weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}`;

    constructor(private http: HttpClient) {

    }

    getWeatherData(cityName: String): Observable<Weather> {
        const apiUrl = `${this.weatherApiUrl}&q=${cityName}&aqi=no`
        return this.http.get<Weather>(apiUrl);

    }
}