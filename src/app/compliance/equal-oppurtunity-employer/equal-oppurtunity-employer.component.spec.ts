import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualOppurtunityEmployerComponent } from './equal-oppurtunity-employer.component';

describe('EqualOppurtunityEmployerComponent', () => {
  let component: EqualOppurtunityEmployerComponent;
  let fixture: ComponentFixture<EqualOppurtunityEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EqualOppurtunityEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EqualOppurtunityEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
