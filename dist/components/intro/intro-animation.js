System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
  'use strict';

  var bindable, inject, EventAggregator, IntroAnimation;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      IntroAnimation = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(IntroAnimation, [{
          key: 'asideBar',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'main',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'name',
          get: function get() {
            return this.first + this.last;
          }
        }], null, _instanceInitializers);

        function IntroAnimation(element, events) {
          _classCallCheck(this, _IntroAnimation);

          _defineDecoratedPropertyDescriptor(this, 'asideBar', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'main', _instanceInitializers);

          this.first = 'Joel';
          this.last = 'Cox';

          this.element = element;
          this.events = events;
        }

        _createDecoratedClass(IntroAnimation, [{
          key: 'attached',
          value: function attached() {
            var designerSpans = this.designerText.getElementsByTagName('span');
            var engineerSpans = this.engineerText.getElementsByTagName('span');
            var aside = document.getElementsByTagName('aside-bar')[0];
            console.log(aside);
            var self = this;
            this.timeline.from(this.nameText, 0.4, {
              autoAlpha: '0',
              y: '100px',
              scale: 2,
              ease: Cubic.easeOut
            }).from(this.uiText, 0.01, {
              autoAlpha: '0',
              ease: Linear.easeNone,
              delay: 0.4
            }).from(this.iText, 0.01, {
              autoAlpha: '0',
              ease: Linear.easeNone
            }).staggerFrom(designerSpans, 0.01, {
              autoAlpha: '0',
              ease: Linear.easeNone
            }, 0.06).to(this.iText, 0.4, {
              rotation: '180deg',
              autoAlpha: '0'
            }, 2).staggerTo(designerSpans, 0.01, {
              autoAlpha: 0,
              ease: Linear.easeNone
            }, 0.06, 2).from(this.xText, 0.4, {
              rotation: '-180deg',
              autoAlpha: 0
            }, 2.5).staggerFrom(engineerSpans, 0.01, {
              autoAlpha: 0,
              ease: Linear.easeNone
            }, 0.06, 2.5).to(this.element, 0.6, {
              transform: 'scale(0)',
              ease: Expo.easeIn,
              onComplete: function onComplete() {
                self.events.publish('intro-complete');
              }
            }, 4).to(this.element, 0.1, {
              display: 'none'
            });
            this.main.style.opacity = 1;

            setTimeout((function () {
              this.timeline.play();
            }).bind(this), 1000);
          }
        }, {
          key: 'timeline',
          get: function get() {
            return this._timeline ? this._timeline : this._timeline = new TimelineMax({ paused: true });
          }
        }], null, _instanceInitializers);

        var _IntroAnimation = IntroAnimation;
        IntroAnimation = inject(Element, EventAggregator)(IntroAnimation) || IntroAnimation;
        return IntroAnimation;
      })();

      _export('IntroAnimation', IntroAnimation);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50cm8vaW50cm8tYW5pbWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5Q0FJYSxjQUFjOzs7Ozs7Ozs7O21DQUpuQixRQUFRO2lDQUFFLE1BQU07O2dEQUNoQixlQUFlOzs7QUFHVixvQkFBYzs7Ozs4QkFBZCxjQUFjOzt1QkFDeEIsUUFBUTs7bUJBQVksSUFBSTs7Ozs7dUJBQ3hCLFFBQVE7O21CQUFRLElBQUk7Ozs7O2VBSWIsZUFBRztBQUNULG1CQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztXQUMvQjs7O0FBRVUsaUJBVkEsY0FBYyxDQVViLE9BQU8sRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7ZUFQN0IsS0FBSyxHQUFHLE1BQU07ZUFDZCxJQUFJLEdBQUcsS0FBSzs7QUFPVixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7OEJBYlUsY0FBYzs7aUJBa0JqQixvQkFBRztBQUNULGdCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25FLGdCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25FLGdCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsbUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixnQkFBSSxDQUFDLFFBQVEsQ0FDVixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7QUFDeEIsdUJBQVMsRUFBRSxHQUFHO0FBQ2QsZUFBQyxFQUFDLE9BQU87QUFDVCxtQkFBSyxFQUFFLENBQUM7QUFDUixrQkFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPO2FBQ3BCLENBQUMsQ0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDdkIsdUJBQVMsRUFBRSxHQUFHO0FBQ2Qsa0JBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtBQUNyQixtQkFBSyxFQUFFLEdBQUc7YUFDWCxDQUFDLENBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3RCLHVCQUFTLEVBQUUsR0FBRztBQUNkLGtCQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7YUFDdEIsQ0FBQyxDQUNELFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFO0FBQy9CLHVCQUFTLEVBQUUsR0FBRztBQUNkLGtCQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7YUFDdkIsRUFBRSxJQUFJLENBQUMsQ0FDUCxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDbkIsc0JBQVEsRUFBRSxRQUFRO0FBQ2xCLHVCQUFTLEVBQUUsR0FBRzthQUNmLEVBQUUsQ0FBQyxDQUFDLENBQ0osU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUU7QUFDOUIsdUJBQVMsRUFBRSxDQUFDO0FBQ1osa0JBQUksRUFBRSxNQUFNLENBQUMsUUFBUTthQUN0QixFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDckIsc0JBQVEsRUFBRSxTQUFTO0FBQ25CLHVCQUFTLEVBQUUsQ0FBQzthQUNiLEVBQUUsR0FBRyxDQUFDLENBQ04sV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUU7QUFDaEMsdUJBQVMsRUFBRSxDQUFDO0FBQ1osa0JBQUksRUFBRSxNQUFNLENBQUMsUUFBUTthQUN0QixFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FDWixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7QUFDckIsdUJBQVMsRUFBRSxVQUFVO0FBQ3JCLGtCQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDakIsd0JBQVUsRUFBQSxzQkFBRztBQUNYLG9CQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2VBQ3RDO2FBQ0YsRUFBRSxDQUFDLENBQUMsQ0FDSixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7QUFDckIscUJBQU8sRUFBRSxNQUFNO2FBQ2hCLENBQUMsQ0FBQTtBQUNGLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUk1QixzQkFBVSxDQUFDLENBQUEsWUFBVztBQUNwQixrQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QixDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1dBQ3ZCOzs7ZUEvRFcsZUFBRztBQUNiLG1CQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7V0FDM0Y7Ozs4QkFoQlUsY0FBYztBQUFkLHNCQUFjLEdBRDFCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQ3BCLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYyIsImZpbGUiOiJjb21wb25lbnRzL2ludHJvL2ludHJvLWFuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBpbmplY3QoRWxlbWVudCwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEludHJvQW5pbWF0aW9ue1xuICBAYmluZGFibGUgYXNpZGVCYXIgPSBudWxsO1xuICBAYmluZGFibGUgbWFpbiA9IG51bGw7XG4gIGZpcnN0ID0gJ0pvZWwnO1xuICBsYXN0ID0gJ0NveCc7XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3QgKyB0aGlzLmxhc3Q7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICB9XG4gIGdldCB0aW1lbGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZWxpbmUgPyB0aGlzLl90aW1lbGluZSA6IHRoaXMuX3RpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KHtwYXVzZWQ6IHRydWV9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHZhciBkZXNpZ25lclNwYW5zID0gdGhpcy5kZXNpZ25lclRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKTtcbiAgICB2YXIgZW5naW5lZXJTcGFucyA9IHRoaXMuZW5naW5lZXJUZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzcGFuJyk7XG4gICAgdmFyIGFzaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FzaWRlLWJhcicpWzBdO1xuICAgIGNvbnNvbGUubG9nKGFzaWRlKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy50aW1lbGluZVxuICAgICAgLmZyb20odGhpcy5uYW1lVGV4dCwgMC40LCB7XG4gICAgICAgIGF1dG9BbHBoYTogJzAnLFxuICAgICAgICB5OicxMDBweCcsXG4gICAgICAgIHNjYWxlOiAyLFxuICAgICAgICBlYXNlOiBDdWJpYy5lYXNlT3V0XG4gICAgICB9KVxuICAgICAgLmZyb20odGhpcy51aVRleHQsIDAuMDEsIHtcbiAgICAgICAgYXV0b0FscGhhOiAnMCcsXG4gICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZSxcbiAgICAgICAgZGVsYXk6IDAuNFxuICAgICAgfSlcbiAgICAgIC5mcm9tKHRoaXMuaVRleHQsIDAuMDEsIHtcbiAgICAgICAgYXV0b0FscGhhOiAnMCcsXG4gICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgfSlcbiAgICAgIC5zdGFnZ2VyRnJvbShkZXNpZ25lclNwYW5zLCAwLjAxLCB7XG4gICAgICAgICBhdXRvQWxwaGE6ICcwJyxcbiAgICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgfSwgMC4wNilcbiAgICAgIC50byh0aGlzLmlUZXh0LCAwLjQsIHtcbiAgICAgICAgcm90YXRpb246ICcxODBkZWcnLFxuICAgICAgICBhdXRvQWxwaGE6ICcwJ1xuICAgICAgfSwgMilcbiAgICAgIC5zdGFnZ2VyVG8oZGVzaWduZXJTcGFucywgMC4wMSwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgfSwgMC4wNiwgMilcbiAgICAgIC5mcm9tKHRoaXMueFRleHQsIDAuNCwge1xuICAgICAgICByb3RhdGlvbjogJy0xODBkZWcnLFxuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICB9LCAyLjUpXG4gICAgICAuc3RhZ2dlckZyb20oZW5naW5lZXJTcGFucywgMC4wMSwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIGVhc2U6IExpbmVhci5lYXNlTm9uZVxuICAgICAgfSwgMC4wNiwgMi41KVxuICAgICAgLnRvKHRoaXMuZWxlbWVudCwgMC42LCB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgICAgZWFzZTogRXhwby5lYXNlSW4sXG4gICAgICAgIG9uQ29tcGxldGUoKSB7XG4gICAgICAgICAgc2VsZi5ldmVudHMucHVibGlzaCgnaW50cm8tY29tcGxldGUnKVxuICAgICAgICB9XG4gICAgICB9LCA0KVxuICAgICAgLnRvKHRoaXMuZWxlbWVudCwgMC4xLCB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSlcbiAgICAgIHRoaXMubWFpbi5zdHlsZS5vcGFjaXR5ID0gMTtcblxuXG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUucGxheSgpO1xuICAgICAgfS5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
