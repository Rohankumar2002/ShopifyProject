import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenproductlistComponent } from './womenproductlist.component';

describe('WomenproductlistComponent', () => {
  let component: WomenproductlistComponent;
  let fixture: ComponentFixture<WomenproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
