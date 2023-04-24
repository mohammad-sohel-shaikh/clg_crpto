import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangemarketComponent } from './exchangemarket.component';

describe('ExchangemarketComponent', () => {
  let component: ExchangemarketComponent;
  let fixture: ComponentFixture<ExchangemarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangemarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangemarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
