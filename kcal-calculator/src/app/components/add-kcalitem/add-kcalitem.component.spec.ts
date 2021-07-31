import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKcalitemComponent } from './add-kcalitem.component';

describe('AddKcalitemComponent', () => {
  let component: AddKcalitemComponent;
  let fixture: ComponentFixture<AddKcalitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKcalitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKcalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
