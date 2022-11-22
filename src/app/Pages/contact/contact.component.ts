import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  _servicesObj: ServicesService;

  constructor(_servicesObjRef: ServicesService) {
    this._servicesObj = _servicesObjRef;
  }

  ngOnInit(): void {
  }

}
