import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KcalItemsComponent } from './kcal-items.component';

describe('KcalItemsComponent', () => {
  let component: KcalItemsComponent;
  let fixture: ComponentFixture<KcalItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KcalItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
