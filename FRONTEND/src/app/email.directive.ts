import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {

  constructor(private _element: ElementRef) { 
    // if there is not '@' in the input, put the background in red
    this._element.nativeElement.onblur = (e: {target: {value: string}}) => {
      if (!e.target.value.includes('@')) {
        this._element.nativeElement.style.backgroundColor = 'red';
      }
    }
  
  }

}
