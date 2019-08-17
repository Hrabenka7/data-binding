import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  constructor( private elementOfDirective: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementOfDirective.nativeElement, 'background-color', 'pink');
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementOfDirective.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

  ngOnInit() {
    // not a good practice to access and change elements directly
    // this.elementOfDirective.nativeElement.style.backgroundColor = 'pink';

    this.renderer.setStyle(this.elementOfDirective.nativeElement, 'background-color', 'pink');
  }
}

