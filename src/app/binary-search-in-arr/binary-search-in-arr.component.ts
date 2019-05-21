import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-binary-search-in-arr',
    templateUrl: './binary-search-in-arr.component.html',
    styleUrls: ['./binary-search-in-arr.component.css']
})
export class BinarySearchInArrComponent implements OnInit {
    listOfNumbers = [1, 3, 5, 7, 9];
    numToFind = 12;
    result = '';
    log = [];

    binarySearch() {
        let low = 0;
        let high = this.listOfNumbers.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const guess = this.listOfNumbers[mid];
            this.log.push('guess = ' + guess);
            if (guess === this.numToFind) {
                return mid + '';
            } else if (guess < this.numToFind) {
                this.log.push('guess < ' + this.numToFind);
                low = mid + 1;
            } else if (guess > this.numToFind) {
                this.log.push('guess > ' + this.numToFind);
                high = mid - 1;
            }
        }
        return 'There is no such number in the array';
    }

    constructor() {
        this.result = this.binarySearch();
    }

    ngOnInit() {
    }

}
