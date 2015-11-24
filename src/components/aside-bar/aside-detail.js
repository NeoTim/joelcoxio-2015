import {bindable, inject} from 'aurelia-framework';



@inject(Element)
export class AsideDetail{

  constructor(element) {
    this.element = element;
  }
}
