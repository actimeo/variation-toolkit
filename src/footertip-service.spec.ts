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
import {FootertipService} from './footertip-service';


describe('Footertip Service', () => {

  beforeEachProviders(() => [FootertipService]);


  it('should ...', injectAsync(
      [FootertipService], (service: FootertipService) => {
	  
	  service.setTip('one tip');
	  service.tip$.subscribe( updatedTip => 
				  expect(updatedTip).toEqual('one tip'));
      }));
    
});
