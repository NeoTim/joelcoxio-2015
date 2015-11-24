import {bindable} from 'aurelia-framework';

export class SkillsView {

  languages     = ['es6', 'javascript','html5',  'css3', 'apps-script', 'php'];
  preprocessors = ['jade', 'coffeescript', 'sass', 'less', 'stylus', 'postcss'];
  frameworks    = ['aurelia', 'angular2.0', 'angular', 'react', 'polymer', 'ionic', 'backbone', 'laravel'];
  tools         = ['jspm', 'gulp', 'grunt', 'slush', 'yeoman'];
  external      = ['ai', 'ps', 'sketch'];
}


export class SourceValueConverter {
  toView(name) {
    return `images/logos/${name}-logo.png`;
  }
}

export class TitleValueConverter {
  toView(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
}
