import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn-points',
  templateUrl: './earn-points.component.html',
  styleUrls: ['./earn-points.component.css']
})
export class EarnPointsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  partners = [
    {address: 'Test 1', viewValue: 'Harry Salon'},
    {address: 'Test 2', viewValue: 'Max Weeves'},
    {address: 'Test 3', viewValue: 'Three'}
  ];
  selection = 3;

  customers = [
    {address: 'Tom', viewValue: 'Biggus Dickus'},
    {address: 'Dick', viewValue: 'Bruce Lee'},
    {address: 'Harry', viewValue: 'Harry Potter'}
  ];
  custSelection = 3;
}
