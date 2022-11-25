import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  constructor(private _element: ElementRef) {
    // only numbers in input
    this._element.nativeElement.onkeypress = (e: {which:number ; preventDefault(): () => void }) => {
      if (e.which < 48 || e.which > 57) {
        e.preventDefault();
      }
    }
    
  }

}
