import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopRange'
})
export class LoopRangePipe implements PipeTransform {

  transform(value: number, startAt: number = 0): number[] {
    if (!value) {
      value = 0;
    }

    const arr = [];

    for (let i = 0; i < value; i++) {
      arr.push(i + startAt);
    }

    return arr;
  }

}
