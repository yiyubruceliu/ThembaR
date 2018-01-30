import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  partners = [
    {address: 'Test 1', viewValue: 'One'},
    {address: 'Test 2', viewValue: 'Two'},
    {address: 'Test 3', viewValue: 'Three'}
  ];
  selection = 1;
}
