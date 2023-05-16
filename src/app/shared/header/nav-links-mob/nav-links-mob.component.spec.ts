import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinksMobComponent } from './nav-links-mob.component';

describe('NavLinksMobComponent', () => {
  let component: NavLinksMobComponent;
  let fixture: ComponentFixture<NavLinksMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLinksMobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinksMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
