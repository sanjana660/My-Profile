import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _servicesObj: ServicesService;

  constructor(_servicesObjRef: ServicesService) {
    this._servicesObj = _servicesObjRef;
  }

  ngOnInit(): void {
  }

}
