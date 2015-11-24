import {bindable, inject} from 'aurelia-framework';



@inject(Element)
export class AsideHeader{

  constructor(element) {
    this.element = element;
  }
}
