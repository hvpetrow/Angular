import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() backgroundColor: string = 'yellow';
  constructor(private el: ElementRef) {
    console.log('HighlightConstructorDirective');

  }

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = this.backgroundColor;
  }
}
