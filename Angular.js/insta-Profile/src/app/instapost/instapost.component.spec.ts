import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstapostComponent } from './instapost.component';

describe('InstapostComponent', () => {
  let component: InstapostComponent;
  let fixture: ComponentFixture<InstapostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstapostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
