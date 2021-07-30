import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalItemComponent } from './kcal-item.component';

describe('KcalItemComponent', () => {
  let component: KcalItemComponent;
  let fixture: ComponentFixture<KcalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
