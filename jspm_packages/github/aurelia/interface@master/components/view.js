/* */ 
define(['exports', 'aurelia-framework', './layout', '../util/style', '../elements/nav-bar', '../channel', './view-content'], function (exports, _aureliaFramework, _layout, _utilStyle, _elementsNavBar, _channel, _viewContent) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ViewElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ViewElement, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'blur',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'scroll',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'navbar',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'tabbar',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'enableNavbar',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'navbarBack',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'navbarBrand',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ViewElement(element, layoutConfig, channel) {
      _classCallCheck(this, _ViewElement);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'blur', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'scroll', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'navbar', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'tabbar', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'enableNavbar', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'navbarBack', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'navbarBrand', _instanceInitializers);

      this.isView = true;
      this.className = 'ai-view';

      this.element = element;
      this.channel = channel;
      this.viewController = new _viewContent.ViewControllerElement(this);
      this.layoutConfig = layoutConfig;
    }

    _createDecoratedClass(ViewElement, [{
      key: 'created',
      value: function created(view) {
        console.log(view);
        this.viewController.created(view);
      }
    }, {
      key: 'bind',
      value: function bind(bindingContext) {
        this.viewController.setItem('element', this.viewContent);
        this.enableNavbar = this.enableNavbar || this.element.hasAttribute('enable-navbar');

        this.viewController.bind(bindingContext);
      }
    }, {
      key: '_createNavbarInstruction',
      value: function _createNavbarInstruction() {
        var options = {};
        if (this.navbarBack) options.left = new _elementsNavBar.LeftNav({ navigateBack: true });
        if (this.navbarBrand) options.brand = this.navbarBrand;
        return options;
      }
    }, {
      key: 'attached',
      value: function attached() {
        if (this.enableNavbar) {
          var instruction = this._createNavbarInstruction();
          this.navbar.config = instruction;
        }
        this.backwardHandler = this.channel.subscribe('navigating:back', this.element.classList.add('reverse-animation'));
        this.forwardHandler = this.channel.subscribe('navigating:forward', this.element.classList.remove('reverse-animation'));
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.backwardHandler.dispose();
        this.forwardHandler.dispose();
      }
    }, {
      key: 'unbind',
      value: function unbind() {}
    }, {
      key: 'navbarChanged',
      value: function navbarChanged(value, oldValue) {
        this.viewController.setItem('navbar', value, oldValue);
      }
    }, {
      key: 'tabbarChanged',
      value: function tabbarChanged(value, oldValue) {
        this.viewController.setItem('tabbar', value, oldValue);
      }
    }], null, _instanceInitializers);

    var _ViewElement = ViewElement;
    ViewElement = (0, _aureliaFramework.inject)(Element, _layout.LayoutConfig, _channel.InterfaceChannel)(ViewElement) || ViewElement;
    ViewElement = (0, _aureliaFramework.customElement)('ai-view')(ViewElement) || ViewElement;
    return ViewElement;
  })();

  exports.ViewElement = ViewElement;
});
//# sourceMappingURL=data:application/json;base64,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RUFBRTtBQUM3QixZQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO09BQ3ZEOzs7YUFFWSx1QkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQzdCLFlBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7T0FDdkQ7Ozt1QkE5RFUsV0FBVztBQUFYLGVBQVcsR0FEdkIsc0JBUnVGLE1BQU0sRUFRdEYsT0FBTyxVQVBQLFlBQVksV0FHWixnQkFBZ0IsQ0FJd0IsQ0FDbkMsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLHNCQVA4RCxhQUFhLEVBTzdELFNBQVMsQ0FBQyxDQUVaLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJjb21wb25lbnRzL3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgQm91bmRWaWV3RmFjdG9yeSwgdGVtcGxhdGVDb250cm9sbGVyLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LFZpZXdTbG90fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0xheW91dENvbmZpZ30gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHtlYXNlfSBmcm9tICcuLi91dGlsL3N0eWxlJztcbmltcG9ydCB7TmF2YmFyLCBMZWZ0TmF2fSBmcm9tICcuLi9lbGVtZW50cy9uYXYtYmFyJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQge1ZpZXdDb250cm9sbGVyRWxlbWVudH0gZnJvbSAnLi92aWV3LWNvbnRlbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktdmlldycpXG5AaW5qZWN0KEVsZW1lbnQsIExheW91dENvbmZpZywgSW50ZXJmYWNlQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBWaWV3RWxlbWVudCB7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBibHVyID0gbnVsbDtcbiAgQGJpbmRhYmxlIHNjcm9sbCA9IG51bGw7XG4gIEBiaW5kYWJsZSBuYXZiYXIgPSBudWxsO1xuICBAYmluZGFibGUgdGFiYmFyID0gbnVsbDtcbiAgQGJpbmRhYmxlIGVuYWJsZU5hdmJhciA9IG51bGw7XG4gIEBiaW5kYWJsZSBuYXZiYXJCYWNrID0gbnVsbDtcbiAgQGJpbmRhYmxlIG5hdmJhckJyYW5kID0gbnVsbDtcblxuICBpc1ZpZXcgPSB0cnVlO1xuICBjbGFzc05hbWUgPSAnYWktdmlldyc7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgbGF5b3V0Q29uZmlnLCBjaGFubmVsKSB7XG4gICAgdGhpcy5lbGVtZW50ICAgICAgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCAgICAgID0gY2hhbm5lbDtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyICA9IG5ldyBWaWV3Q29udHJvbGxlckVsZW1lbnQodGhpcyk7XG4gICAgdGhpcy5sYXlvdXRDb25maWcgPSBsYXlvdXRDb25maWc7XG4gIH1cblxuICBjcmVhdGVkKHZpZXcpIHtcbiAgICBjb25zb2xlLmxvZyh2aWV3KVxuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuY3JlYXRlZCh2aWV3KTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyLnNldEl0ZW0oJ2VsZW1lbnQnLCB0aGlzLnZpZXdDb250ZW50KTtcbiAgICB0aGlzLmVuYWJsZU5hdmJhciA9IHRoaXMuZW5hYmxlTmF2YmFyIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2VuYWJsZS1uYXZiYXInKTtcblxuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuYmluZChiaW5kaW5nQ29udGV4dCk7XG4gIH1cblxuICBfY3JlYXRlTmF2YmFySW5zdHJ1Y3Rpb24oKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICBpZiAodGhpcy5uYXZiYXJCYWNrKSBvcHRpb25zLmxlZnQgPSBuZXcgTGVmdE5hdih7bmF2aWdhdGVCYWNrOnRydWV9KTtcbiAgICBpZiAodGhpcy5uYXZiYXJCcmFuZCkgb3B0aW9ucy5icmFuZCA9IHRoaXMubmF2YmFyQnJhbmQ7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5lbmFibGVOYXZiYXIpIHtcbiAgICAgIGxldCBpbnN0cnVjdGlvbiA9IHRoaXMuX2NyZWF0ZU5hdmJhckluc3RydWN0aW9uKCk7XG4gICAgICB0aGlzLm5hdmJhci5jb25maWcgPSBpbnN0cnVjdGlvbjtcbiAgICB9XG4gICAgdGhpcy5iYWNrd2FyZEhhbmRsZXIgPSB0aGlzLmNoYW5uZWwuc3Vic2NyaWJlKCduYXZpZ2F0aW5nOmJhY2snLCB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmV2ZXJzZS1hbmltYXRpb24nKSlcbiAgICB0aGlzLmZvcndhcmRIYW5kbGVyID0gdGhpcy5jaGFubmVsLnN1YnNjcmliZSgnbmF2aWdhdGluZzpmb3J3YXJkJywgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JldmVyc2UtYW5pbWF0aW9uJykpXG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLmJhY2t3YXJkSGFuZGxlci5kaXNwb3NlKCk7XG4gICAgdGhpcy5mb3J3YXJkSGFuZGxlci5kaXNwb3NlKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gIH1cblxuICBuYXZiYXJDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHRoaXMudmlld0NvbnRyb2xsZXIuc2V0SXRlbSgnbmF2YmFyJywgdmFsdWUsIG9sZFZhbHVlKVxuICB9XG5cbiAgdGFiYmFyQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB0aGlzLnZpZXdDb250cm9sbGVyLnNldEl0ZW0oJ3RhYmJhcicsIHZhbHVlLCBvbGRWYWx1ZSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
