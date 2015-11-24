import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class SiteView{
  @bindable column = null;
  @bindable row = null;
  @bindable align = null;
  @bindable justify = null;
  @bindable scroll = null;

  layoutClass  = null;
  alignClass   = null;
  justifyClass = null;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.column = this.column || this.element.hasAttribute('column');
    this.row = this.row || this.element.hasAttribute('row');
    this.scroll = this.scroll || this.element.hasAttribute('scroll');
  }

  columnChanged(value) {
    this.layoutClass = value ? 'site-view--is-column' : '';
  }

  rowChanged(value) {
    this.layoutClass = value ? 'site-view--is-row' : '';
  }

  alignChanged(value) {
    this.alignClass = value ? `site-view--align-${value}` : '';
  }

  justifyChanged(value) {
    this.justifyClass = value ? `site-view--justify-${value}` : '';
  }

  scrollChanged(scrollable) {
    this.scrollClass = scrollable ? `site-view--scrollable` : '';
  }
}
