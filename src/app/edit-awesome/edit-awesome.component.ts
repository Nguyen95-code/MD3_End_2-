import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Awesome} from '../awesome';
import {AwesomeService} from '../awesome.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit-awesome',
  templateUrl: './edit-awesome.component.html',
  styleUrls: ['./edit-awesome.component.scss']
})
export class EditAwesomeComponent implements OnInit {
  messageSuccess = '';
  messageError = '';
  sub: Subscription;
  awesome: Awesome;

  constructor(private awesomeService: AwesomeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.awesomeService.getById(id).subscribe(next => {
        this.awesome = next;
      }, error => {
        console.log(error);
      });
    });
  }
  save(awesome: Awesome) {
    this.awesomeService.edit(awesome.id, awesome).subscribe(() => {
      this.messageSuccess = 'Edit success';
    }, error => {
      this.messageError = 'Edit error';
    });
  }
}
