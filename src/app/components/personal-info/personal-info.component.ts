import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { PersonalInfo } from 'src/app/models/personal-info';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  @Input() step: number = 1;
  @Output() stepEvent = new EventEmitter<number>();
  @Input() model: PersonalInfo = new PersonalInfo("", "", "", "arcade", []);
  @Output() modelEvent = new EventEmitter<PersonalInfo>();

  changeStep(value: number): void {
    this.stepEvent.emit(value);
  }

  changeModel(value: PersonalInfo): void {
    this.modelEvent.emit(value);
  }

  onSubmit(email: NgModel): void {
    console.log(email);
    this.changeStep(2);
    this.changeModel(this.model);
  }
}
