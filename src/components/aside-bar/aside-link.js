import {bindable, inject} from 'aurelia-framework';

@inject(Element)
export class AsideLink{
  @bindable link = null;

  constructor(element) {
    this.element = element;
  }
}
