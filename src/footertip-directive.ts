import {Input, Directive, HostListener, AfterViewInit} from 'angular2/core';
import {I18nService} from 'ng2-i18next/ng2-i18next';
import {FootertipService} from './footertip-service';

@Directive({
  selector: '[footertip]'
})
export class FootertipDirective implements AfterViewInit {
  @Input('footertip') public content: string;

  private visible: boolean = false;
  private localizedText: string;

  constructor(
    private footertipService: FootertipService,
    private i18n: I18nService) { }

  ngAfterViewInit() {
    this.loadAndRender(this.content, s => this.localizedText = s);
  }

  loadAndRender(code: string, doRenderCallback) {
    if (!code) {
      doRenderCallback('');
      return;
    }

    this.i18n.tPromise(code)

      .then((val: string) => {
        doRenderCallback(val);
      })

      .catch((val: string) => {
        doRenderCallback('');
        var obs = this.i18n.alerts$.subscribe(b => {
          doRenderCallback(this.i18n.t(code));
          obs.unsubscribe();
        });
      });
  }

  @HostListener('focusin', ['$event', '$target'])
  @HostListener('mouseenter', ['$event', '$target'])
  show() {
    if (this.visible) {
      return;
    }
    this.visible = true;

    this.footertipService.setTip(this.localizedText);
  }

  // params event, target
  @HostListener('focusout', ['$event', '$target'])
  @HostListener('mouseleave', ['$event', '$target'])
  hide() {
    if (!this.visible) {
      return;
    }
    this.visible = false;

    this.footertipService.clearTip();
  }
}
