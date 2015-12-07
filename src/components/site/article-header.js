import {bindable} from 'aurelia-framework';

export class ArticleHeader {
  @bindable date = null;
  @bindable link = null;
  @bindable image = null;
}
