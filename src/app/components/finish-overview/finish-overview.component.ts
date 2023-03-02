import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { PersonalInfo } from 'src/app/models/personal-info';

@Component({
  selector: 'app-finish-overview',
  templateUrl: './finish-overview.component.html',
  styleUrls: ['./finish-overview.component.scss']
})
export class FinishOverviewComponent implements OnInit {
  @Input() step: number = 1;
  @Input() period: boolean = false;
  @Input() model: PersonalInfo;
  @Output() stepEvent = new EventEmitter<number>();
  @Output() changePeriod = new EventEmitter();

  monthlyPlanPrices: number[] = [9, 12, 12];
  yearlyPlanPrices: number[] = [90, 120, 150];
  monthlyAddOnsPrices: number[] = [1, 2, 2];
  yearlyAddOnsPrices: number[] = [10, 20, 20];
  totalPrice: number = 0;

  calculateTotalPrice(period: boolean): void {
    this.totalPrice = 0;
    if (period) {
      switch (this.model.plan) {
        case 'arcade':
          this.totalPrice += this.yearlyPlanPrices[0];
          break;
        case 'advanced':
          this.totalPrice += this.yearlyPlanPrices[1];
          break;
        case 'pro':
          this.totalPrice += this.yearlyPlanPrices[2];
          break;
        default:
          break;
      }
      this.model.addOns.map((addOn, index) => addOn ? this.totalPrice += this.yearlyAddOnsPrices[index] : 0);
    } else {
      switch (this.model.plan) {
        case 'arcade':
          this.totalPrice += this.monthlyPlanPrices[0];
          break;
        case 'advanced':
          this.totalPrice += this.monthlyPlanPrices[1];
          break;
        case 'pro':
          this.totalPrice += this.monthlyPlanPrices[2];
          break;
        default:
          break;
      }
      this.model.addOns.map((addOn, index) => addOn ? this.totalPrice += this.monthlyAddOnsPrices[index] : 0);
    }
  }

  changeStep(value: number): void {
    this.stepEvent.emit(value);
  }

  onChangePeriod(): void {
    this.changePeriod.emit();
    this.calculateTotalPrice(!this.period);
  }

  goBack(): void {
    this.changeStep(3);
  }

  onConfirm(): void {
    this.changeStep(5);
  }

  ngOnInit(): void {
    this.calculateTotalPrice(this.period);
  }
}
