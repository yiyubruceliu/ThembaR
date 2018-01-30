import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { 
    

    
  }
  
  company: CompanyObj = { 
    name: "",
    loyalty: "",
    unit: "",
    symbol: "",
    logo: ""
  };

  ngOnInit() {
    
  }

}

interface CompanyObj {
  name: string;
  loyalty: string;
  unit: string;
  symbol: string;
  logo: string;
}
