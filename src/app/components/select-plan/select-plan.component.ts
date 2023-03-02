import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonalInfo } from 'src/app/models/personal-info';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {
  @Input() period: boolean = false;
  @Input() step: number = 1;
  @Input() plan: string = "arcade";
  @Output() stepEvent = new EventEmitter<number>();
  @Output() planEvent = new EventEmitter<string>();
  @Output() changePeriod = new EventEmitter();

  toggleAnimation: number = 0;
  monthlyPrices: string[] = ["$9/mo", "$12/mo", "$12/mo"];
  yearlyPrices: string[] = ["$90/yr", "$120/yr", "$150/yr"];

  onChangePeriod(): void {
    if (this.period) {
      this.toggleAnimation = 2;
    } else {
      this.toggleAnimation = 1;
    }
    this.changePeriod.emit();
  }

  changeStep(value: number): void {
    this.stepEvent.emit(value);
  }

  changePlan(value: string): void {
    this.planEvent.emit(value);
  }

  goBack(): void {
    this.changeStep(1);
    this.changePlan(this.plan);
  }

  onSubmit(): void {
    this.changeStep(3);
    //this.changeModel(this.model);
    this.changePlan(this.plan);
  }
}
