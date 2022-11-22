import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  _servicesObj: ServicesService;

  constructor(_servicesObjRef: ServicesService) {
    this._servicesObj = _servicesObjRef;
  }

  ngOnInit(): void {
  }

}
