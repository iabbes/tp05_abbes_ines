import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumber:Number): unknown {
    //put a dot between the 2 first numbers and the 2 last numbers
    let phone = phoneNumber.toString();
    let phone1 = phone.substring(0,2);
    let phone2 = phone.substring(2,4);
    let phone3 = phone.substring(4,6);
    let phone4 = phone.substring(6,8);
    let phone5 = phone.substring(8,10);
    return phone1 + "." + phone2 + "." + phone3 + "." + phone4 + "." + phone5 + ".";
  }

}
