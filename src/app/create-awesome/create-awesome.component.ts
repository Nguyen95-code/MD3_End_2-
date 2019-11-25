import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {Awesome} from '../awesome';

@Component({
  selector: 'app-create-awesome',
  templateUrl: './create-awesome.component.html',
  styleUrls: ['./create-awesome.component.scss']
})
export class CreateAwesomeComponent implements OnInit {
  messageSuccess = '';
  messageError = '';

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
  }

  add(awesome: Awesome) {
    this.awesomeService.create(awesome).subscribe(() => {
      this.messageSuccess = 'Add success';
    }, error => {
      this.messageError = 'Add error';
    });
  }

}
