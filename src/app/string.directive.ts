import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appString]'
})
export class StringDirective {

  constructor(private _element: ElementRef) { 
    //only string in input
    this._element.nativeElement.onkeypress = (e: {which:number ; preventDefault(): () => void }) => {
      if (!(e.which < 33 || e.which > 64)) {
        e.preventDefault();
      }
    }
  }

}
