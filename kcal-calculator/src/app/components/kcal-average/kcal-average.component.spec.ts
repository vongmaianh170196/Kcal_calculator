import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalAverageComponent } from './kcal-average.component';

describe('KcalAverageComponent', () => {
  let component: KcalAverageComponent;
  let fixture: ComponentFixture<KcalAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcalAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
