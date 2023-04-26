import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketrecordComponent } from './marketrecord.component';

describe('MarketrecordComponent', () => {
  let component: MarketrecordComponent;
  let fixture: ComponentFixture<MarketrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
