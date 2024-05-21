import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FreelancerspageComponent } from './freelancerspage.component';
import { User } from '../user';

describe('FreelancerspageComponent', () => {
  let component: FreelancerspageComponent;
  let fixture: ComponentFixture<FreelancerspageComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FreelancerspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelancerspageComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load freelancers on init', () => {
    const mockFreelancers: User[] = [
      { name: 'JohnDoe', password: 'password123', email: 'john@example.com', job: 'Developer', phone: '123456789', picture: 'profile.jpg', userCode: 'USER123', accountType: true },
      { name: 'JaneDoe', password: 'password123', email: 'jane@example.com', job: 'Designer', phone: '987654321', picture: 'profile2.jpg', userCode: 'USER456', accountType: true }
    ];

    const req = httpMock.expectOne('http://localhost:8080/afp2API/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockFreelancers);

    expect(component.freelancers).toEqual(mockFreelancers);
  });

  it('should handle empty freelancers list', () => {
    const mockFreelancers: User[] = [];

    const req = httpMock.expectOne('http://localhost:8080/afp2API/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockFreelancers);

    expect(component.freelancers).toEqual(mockFreelancers);
  });
});
