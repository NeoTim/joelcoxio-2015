import {bindable, inject} from 'aurelia-framework';



@inject(Element)
export class AsideTitle{

  constructor(element) {
    this.element = element;
  }
}
