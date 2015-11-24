import {bindable} from 'aurelia-framework';

export class SiteArticle {
  @bindable isRow = null;

  directionClass = 'is-column';

  isRowChanged(value) {
    this.directionClass = value ? 'is-row' : 'is-column';
  }
}
