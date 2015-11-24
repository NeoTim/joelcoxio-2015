import {bindable, inject} from 'aurelia-framework';



@inject(Element)
export class AsideBar{
  @bindable closed = null;
  @bindable expand = null;
  @bindable state = null;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.closed = this.closed || this.element.hasAttribute('closed');
  }

  expandChanged(value) {
    if (value) this.state = 'expand';
  }
  closedChanged(value) {
    if (value) this.state = 'closed';
  }

  stateChanged(state) {
    this.stateClass = `aside-bar--${state}`;
  }
}
