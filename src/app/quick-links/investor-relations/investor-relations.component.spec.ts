import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorRelationsComponent } from './investor-relations.component';

describe('InvestorRelationsComponent', () => {
  let component: InvestorRelationsComponent;
  let fixture: ComponentFixture<InvestorRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestorRelationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
