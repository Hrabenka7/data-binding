import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]' // needs to be the same name as Input setter
})
export class UnlessStructuralDirectiveDirective {

  // whenever input param changes, execute method, needs setter
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // need access to the template and the place in the document where it will be rendered
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}


