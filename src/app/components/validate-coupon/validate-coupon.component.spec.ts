import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCouponComponent } from './validate-coupon.component';

describe('ValidateCouponComponent', () => {
  let component: ValidateCouponComponent;
  let fixture: ComponentFixture<ValidateCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
