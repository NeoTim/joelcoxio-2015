/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-router', 'aurelia-event-aggregator', '../channel'], function (exports, _aureliaFramework, _aureliaPal, _aureliaRouter, _aureliaEventAggregator, _channel2) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var channel;

  var Navbar = (function () {
    function Navbar(channel, navbar) {
      _classCallCheck(this, Navbar);

      channel = channel;
      if (navbar) navbar.config = this;
      this.navbar = navbar;
      this.channel = channel;
    }

    _createClass(Navbar, [{
      key: 'configure',
      value: function configure(options) {
        Object.assign(this, options);
        return this;
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        if (!value && typeof key === 'string') {
          value = key;
          key = key.value;
        }
        this[key] = value;
      }
    }, {
      key: 'get',
      value: function get(key) {
        return this[key] || this;
      }
    }, {
      key: 'Title',
      value: function Title(options) {
        this.current.brand = options;
      }
    }, {
      key: 'LeftNav',
      value: (function (_LeftNav) {
        function LeftNav(_x) {
          return _LeftNav.apply(this, arguments);
        }

        LeftNav.toString = function () {
          return _LeftNav.toString();
        };

        return LeftNav;
      })(function (options) {
        return new LeftNav(options);
      })
    }, {
      key: 'RightNav',
      value: (function (_RightNav) {
        function RightNav() {
          return _RightNav.apply(this, arguments);
        }

        RightNav.toString = function () {
          return _RightNav.toString();
        };

        return RightNav;
      })(function () {
        return new RightNav(options);
      })
    }]);

    return Navbar;
  })();

  exports.Navbar = Navbar;

  var NavbarNav = function NavbarNav(options) {
    _classCallCheck(this, NavbarNav);

    this.navigateBack = false;
    this.navigate = undefined;
    this.aicon = undefined;
    this.key = undefined;

    Object.assign(options, this);
  };

  exports.NavbarNav = NavbarNav;

  var LeftNav = (function (_NavbarNav) {
    _inherits(LeftNav, _NavbarNav);

    function LeftNav(options) {
      _classCallCheck(this, LeftNav);

      _get(Object.getPrototypeOf(LeftNav.prototype), 'constructor', this).call(this, options);this.navigateBack = true;
      this.aicon = 'ios-arrow-left';
      this.key = 'left';
    }

    return LeftNav;
  })(NavbarNav);

  exports.LeftNav = LeftNav;

  var RightNav = (function (_NavbarNav2) {
    _inherits(RightNav, _NavbarNav2);

    function RightNav(options) {
      _classCallCheck(this, RightNav);

      _get(Object.getPrototypeOf(RightNav.prototype), 'constructor', this).call(this, options);this.key = 'right';
    }

    return RightNav;
  })(NavbarNav);

  exports.RightNav = RightNav;

  var NavbarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(NavbarElement, [{
      key: 'size',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'slot',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'nav',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'router',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'right',
      decorators: [(0, _aureliaFramework.child)('[right]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'left',
      decorators: [(0, _aureliaFramework.child)('[left]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'center',
      decorators: [(0, _aureliaFramework.child)('[center]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'brand',
      decorators: [(0, _aureliaFramework.child)('[brand]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function NavbarElement(element, container, _channel, router) {
      _classCallCheck(this, _NavbarElement);

      _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'slot', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'nav', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'right', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'left', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'center', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'brand', _instanceInitializers);

      this.config = {};
      this.fragment = _aureliaPal.DOM.createDocumentFragment();
      this.placeholder = _aureliaPal.DOM.createElement('navbar-placeholder');

      channel = _channel;
      this.element = element;
      this.container = container;
      this.config = {};

      this.navigateBack = function () {
        router.history.navigateBack();
      };
    }

    _createDecoratedClass(NavbarElement, [{
      key: 'created',
      value: function created(view) {
        this.view = this.element.au.controller.view;
      }
    }, {
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'detached',
      value: function detached() {}
    }, {
      key: 'configure',
      value: function configure() {}
    }, {
      key: 'hide',
      value: function hide() {
        return Velocity(this.element, {
          translateY: '-100%'
        });
      }
    }, {
      key: 'show',
      value: function show() {
        return Velocity(this.element, {
          translateY: '0'
        });
      }
    }], null, _instanceInitializers);

    var _NavbarElement = NavbarElement;
    NavbarElement = (0, _aureliaFramework.inject)(Element, _aureliaFramework.Container, _channel2.InterfaceChannel, _aureliaRouter.Router)(NavbarElement) || NavbarElement;
    NavbarElement = (0, _aureliaFramework.customElement)('ai-nav-bar')(NavbarElement) || NavbarElement;
    return NavbarElement;
  })();

  exports.NavbarElement = NavbarElement;
});
//# sourceMappingURL=data:application/json;base64,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QUZoQixNQUFNLENBdUV1QyxDQUN4QyxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBRnpCLHNCQXhFa0IsYUFBYSxFQXdFakIsWUFBWSxDQUFDLENBRWYsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImVsZW1lbnRzL25hdi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RyYW5zaWVudCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgQ29udGFpbmVyLCBjaGlsZH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5cbnZhciBjaGFubmVsO1xuXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXIge1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwsIG5hdmJhcikge1xuICAgIGNoYW5uZWwgPSBjaGFubmVsO1xuICAgIGlmIChuYXZiYXIpIG5hdmJhci5jb25maWcgPSB0aGlzO1xuICAgIHRoaXMubmF2YmFyID0gbmF2YmFyO1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICBjb25maWd1cmUob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUgJiYgdHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0ga2V5O1xuICAgICAga2V5ID0ga2V5LnZhbHVlXG4gICAgfVxuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICB9XG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpc1trZXldIHx8IHRoaXM7XG4gIH1cblxuICBUaXRsZShvcHRpb25zKSB7XG4gICAgdGhpcy5jdXJyZW50LmJyYW5kID0gb3B0aW9ucztcbiAgfVxuXG4gIExlZnROYXYob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgTGVmdE5hdihvcHRpb25zKTtcbiAgfVxuXG4gIFJpZ2h0TmF2KCl7XG4gICAgcmV0dXJuIG5ldyBSaWdodE5hdihvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmF2YmFyTmF2IHtcbiAgbmF2aWdhdGVCYWNrID0gZmFsc2U7XG4gIG5hdmlnYXRlID0gdW5kZWZpbmVkO1xuICBhaWNvbiA9IHVuZGVmaW5lZDtcbiAga2V5ID0gdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGVmdE5hdiBleHRlbmRzIE5hdmJhck5hdiB7XG4gIG5hdmlnYXRlQmFjayA9IHRydWU7XG4gIGFpY29uID0gJ2lvcy1hcnJvdy1sZWZ0JztcbiAga2V5ID0gJ2xlZnQnO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7c3VwZXIob3B0aW9ucyl9XG59XG5cbmV4cG9ydCBjbGFzcyBSaWdodE5hdiBleHRlbmRzIE5hdmJhck5hdiB7XG4gIGtleSA9ICdyaWdodCc7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtzdXBlcihvcHRpb25zKX1cbn1cblxuXG5cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLW5hdi1iYXInKVxuQGluamVjdChFbGVtZW50LCBDb250YWluZXIsIEludGVyZmFjZUNoYW5uZWwsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBOYXZiYXJFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHNpemUgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBzbG90ICAgPSBudWxsO1xuICBAYmluZGFibGUgbmF2ICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHJvdXRlciA9IG51bGw7XG5cbiAgQGNoaWxkKCdbcmlnaHRdJykgcmlnaHQgPSBudWxsO1xuICBAY2hpbGQoJ1tsZWZ0XScpIGxlZnQgPSBudWxsO1xuICBAY2hpbGQoJ1tjZW50ZXJdJykgY2VudGVyID0gbnVsbDtcbiAgQGNoaWxkKCdbYnJhbmRdJykgYnJhbmQgPSBudWxsO1xuXG4gIGNvbmZpZyAgICAgID0ge307XG4gIGZyYWdtZW50ICAgID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgcGxhY2Vob2xkZXIgPSBET00uY3JlYXRlRWxlbWVudCgnbmF2YmFyLXBsYWNlaG9sZGVyJyk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyLCBfY2hhbm5lbCwgcm91dGVyKSB7XG4gICAgY2hhbm5lbCA9IF9jaGFubmVsO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb25maWcgPSB7fTtcblxuICAgIHRoaXMubmF2aWdhdGVCYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICByb3V0ZXIuaGlzdG9yeS5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmVsZW1lbnQuYXUuY29udHJvbGxlci52aWV3O1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpe31cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBWZWxvY2l0eSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIHRyYW5zbGF0ZVk6ICctMTAwJScsXG4gICAgfSlcbiAgfVxuICBzaG93KCkge1xuICAgIHJldHVybiBWZWxvY2l0eSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIHRyYW5zbGF0ZVk6ICcwJyxcbiAgICB9KVxuICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
