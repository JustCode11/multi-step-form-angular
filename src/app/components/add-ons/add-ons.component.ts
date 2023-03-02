import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent {
  @Input() period: boolean = false;
  @Input() step: number = 1;
  @Input() addOns: boolean[] = [];
  @Output() stepEvent = new EventEmitter<number>();
  @Output() addOnsEvent = new EventEmitter<boolean[]>();
  monthlyPrices: string[] = ["+$1/mo", "+$2/mo", "+$2/mo"];
  yearlyPrices: string[] = ["+$10/yr", "+$20/yr", "+$20/yr"];

  changeStep(value: number): void {
    this.stepEvent.emit(value);
  }

  changeAddOns(value: boolean[]): void {
    this.addOnsEvent.emit(value);
  }

  goBack(): void {
    this.changeStep(2);
    this.changeAddOns(this.addOns);
  }

  onSubmit(): void {
    this.changeStep(4);
    this.changeAddOns(this.addOns);
  }
}
