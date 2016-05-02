import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Subscription} from 'rxjs/Subscription';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {AlertsService, AlertType} from './alerts-service';

const ALERTS_TEMPLATE = `
<alert *ngFor="#alert of alerts;#i = index" 
       [type]="alert.type" 
       dismissible="true" 
       dismissOnTimeout="1500" 
       (close)="closeAlert(i)">
  {{ alert?.msg }}
</alert>
`;

@Component({
  selector: 'alerts',
  template: ALERTS_TEMPLATE,
  directives: [AlertComponent]
})
export class AlertsComponent implements OnInit, OnDestroy {
  private alerts: AlertType[];
  private subscription: Subscription;

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.subscription = this.alertsService.alerts$.subscribe(
      updatedAlerts => this.alerts = updatedAlerts);
  }

  ngOnDestroy() {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  closeAlert(i: number) { this.alertsService.closeAlert(i); }
}
