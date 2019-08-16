import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ContentChild, AfterContentInit } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit, AfterContentInit {

  // tslint:disable-next-line:no-input-rename
  @Input('pokemonParent') pokemonElement: string;
  @Output() evolved = new EventEmitter();
  @ViewChild('attackReference') attack: ElementRef;
  @ContentChild('ngContentReference') hiddenAbility: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('ContentChild', this.hiddenAbility.nativeElement.textContent);
  }

  evolve(pokemon: string) {
    this.evolved.emit(pokemon);
  }

  onAttack() {
    console.log('ViewChild', this.attack.nativeElement.value);
  }


}
