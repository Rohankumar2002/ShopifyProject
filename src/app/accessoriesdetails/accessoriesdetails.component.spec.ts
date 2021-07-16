import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesdetailsComponent } from './accessoriesdetails.component';

describe('AccessoriesdetailsComponent', () => {
  let component: AccessoriesdetailsComponent;
  let fixture: ComponentFixture<AccessoriesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
