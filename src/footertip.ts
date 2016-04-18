import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Subscription} from 'rxjs/Subscription';

import {FootertipService} from './footertip-service';

@Component({
  selector: 'footertip',
  template: '{{tip}}'
})
export class Footertip implements OnInit, OnDestroy {
  private tip: string;
  private subscription: Subscription;

  constructor(private footertipService: FootertipService) { }

  ngOnInit() {
    this.subscription = this.footertipService.tip$.subscribe(
      updatedTip => this.tip = updatedTip);
  }

  ngOnDestroy() {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
