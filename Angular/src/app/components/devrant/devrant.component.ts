import { Component, OnInit } from '@angular/core';
import { devrant } from '../../models/devrant'; 

@Component({
  selector: 'app-devrant',
  templateUrl: './devrant.component.html',
  styleUrls: ['./devrant.component.css']
})
export class DevrantComponent implements OnInit {
	credentials:devrant[];
	
  constructor() { }

  ngOnInit() {
  	this.credentials = [
  		{
  			username: 'bhanuka',
  			password: 'bp123'
  		},
  		{
  			username: 'prasad',
  			password: 'prasad123'
  		},
  		{
  			username: 'johndoe',
  			password: 'doe123'
  		}

  	]
  }

}
