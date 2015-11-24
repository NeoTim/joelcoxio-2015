import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Element, EventAggregator)
export class IntroAnimation{
  @bindable asideBar = null;
  @bindable main = null;
  first = 'Joel';
  last = 'Cox';

  get name() {
    return this.first + this.last;
  }

  constructor(element, events) {
    this.element = element;
    this.events = events;
  }
  get timeline() {
    return this._timeline ? this._timeline : this._timeline = new TimelineMax({paused: true});
  }

  attached() {
    var designerSpans = this.designerText.getElementsByTagName('span');
    var engineerSpans = this.engineerText.getElementsByTagName('span');
    var aside = document.getElementsByTagName('aside-bar')[0];
    console.log(aside);
    let self = this;
    this.timeline
      .from(this.nameText, 0.4, {
        autoAlpha: '0',
        y:'100px',
        scale: 2,
        ease: Cubic.easeOut
      })
      .from(this.uiText, 0.01, {
        autoAlpha: '0',
        ease: Linear.easeNone,
        delay: 0.4
      })
      .from(this.iText, 0.01, {
        autoAlpha: '0',
        ease: Linear.easeNone
      })
      .staggerFrom(designerSpans, 0.01, {
         autoAlpha: '0',
         ease: Linear.easeNone
      }, 0.06)
      .to(this.iText, 0.4, {
        rotation: '180deg',
        autoAlpha: '0'
      }, 2)
      .staggerTo(designerSpans, 0.01, {
        autoAlpha: 0,
        ease: Linear.easeNone
      }, 0.06, 2)
      .from(this.xText, 0.4, {
        rotation: '-180deg',
        autoAlpha: 0,
      }, 2.5)
      .staggerFrom(engineerSpans, 0.01, {
        autoAlpha: 0,
        ease: Linear.easeNone
      }, 0.06, 2.5)
      .to(this.element, 0.6, {
        transform: 'scale(0)',
        ease: Expo.easeIn,
        onComplete() {
          self.events.publish('intro-complete')
        }
      }, 4)
      .to(this.element, 0.1, {
        display: 'none'
      })
      this.main.style.opacity = 1;



      setTimeout(function() {
        this.timeline.play();
      }.bind(this), 1000);
  }

}
