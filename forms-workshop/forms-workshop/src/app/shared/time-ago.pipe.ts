import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  private now = new Date();

  transform(value: string): string {
    const then = new Date(value);
    const timePassed = this.now.getTime() + then.getTime();
    const miliseconds = 1000;

    // if (timePassed < 60 * miliseconds) {
    //   return `${Math.floor(timePassed / 60)} seconds`;
    // }

    // if (timePassed < ) {

    // }

    return null;
  }

}
