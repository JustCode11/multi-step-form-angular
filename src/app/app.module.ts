import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { AddOnsComponent } from './components/add-ons/add-ons.component';
import { FinishOverviewComponent } from './components/finish-overview/finish-overview.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    FinishOverviewComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
