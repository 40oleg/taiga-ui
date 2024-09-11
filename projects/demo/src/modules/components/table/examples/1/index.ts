import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { changeDetection } from '@demo/emulate/change-detection';
import { encapsulation } from '@demo/emulate/encapsulation';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiFormatNumberPipe } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiTable, NgForOf, TuiFormatNumberPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
        },
        {
            name: 'Roman Sedov',
            balance: 423242,
        },
    ] as const;

    protected readonly direction$ = new BehaviorSubject<-1 | 1>(-1);
    protected readonly sorter$ = new BehaviorSubject<string | number | symbol>('name');

    protected readonly columns = Object.keys(this.data[0]);
}
