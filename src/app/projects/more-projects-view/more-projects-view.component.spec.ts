import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProjectsViewComponent } from './more-projects-view.component';

describe('MoreProjectsViewComponent', () => {
  let component: MoreProjectsViewComponent;
  let fixture: ComponentFixture<MoreProjectsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreProjectsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
