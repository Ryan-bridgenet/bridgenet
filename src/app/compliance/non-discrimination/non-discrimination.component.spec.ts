import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDiscriminationComponent } from './non-discrimination.component';

describe('NonDiscriminationComponent', () => {
  let component: NonDiscriminationComponent;
  let fixture: ComponentFixture<NonDiscriminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonDiscriminationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonDiscriminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
