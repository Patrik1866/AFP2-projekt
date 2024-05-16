import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { User } from '../user';
import { Employer } from '../employer';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpMock: HttpTestingController;
  let router: Router;
  let alertSpy: jasmine.Spy;
  let localStorageSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), LoginComponent],
      providers: [Router]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  
    // Spy létrehozása a window.alert függvényre
    alertSpy = spyOn(window, 'alert');
    // Spy létrehozása a localStorage.setItem függvényre
    localStorageSpy = spyOn(localStorage, 'setItem');
  
    // HTTP kérések elkapása és hamis válaszok visszaadása
    const usersReq = httpMock.expectOne('http://localhost:8080/afp2API/users');
    usersReq.flush([]);
  
    const employersReq = httpMock.expectOne('http://localhost:8080/afp2API/employers');
    employersReq.flush([]);
  });
  

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login a user with valid credentials', () => {
    const mockUsers: User[] = [{ name: 'JohnDoe', password: 'password123', email: '', job: '', phone: '', picture: '', userCode: '', accountType: true }];
    const mockEmployers: Employer[] = [];

    component.users = mockUsers;
    component.employers = mockEmployers;

    spyOn(router, 'navigate');

    component.login(new Event('submit'), 'JohnDoe', 'password123');

    expect(alertSpy).toHaveBeenCalledWith('Login successful');
    expect(localStorageSpy).toHaveBeenCalledWith('user', JSON.stringify(mockUsers[0]));
    expect(router.navigate).toHaveBeenCalledWith(['/mainpage']);
  });

  it('should login an employer with valid credentials', () => {
    const mockUsers: User[] = [];
    const mockEmployers: Employer[] = [{ name: 'JaneDoe', password: 'password123', email: '', job: '', phone: '', picture: '', userCode: '', accountType: false }];

    component.users = mockUsers;
    component.employers = mockEmployers;

    spyOn(router, 'navigate');

    component.login(new Event('submit'), 'JaneDoe', 'password123');

    expect(alertSpy).toHaveBeenCalledWith('Login successful');
    expect(localStorageSpy).toHaveBeenCalledWith('user', JSON.stringify(mockEmployers[0]));
    expect(router.navigate).toHaveBeenCalledWith(['/mainpage']);
  });

  it('should alert on incorrect password', () => {
    const mockUsers: User[] = [{ name: 'JohnDoe', password: 'password123', email: '', job: '', phone: '', picture: '', userCode: '', accountType: true }];
    const mockEmployers: Employer[] = [];

    component.users = mockUsers;
    component.employers = mockEmployers;

    component.login(new Event('submit'), 'JohnDoe', 'wrongpassword');

    expect(alertSpy).toHaveBeenCalledWith('Incorrect password');
    expect(localStorageSpy).not.toHaveBeenCalled();
  });

  it('should alert on invalid credentials', () => {
    const mockUsers: User[] = [];
    const mockEmployers: Employer[] = [];

    component.users = mockUsers;
    component.employers = mockEmployers;

    component.login(new Event('submit'), 'NonExistentUser', 'password123');

    expect(alertSpy).toHaveBeenCalledWith('Invalid credentials');
    expect(localStorageSpy).not.toHaveBeenCalled();
  });
});
