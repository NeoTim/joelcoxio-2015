import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {gsap} from 'gsap';

@inject(EventAggregator)
export class App {
  views = [
    {color: 'pink', icon: 'layers', viewModel: 'views/skills', title: 'Skills'},
    {color: 'blue', icon: 'verified_user', viewModel: 'views/experience', title:'Experience'},
    {color: 'orange', icon: 'school', viewModel: 'views/education', title:'Education'},
    {color: 'green', icon: 'phone_iphone', viewModel: 'views/contact', title: 'Contact'}
  ];

  constructor(events) {
    this.events = events;
    this.events.subscribe('intro-complete', ()=> {
      this.timeline.play();
    });
  }

  attached() {
    this.timeline = new TimelineMax({paused:true})
    this.timeline
      .from('#aside-header', 0.4, {
        y: '-100%'
      })
      .from('#aside-content', 0.4, {
        x: '-100%'
      }, 0)
      .from('#main-header', 0.4, {
        y: '-100%'
      }, 0)
      .from('#site-content', 0.4, {
        y: '100%'
      }, 0)
      .staggerFrom('.aside-link', 0.4, {
        x: '-100%',
      }, 0.2)
      .staggerFrom('.icon', 0.4, {
        rotation: '180deg',
      }, 0.2, 0.8)
      .from('#aside-bar', 0.4, {
        boxShadow: '0'
      })
  }

  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      {   route: ['','welcome']
        , name: 'welcome'
        , moduleId: 'welcome'
        , nav: true
        , title:'Welcome'
      },
      {   route: 'experience'
        , name: 'experience'
        , moduleId: './views/experience'
        , nav: true
        , title:'Experience'
      },
      {   route: 'skills'
        , name: 'skills'
        , moduleId: './views/skills'
        , nav: true
        , title:'Skill Set'
      },
      {   route: 'education'
        , name: 'education'
        , moduleId: './views/education'
        , nav: true
        , title:'Education'
      },
      {
          route: 'contact'
        , name: 'contact'
        , moduleId: './views/contact'
        , nav: true
        , title: 'Contact'
      }
    ]);

    this.router = router;
  }

  scrollTo(name) {
    let element = document.getElementById(name);
    let top = element.offsetTop;
    console.log(top)
    TweenMax.to(this.main, 2, {scrollTop: top, ease: Power2.easeOut});
  }

  viewsChanged() {
    if (this.view) {
      let parentElement = this.view.element.parentElement;
      parentElement.addEventListener('scroll', function(){
        if (parentElement.scrollTop > 15) {
        }
      }.bind(this), false);
    }
  }

  headersChanged() {
    console.log(this.headers)
  }
}
