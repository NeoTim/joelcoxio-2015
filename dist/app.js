System.register(['aurelia-framework', 'aurelia-event-aggregator', 'gsap'], function (_export) {
  'use strict';

  var inject, EventAggregator, gsap, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_gsap) {
      gsap = _gsap.gsap;
    }],
    execute: function () {
      App = (function () {
        function App(events) {
          var _this = this;

          _classCallCheck(this, _App);

          this.views = [{ color: 'pink', icon: 'layers', viewModel: 'views/skills', title: 'Skills' }, { color: 'purple', icon: 'verified_user', viewModel: 'views/experience', title: 'Experience' }, { color: 'blue', icon: 'screen_share', viewModel: 'views/projects', title: 'Projects' }, { color: 'orange', icon: 'school', viewModel: 'views/education', title: 'Education' }, { color: 'green', icon: 'phone_iphone', viewModel: 'views/contact', title: 'Contact' }];

          this.events = events;
          this.events.subscribe('intro-complete', function () {
            _this.timeline.play();
          });
        }

        _createClass(App, [{
          key: 'attached',
          value: function attached() {
            this.timeline = new TimelineMax({ paused: true });
            this.timeline.from('#aside-header', 0.4, {
              y: '-100%'
            }).from('#aside-content', 0.4, {
              x: '-100%'
            }, 0).from('#main-header', 0.4, {
              y: '-100%'
            }, 0).from('#site-content', 0.4, {
              y: '100%'
            }, 0).staggerFrom('.aside-link', 0.4, {
              x: '-100%'
            }, 0.2).staggerFrom('.icon', 0.4, {
              rotation: '180deg'
            }, 0.2, 0.8).from('#aside-bar', 0.4, {
              boxShadow: '0'
            });
          }
        }, {
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'welcome'],
              name: 'welcome',
              moduleId: 'welcome',
              nav: true,
              title: 'Welcome'
            }, { route: 'experience',
              name: 'experience',
              moduleId: './views/experience',
              nav: true,
              title: 'Experience'
            }, { route: 'projects',
              name: 'projects',
              moduleId: './views/projects',
              nav: true,
              title: 'Projects'
            }, { route: 'skills',
              name: 'skills',
              moduleId: './views/skills',
              nav: true,
              title: 'Skill Set'
            }, { route: 'education',
              name: 'education',
              moduleId: './views/education',
              nav: true,
              title: 'Education'
            }, {
              route: 'contact',
              name: 'contact',
              moduleId: './views/contact',
              nav: true,
              title: 'Contact'
            }]);

            this.router = router;
          }
        }, {
          key: 'scrollTo',
          value: function scrollTo(name) {
            var element = document.getElementById(name);
            var top = element.offsetTop;
            console.log(top);
            TweenMax.to(this.main, 2, { scrollTop: top, ease: Power2.easeOut });
          }
        }, {
          key: 'viewsChanged',
          value: function viewsChanged() {
            var _this2 = this;

            if (this.view) {
              (function () {
                var parentElement = _this2.view.element.parentElement;
                parentElement.addEventListener('scroll', (function () {
                  if (parentElement.scrollTop > 15) {}
                }).bind(_this2), false);
              })();
            }
          }
        }, {
          key: 'headersChanged',
          value: function headersChanged() {
            console.log(this.headers);
          }
        }]);

        var _App = App;
        App = inject(EventAggregator)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RyxPQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3BELDZCQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUEsWUFBVTtBQUNqRCxzQkFBSSxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUNqQztpQkFDRixDQUFBLENBQUMsSUFBSSxRQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7O2FBQ3RCO1dBQ0Y7OztpQkFFYSwwQkFBRztBQUNmLG1CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtXQUMxQjs7O21CQTFHVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDWCxHQUFHLEtBQUgsR0FBRztlQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtnc2FwfSBmcm9tICdnc2FwJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgdmlld3MgPSBbXG4gICAge2NvbG9yOiAncGluaycsICAgaWNvbjogJ2xheWVycycsIHZpZXdNb2RlbDogJ3ZpZXdzL3NraWxscycsIHRpdGxlOiAnU2tpbGxzJ30sXG4gICAge2NvbG9yOiAncHVycGxlJywgaWNvbjogJ3ZlcmlmaWVkX3VzZXInLCB2aWV3TW9kZWw6ICd2aWV3cy9leHBlcmllbmNlJywgdGl0bGU6J0V4cGVyaWVuY2UnfSxcbiAgICB7Y29sb3I6ICdibHVlJywgICBpY29uOiAnc2NyZWVuX3NoYXJlJywgdmlld01vZGVsOiAndmlld3MvcHJvamVjdHMnLCB0aXRsZTonUHJvamVjdHMnfSxcbiAgICB7Y29sb3I6ICdvcmFuZ2UnLCBpY29uOiAnc2Nob29sJywgdmlld01vZGVsOiAndmlld3MvZWR1Y2F0aW9uJywgdGl0bGU6J0VkdWNhdGlvbid9LFxuICAgIHtjb2xvcjogJ2dyZWVuJywgIGljb246ICdwaG9uZV9pcGhvbmUnLCB2aWV3TW9kZWw6ICd2aWV3cy9jb250YWN0JywgdGl0bGU6ICdDb250YWN0J31cbiAgXTtcblxuICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2ludHJvLWNvbXBsZXRlJywgKCk9PiB7XG4gICAgICB0aGlzLnRpbWVsaW5lLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDp0cnVlfSlcbiAgICB0aGlzLnRpbWVsaW5lXG4gICAgICAuZnJvbSgnI2FzaWRlLWhlYWRlcicsIDAuNCwge1xuICAgICAgICB5OiAnLTEwMCUnXG4gICAgICB9KVxuICAgICAgLmZyb20oJyNhc2lkZS1jb250ZW50JywgMC40LCB7XG4gICAgICAgIHg6ICctMTAwJSdcbiAgICAgIH0sIDApXG4gICAgICAuZnJvbSgnI21haW4taGVhZGVyJywgMC40LCB7XG4gICAgICAgIHk6ICctMTAwJSdcbiAgICAgIH0sIDApXG4gICAgICAuZnJvbSgnI3NpdGUtY29udGVudCcsIDAuNCwge1xuICAgICAgICB5OiAnMTAwJSdcbiAgICAgIH0sIDApXG4gICAgICAuc3RhZ2dlckZyb20oJy5hc2lkZS1saW5rJywgMC40LCB7XG4gICAgICAgIHg6ICctMTAwJScsXG4gICAgICB9LCAwLjIpXG4gICAgICAuc3RhZ2dlckZyb20oJy5pY29uJywgMC40LCB7XG4gICAgICAgIHJvdGF0aW9uOiAnMTgwZGVnJyxcbiAgICAgIH0sIDAuMiwgMC44KVxuICAgICAgLmZyb20oJyNhc2lkZS1iYXInLCAwLjQsIHtcbiAgICAgICAgYm94U2hhZG93OiAnMCdcbiAgICAgIH0pXG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgICByb3V0ZTogWycnLCd3ZWxjb21lJ11cbiAgICAgICAgLCBuYW1lOiAnd2VsY29tZSdcbiAgICAgICAgLCBtb2R1bGVJZDogJ3dlbGNvbWUnXG4gICAgICAgICwgbmF2OiB0cnVlXG4gICAgICAgICwgdGl0bGU6J1dlbGNvbWUnXG4gICAgICB9LFxuICAgICAgeyAgIHJvdXRlOiAnZXhwZXJpZW5jZSdcbiAgICAgICAgLCBuYW1lOiAnZXhwZXJpZW5jZSdcbiAgICAgICAgLCBtb2R1bGVJZDogJy4vdmlld3MvZXhwZXJpZW5jZSdcbiAgICAgICAgLCBuYXY6IHRydWVcbiAgICAgICAgLCB0aXRsZTonRXhwZXJpZW5jZSdcbiAgICAgIH0sXG4gICAgICB7ICAgcm91dGU6ICdwcm9qZWN0cydcbiAgICAgICAgLCBuYW1lOiAncHJvamVjdHMnXG4gICAgICAgICwgbW9kdWxlSWQ6ICcuL3ZpZXdzL3Byb2plY3RzJ1xuICAgICAgICAsIG5hdjogdHJ1ZVxuICAgICAgICAsIHRpdGxlOidQcm9qZWN0cydcbiAgICAgIH0sXG4gICAgICB7ICAgcm91dGU6ICdza2lsbHMnXG4gICAgICAgICwgbmFtZTogJ3NraWxscydcbiAgICAgICAgLCBtb2R1bGVJZDogJy4vdmlld3Mvc2tpbGxzJ1xuICAgICAgICAsIG5hdjogdHJ1ZVxuICAgICAgICAsIHRpdGxlOidTa2lsbCBTZXQnXG4gICAgICB9LFxuICAgICAgeyAgIHJvdXRlOiAnZWR1Y2F0aW9uJ1xuICAgICAgICAsIG5hbWU6ICdlZHVjYXRpb24nXG4gICAgICAgICwgbW9kdWxlSWQ6ICcuL3ZpZXdzL2VkdWNhdGlvbidcbiAgICAgICAgLCBuYXY6IHRydWVcbiAgICAgICAgLCB0aXRsZTonRWR1Y2F0aW9uJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICByb3V0ZTogJ2NvbnRhY3QnXG4gICAgICAgICwgbmFtZTogJ2NvbnRhY3QnXG4gICAgICAgICwgbW9kdWxlSWQ6ICcuL3ZpZXdzL2NvbnRhY3QnXG4gICAgICAgICwgbmF2OiB0cnVlXG4gICAgICAgICwgdGl0bGU6ICdDb250YWN0J1xuICAgICAgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBzY3JvbGxUbyhuYW1lKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICBsZXQgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgY29uc29sZS5sb2codG9wKVxuICAgIFR3ZWVuTWF4LnRvKHRoaXMubWFpbiwgMiwge3Njcm9sbFRvcDogdG9wLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuICB9XG5cbiAgdmlld3NDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy52aWV3LmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMTUpIHtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgaGVhZGVyc0NoYW5nZWQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5oZWFkZXJzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
