import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenproductlistComponent } from './menproductlist.component';

describe('MenproductlistComponent', () => {
  let component: MenproductlistComponent;
  let fixture: ComponentFixture<MenproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
