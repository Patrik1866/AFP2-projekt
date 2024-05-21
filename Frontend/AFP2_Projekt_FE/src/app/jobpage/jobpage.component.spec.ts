import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JobpageComponent } from './jobpage.component';

describe('JobpageComponent', () => {
  let component: JobpageComponent;
  let fixture: ComponentFixture<JobpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,JobpageComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the jobpage component', () => {
    expect(component).toBeTruthy();
  });
});
