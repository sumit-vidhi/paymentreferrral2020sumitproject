import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.scss']
})
export class PaymentSettingsComponent implements OnInit {

  paymentTypeSelect = 'stripe';

  constructor() { }

  ngOnInit() {
  }

}
