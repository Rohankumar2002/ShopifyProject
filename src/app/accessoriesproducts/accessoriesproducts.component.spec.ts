import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesproductsComponent } from './accessoriesproducts.component';

describe('AccessoriesproductsComponent', () => {
  let component: AccessoriesproductsComponent;
  let fixture: ComponentFixture<AccessoriesproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
