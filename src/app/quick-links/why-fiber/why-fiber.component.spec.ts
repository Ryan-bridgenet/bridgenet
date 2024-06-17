import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFiberComponent } from './why-fiber.component';

describe('WhyFiberComponent', () => {
  let component: WhyFiberComponent;
  let fixture: ComponentFixture<WhyFiberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyFiberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
