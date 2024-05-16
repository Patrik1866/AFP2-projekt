import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { Employer } from '../employer';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpMock: HttpTestingController;
  let alertSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, RegisterComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    // Spy létrehozása a window.alert függvényre
    alertSpy = spyOn(window, 'alert');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register a new user with valid data', () => {
    const mockUser: User = {
      name: 'JohnDoe',
      password: 'password123',
      email: 'john@example.com',
      job: 'Developer',
      phone: '123456789',
      picture: 'profile.jpg',
      userCode: 'USER123',
      accountType: true
    };

    component.register(
      new Event('submit'),
      'JohnDoe',
      'password123',
      'john@example.com',
      'Developer',
      '123456789',
      'profile.jpg',
      'USER123',
      true,
      false
    );

    const req = httpMock.expectOne('http://localhost:8080/afp2API/users');
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);

    expect(alertSpy).toHaveBeenCalledWith('User registered successfully');
  });

  it('should alert on invalid password', () => {
    component.register(
      new Event('submit'),
      'JohnDoe',
      '1234',
      'john@example.com',
      'Developer',
      '123456789',
      'profile.jpg',
      'USER123',
      true,
      false
    );

    expect(alertSpy).toHaveBeenCalledWith('Invalid password');
  });

  it('should alert on invalid name', () => {
    component.register(
      new Event('submit'),
      'Jon',
      'password123',
      'john@example.com',
      'Developer',
      '123456789',
      'profile.jpg',
      'USER123',
      true,
      false
    );

    expect(alertSpy).toHaveBeenCalledWith('Wrong format for the name');
  });

  it('should register a new employer with valid data', () => {
    const mockEmployer: Employer = {
      name: 'JohnDoe',
      password: 'password123',
      email: 'john@example.com',
      job: 'Developer',
      phone: '123456789',
      picture: 'profile.jpg',
      userCode: 'EMPLOYER123',
      accountType: false
    };

    component.register(
      new Event('submit'),
      'JohnDoe',
      'password123',
      'john@example.com',
      'Developer',
      '123456789',
      'profile.jpg',
      'EMPLOYER123',
      false,
      true
    );

    const req = httpMock.expectOne('http://localhost:8080/afp2API/employers');
    expect(req.request.method).toBe('POST');
    req.flush(mockEmployer);

    expect(alertSpy).toHaveBeenCalledWith('Employer registered successfully');
  });

  afterEach(() => {
    httpMock.verify();
  });
});
