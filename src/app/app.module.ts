import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { CustomPropertyBindingDirective } from './custom-property-binding/custom-property-binding.directive';
import { UnlessStructuralDirectiveDirective } from './unless-structural-directive/unless-structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    BasicHighlightDirective,
    CustomPropertyBindingDirective,
    UnlessStructuralDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
