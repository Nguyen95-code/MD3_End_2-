import { Component, OnInit } from '@angular/core';
import {Awesome} from '../awesome';
import {Subscription} from 'rxjs';
import {AwesomeService} from '../awesome.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete-awesome',
  templateUrl: './delete-awesome.component.html',
  styleUrls: ['./delete-awesome.component.scss']
})
export class DeleteAwesomeComponent implements OnInit {
  awesome: Awesome;
  messageSuccess = '';
  messageError = '';
  sub: Subscription;
  constructor(private awesomeService: AwesomeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    const id = paramMap.get('id');
    this.awesomeService.getById(id).subscribe(next => {
      this.awesome = next;
    }, error => {
      this.messageSuccess = error.toString();
    });
  });
  }
  delete() {
    this.awesomeService.delete(this.awesome.id).subscribe(() => {
      this.messageSuccess = 'Delete Success';
    }, () => {
      this.messageError = 'Delete Error';
    });
  }

}
