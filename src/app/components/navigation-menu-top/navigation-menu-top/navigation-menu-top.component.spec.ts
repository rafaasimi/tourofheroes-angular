import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuTopComponent } from './navigation-menu-top.component';

describe('NavigationMenuTopComponent', () => {
  let component: NavigationMenuTopComponent;
  let fixture: ComponentFixture<NavigationMenuTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationMenuTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
