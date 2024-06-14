import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoNotSellMyInfoComponent } from './do-not-sell-my-info.component';

describe('DoNotSellMyInfoComponent', () => {
  let component: DoNotSellMyInfoComponent;
  let fixture: ComponentFixture<DoNotSellMyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoNotSellMyInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoNotSellMyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
