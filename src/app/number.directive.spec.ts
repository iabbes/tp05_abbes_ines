import { ElementRef } from '@angular/core';
import { NumberDirective } from './number.directive';

describe('NumberDirective', () => {
  it('should create an instance', () => {
    const directive = new NumberDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
