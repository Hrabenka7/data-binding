import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  constructor( private elementOfDirective: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousenenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementOfDirective.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementOfDirective.nativeElement, 'background-color', 'transparent');
  }

  ngOnInit() {
    this.elementOfDirective.nativeElement.style.backgroundColor = 'pink';
  }
}

