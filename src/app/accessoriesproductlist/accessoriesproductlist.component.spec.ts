import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesproductlistComponent } from './accessoriesproductlist.component';

describe('AccessoriesproductlistComponent', () => {
  let component: AccessoriesproductlistComponent;
  let fixture: ComponentFixture<AccessoriesproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
