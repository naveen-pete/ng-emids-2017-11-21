/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  template: `
    <p id="p1" highlight="cyan">First</p>
    <p id="p2" highlight>Second</p>
  `
})
class DirectiveHostComponent {}

xdescribe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DirectiveHostComponent, HighlightDirective]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
    const de = fixture.debugElement.query(By.css('#p1'));

    const el: HTMLElement = de.nativeElement;
    expect(el.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with default color', () => {
    const de = fixture.debugElement.query(By.css('#p2'));
    const el: HTMLElement = de.nativeElement;
    const directive = de.injector.get(HighlightDirective);

    expect(el.style.backgroundColor).toBe(directive.defaultColor);
  });
});
