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

          this.views = [{ color: 'pink', icon: 'layers', viewModel: 'views/skills', title: 'Skills' }, { color: 'blue', icon: 'verified_user', viewModel: 'views/experience', title: 'Experience' }, { color: 'orange', icon: 'school', viewModel: 'views/education', title: 'Education' }, { color: 'green', icon: 'phone_iphone', viewModel: 'views/contact', title: 'Contact' }];

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
//# sourceMappingURL=data:application/json;base64,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QU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1dBQzFCOzs7bUJBbkdVLEdBQUc7QUFBSCxXQUFHLEdBRGYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUNYLEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge2dzYXB9IGZyb20gJ2dzYXAnO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBBcHAge1xuICB2aWV3cyA9IFtcbiAgICB7Y29sb3I6ICdwaW5rJywgaWNvbjogJ2xheWVycycsIHZpZXdNb2RlbDogJ3ZpZXdzL3NraWxscycsIHRpdGxlOiAnU2tpbGxzJ30sXG4gICAge2NvbG9yOiAnYmx1ZScsIGljb246ICd2ZXJpZmllZF91c2VyJywgdmlld01vZGVsOiAndmlld3MvZXhwZXJpZW5jZScsIHRpdGxlOidFeHBlcmllbmNlJ30sXG4gICAge2NvbG9yOiAnb3JhbmdlJywgaWNvbjogJ3NjaG9vbCcsIHZpZXdNb2RlbDogJ3ZpZXdzL2VkdWNhdGlvbicsIHRpdGxlOidFZHVjYXRpb24nfSxcbiAgICB7Y29sb3I6ICdncmVlbicsIGljb246ICdwaG9uZV9pcGhvbmUnLCB2aWV3TW9kZWw6ICd2aWV3cy9jb250YWN0JywgdGl0bGU6ICdDb250YWN0J31cbiAgXTtcblxuICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUoJ2ludHJvLWNvbXBsZXRlJywgKCk9PiB7XG4gICAgICB0aGlzLnRpbWVsaW5lLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMudGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoe3BhdXNlZDp0cnVlfSlcbiAgICB0aGlzLnRpbWVsaW5lXG4gICAgICAuZnJvbSgnI2FzaWRlLWhlYWRlcicsIDAuNCwge1xuICAgICAgICB5OiAnLTEwMCUnXG4gICAgICB9KVxuICAgICAgLmZyb20oJyNhc2lkZS1jb250ZW50JywgMC40LCB7XG4gICAgICAgIHg6ICctMTAwJSdcbiAgICAgIH0sIDApXG4gICAgICAuZnJvbSgnI21haW4taGVhZGVyJywgMC40LCB7XG4gICAgICAgIHk6ICctMTAwJSdcbiAgICAgIH0sIDApXG4gICAgICAuZnJvbSgnI3NpdGUtY29udGVudCcsIDAuNCwge1xuICAgICAgICB5OiAnMTAwJSdcbiAgICAgIH0sIDApXG4gICAgICAuc3RhZ2dlckZyb20oJy5hc2lkZS1saW5rJywgMC40LCB7XG4gICAgICAgIHg6ICctMTAwJScsXG4gICAgICB9LCAwLjIpXG4gICAgICAuc3RhZ2dlckZyb20oJy5pY29uJywgMC40LCB7XG4gICAgICAgIHJvdGF0aW9uOiAnMTgwZGVnJyxcbiAgICAgIH0sIDAuMiwgMC44KVxuICAgICAgLmZyb20oJyNhc2lkZS1iYXInLCAwLjQsIHtcbiAgICAgICAgYm94U2hhZG93OiAnMCdcbiAgICAgIH0pXG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgICByb3V0ZTogWycnLCd3ZWxjb21lJ11cbiAgICAgICAgLCBuYW1lOiAnd2VsY29tZSdcbiAgICAgICAgLCBtb2R1bGVJZDogJ3dlbGNvbWUnXG4gICAgICAgICwgbmF2OiB0cnVlXG4gICAgICAgICwgdGl0bGU6J1dlbGNvbWUnXG4gICAgICB9LFxuICAgICAgeyAgIHJvdXRlOiAnZXhwZXJpZW5jZSdcbiAgICAgICAgLCBuYW1lOiAnZXhwZXJpZW5jZSdcbiAgICAgICAgLCBtb2R1bGVJZDogJy4vdmlld3MvZXhwZXJpZW5jZSdcbiAgICAgICAgLCBuYXY6IHRydWVcbiAgICAgICAgLCB0aXRsZTonRXhwZXJpZW5jZSdcbiAgICAgIH0sXG4gICAgICB7ICAgcm91dGU6ICdza2lsbHMnXG4gICAgICAgICwgbmFtZTogJ3NraWxscydcbiAgICAgICAgLCBtb2R1bGVJZDogJy4vdmlld3Mvc2tpbGxzJ1xuICAgICAgICAsIG5hdjogdHJ1ZVxuICAgICAgICAsIHRpdGxlOidTa2lsbCBTZXQnXG4gICAgICB9LFxuICAgICAgeyAgIHJvdXRlOiAnZWR1Y2F0aW9uJ1xuICAgICAgICAsIG5hbWU6ICdlZHVjYXRpb24nXG4gICAgICAgICwgbW9kdWxlSWQ6ICcuL3ZpZXdzL2VkdWNhdGlvbidcbiAgICAgICAgLCBuYXY6IHRydWVcbiAgICAgICAgLCB0aXRsZTonRWR1Y2F0aW9uJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICByb3V0ZTogJ2NvbnRhY3QnXG4gICAgICAgICwgbmFtZTogJ2NvbnRhY3QnXG4gICAgICAgICwgbW9kdWxlSWQ6ICcuL3ZpZXdzL2NvbnRhY3QnXG4gICAgICAgICwgbmF2OiB0cnVlXG4gICAgICAgICwgdGl0bGU6ICdDb250YWN0J1xuICAgICAgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBzY3JvbGxUbyhuYW1lKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICBsZXQgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgY29uc29sZS5sb2codG9wKVxuICAgIFR3ZWVuTWF4LnRvKHRoaXMubWFpbiwgMiwge3Njcm9sbFRvcDogdG9wLCBlYXNlOiBQb3dlcjIuZWFzZU91dH0pO1xuICB9XG5cbiAgdmlld3NDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy52aWV3LmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMTUpIHtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgaGVhZGVyc0NoYW5nZWQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5oZWFkZXJzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
