import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsproductlistComponent } from './kidsproductlist.component';

describe('KidsproductlistComponent', () => {
  let component: KidsproductlistComponent;
  let fixture: ComponentFixture<KidsproductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsproductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
