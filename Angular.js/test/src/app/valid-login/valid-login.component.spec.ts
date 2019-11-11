import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidLoginComponent } from './valid-login.component';

describe('ValidLoginComponent', () => {
  let component: ValidLoginComponent;
  let fixture: ComponentFixture<ValidLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
