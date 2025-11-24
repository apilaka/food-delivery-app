import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCatelogueComponent } from './food-catelogue.component';

describe('FoodCatelogueComponent', () => {
  let component: FoodCatelogueComponent;
  let fixture: ComponentFixture<FoodCatelogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCatelogueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
