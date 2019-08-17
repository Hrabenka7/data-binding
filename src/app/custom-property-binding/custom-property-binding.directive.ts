import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomPropertyBinding]'
})

export class CustomPropertyBindingDirective implements OnInit {

  constructor() { }

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}

