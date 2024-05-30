import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatServicesComponent } from './creat-services.component';

describe('CreatServicesComponent', () => {
  let component: CreatServicesComponent;
  let fixture: ComponentFixture<CreatServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatServicesComponent]
    });
    fixture = TestBed.createComponent(CreatServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
