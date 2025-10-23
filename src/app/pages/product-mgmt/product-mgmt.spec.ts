import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMgmt } from './product-mgmt';

describe('ProductMgmt', () => {
  let component: ProductMgmt;
  let fixture: ComponentFixture<ProductMgmt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMgmt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMgmt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
