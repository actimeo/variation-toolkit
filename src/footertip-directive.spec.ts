import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide, Component} from 'angular2/core';
import {FootertipDirective} from './footertip-directive';


@Component({selector: 'test-component', template: `<div footertip></div>`})
class TestComponent {
}

describe('Footertip Directive', () => {

  beforeEachProviders((): any[] => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
       return tcb.createAsync(TestComponent).then((fixture) => { fixture.detectChanges(); });
     }));

});
