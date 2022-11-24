import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myJson'
})
export class MyJsonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
