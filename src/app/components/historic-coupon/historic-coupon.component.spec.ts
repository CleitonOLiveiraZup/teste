import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricCouponComponent } from './historic-coupon.component';

describe('HistoricCouponComponent', () => {
  let component: HistoricCouponComponent;
  let fixture: ComponentFixture<HistoricCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
