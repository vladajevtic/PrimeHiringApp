import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeveloperComponent } from './create-developer.component';

describe('CreateDeveloperComponent', () => {
  let component: CreateDeveloperComponent;
  let fixture: ComponentFixture<CreateDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
