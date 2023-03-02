import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishOverviewComponent } from './finish-overview.component';

describe('FinishOverviewComponent', () => {
  let component: FinishOverviewComponent;
  let fixture: ComponentFixture<FinishOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
