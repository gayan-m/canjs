import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { devrant } from './models/devrant';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
	
	private _url: string = "https://api.devrant.thusitha.site/v1/post.list";
	constructor(private http: HttpClient){

	}

	getData(){
		return this.http.get(this._url); 
	}
  	title = "Eyepax JavaScript Hackathon";
}