import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  _servicesObj: ServicesService;

  constructor(_servicesObjRef: ServicesService) {
    this._servicesObj = _servicesObjRef;
  }

  ngOnInit(): void {
  }

}
