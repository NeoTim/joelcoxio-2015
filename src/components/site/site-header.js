import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class SiteHeader {
  @bindable title = null;
  @bindable subtitle = null;
  @bindable isScrolled = null;

  constructor(element) {
    this.element = element;
  }

  attached() {
  }

  isScrolledChanged() {
    console.log('Is-Scrolled');
  }
}
