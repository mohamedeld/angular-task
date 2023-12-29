import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  public myAngularxQrCode: string = '';
  // public qrCodeDownloadLink: SafeUrl = "";
  constructor() {
    this.myAngularxQrCode = 'angularFramework';
  }
}
