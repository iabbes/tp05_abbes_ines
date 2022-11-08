import { ElementRef } from '@angular/core';
import { StringDirective } from './string.directive';

describe('StringDirective', () => {
  it('should create an instance', () => {
    const directive = new StringDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
