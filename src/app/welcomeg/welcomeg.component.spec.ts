import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomegComponent } from './welcomeg.component';

describe('WelcomegComponent', () => {
  let component: WelcomegComponent;
  let fixture: ComponentFixture<WelcomegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
