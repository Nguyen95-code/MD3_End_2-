import {Component, OnInit} from '@angular/core';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';

@Component({
  selector: 'app-list-awesome',
  templateUrl: './list-awesome.component.html',
  styleUrls: ['./list-awesome.component.scss']
})
export class ListAwesomeComponent implements OnInit {
  awesomeList: Awesome[] = [];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.awesomeService.getAllAwesome().subscribe(result => {
      this.awesomeList = result;
    });
  }

}
