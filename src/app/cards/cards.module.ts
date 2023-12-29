import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TooltipModule } from 'primeng/tooltip';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, TooltipModule, QRCodeModule],
  exports: [CardComponent],
})
export class CardsModule {}
