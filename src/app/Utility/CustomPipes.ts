import { WeekDay } from '@angular/common';
import {Pipe,PipeTransform } from '@angular/core'

@Pipe({
    name:'square'
})
export class SquarePipe implements PipeTransform{
    transform(value: number):number {
        return value*value;
    }
}

@Pipe({
    name:'dayfromdate'
})
export class getdayPipe implements PipeTransform{
    transform(value: Date):string {
        return Date.name;
    }
}
