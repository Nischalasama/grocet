import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {
  presentYear: any;
  joinYear: any;
  experience: any;
  transform(value: any): any {
    this.presentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.presentYear - this.joinYear;
    return this.experience;
  }
}
