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
import {provide} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Footertip} from './footertip';
import {FootertipService} from './footertip-service';


describe('Footertip Component', () => {
    
    class MockFootertipService {
	public tip$;
	constructor() {
	    this.tip$ = Observable.of('& tip');
	}
    }

  beforeEachProviders((): any[] => [Footertip, provide(FootertipService, {useClass: MockFootertipService})]);


  it('should ...', inject([Footertip], (footerTip) => {
  }));

});
