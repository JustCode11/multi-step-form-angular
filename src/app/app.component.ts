import { Component } from '@angular/core';

import { PersonalInfo } from './models/personal-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step: number = 1;
  period: boolean = false;
  model = new PersonalInfo("", "", "", "arcade", []);
  plan: string = "arcade";
  addOns: boolean[] = [false, false, false];

  onChangePeriod(): void {
    this.period = !this.period;
  }

  onChangeStep(eventData: number): void {
    this.step = eventData;
  }

  onChangeModel(eventData: PersonalInfo): void {
    this.model = eventData;
  }

  addPlanToModel(eventData: string): void {
    this.plan = eventData;
    this.model.plan = eventData;
  }

  addAddOnsToModel(eventData: boolean[]): void {
    this.addOns = eventData;
    this.model.addOns = eventData;
  }
}
