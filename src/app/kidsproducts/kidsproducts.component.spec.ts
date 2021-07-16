import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsproductsComponent } from './kidsproducts.component';

describe('KidsproductsComponent', () => {
  let component: KidsproductsComponent;
  let fixture: ComponentFixture<KidsproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
