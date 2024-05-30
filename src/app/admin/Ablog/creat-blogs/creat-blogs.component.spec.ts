import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBlogsComponent } from './creat-blogs.component';

describe('CreatBlogsComponent', () => {
  let component: CreatBlogsComponent;
  let fixture: ComponentFixture<CreatBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatBlogsComponent]
    });
    fixture = TestBed.createComponent(CreatBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
