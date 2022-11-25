import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapitalLetter'
})
export class FirstCapitalLetterPipe implements PipeTransform {

  transform(str : String): unknown {
    //put the first letter in capital
    let str1 = str.substring(0,1);
    let str2 = str.substring(1,str.length);
    return str1.toUpperCase() + str2.toLowerCase();
    
  }

}
