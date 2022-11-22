import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  _servicesObj: ServicesService;

  constructor(_servicesObjRef: ServicesService) {
    this._servicesObj = _servicesObjRef;
  }

  ngOnInit(): void {
  }

}
