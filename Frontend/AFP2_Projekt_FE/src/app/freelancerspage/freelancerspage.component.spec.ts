import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerspageComponent } from './freelancerspage.component';

describe('FreelancerspageComponent', () => {
  let component: FreelancerspageComponent;
  let fixture: ComponentFixture<FreelancerspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelancerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
