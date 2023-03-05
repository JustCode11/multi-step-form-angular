import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { PersonalInfo } from 'src/app/models/personal-info';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  @Input() step: number = 1;
  @Output() stepEvent = new EventEmitter<number>();
  @Input() model: PersonalInfo = new PersonalInfo("", "", "", "arcade", []);
  @Output() modelEvent = new EventEmitter<PersonalInfo>();
  personalForm: FormGroup;

  ngOnInit() {
    this.personalForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.containNumbers, Validators.maxLength(35)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(15), Validators.minLength(8), this.containCharacters])
    });

    this.personalForm.setValue({
      name: this.model.name,
      email: this.model.email,
      phone: this.model.phone
    });
  }

  changeStep(value: number): void {
    this.stepEvent.emit(value);
  }

  changeModel(value: PersonalInfo): void {
    this.modelEvent.emit(value);
  }

  containNumbers(control: FormControl) {
    let checkForNumbers = /\d/;
    return checkForNumbers.test(control.value) ? { containNumbers: true } : null;
  }

  containCharacters(control: FormControl) {
    let checkForChars = /\D+/;
    return checkForChars.test(control.value) ? { containCharacters: true } : null;
  }

  onSubmit(): void {
    console.log(this.personalForm.get('name'));
    this.model.name = this.personalForm.get('name').value;
    this.model.email = this.personalForm.get('email').value;
    this.model.phone = this.personalForm.get('phone').value;
    this.changeStep(2);
    this.changeModel(this.model);
  }
}
