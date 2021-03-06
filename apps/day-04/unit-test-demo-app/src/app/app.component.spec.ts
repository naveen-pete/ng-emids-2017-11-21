import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

xdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, NavComponent],
        imports: [RouterTestingModule.withRoutes([])],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should have a router outlet',
    async(() => {
      let de = fixture.debugElement.query(By.directive(RouterOutlet));
      expect(de).not.toBeNull();
    })
  );
});
