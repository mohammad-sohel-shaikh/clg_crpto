import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangerecordComponent } from './exchangerecord.component';

describe('ExchangerecordComponent', () => {
  let component: ExchangerecordComponent;
  let fixture: ComponentFixture<ExchangerecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangerecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
