import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr = [0, 1, 2, 3, 4, 5];

  test(arr) {
    console.log(this.arr);
    const newArr = arr;
    newArr.splice(0, newArr.length);
    console.log(this.arr);
  }
  constructor() {
  }

  ngOnInit() {
    this.test(this.arr);
  }

}
