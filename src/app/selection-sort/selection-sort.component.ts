import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {
  listOfNumbers = [56, 15, 4, 69, -8];
  sortedArr = [];

  findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }

  selectionSort(arr) {
    const newArr = arr.slice();
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
      const smallestIndex = this.findSmallest(newArr);
      sortedArr.push(newArr.splice(smallestIndex));
      console.log(this.listOfNumbers);
      console.log(newArr);
    }
    this.sortedArr = sortedArr;
  }

  constructor() {
  }

  ngOnInit() {
    this.selectionSort(this.listOfNumbers);
  }

}
