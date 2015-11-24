/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-router', 'aurelia-event-aggregator', '../channel'], function (exports, _aureliaFramework, _aureliaPal, _aureliaRouter, _aureliaEventAggregator, _channel2) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AINavbarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AINavbarElement, [{
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

    function AINavbarElement(element, container, _channel, router) {
      _classCallCheck(this, _AINavbarElement);

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

    _createDecoratedClass(AINavbarElement, [{
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

    var _AINavbarElement = AINavbarElement;
    AINavbarElement = (0, _aureliaFramework.inject)(Element, _aureliaFramework.Container, _channel2.InterfaceChannel, _aureliaRouter.Router)(AINavbarElement) || AINavbarElement;
    AINavbarElement = (0, _aureliaFramework.customElement)('ai-navbar')(AINavbarElement) || AINavbarElement;
    return AINavbarElement;
  })();

  exports.AINavbarElement = AINavbarElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFRYSxlQUFlOzs7OzBCQUFmLGVBQWU7O3FDQVJNLFFBQVE7O2VBU3JCLElBQUk7Ozs7O3FDQVRTLFFBQVE7O2VBVXJCLElBQUk7Ozs7O3FDQVZTLFFBQVE7O2VBV3JCLElBQUk7Ozs7O3FDQVhTLFFBQVE7O2VBWXJCLElBQUk7Ozs7O21CQUV0QixzQkFkNEQsS0FBSyxFQWMzRCxTQUFTLENBQUM7O2VBQVMsSUFBSTs7Ozs7bUJBQzdCLHNCQWY0RCxLQUFLLEVBZTNELFFBQVEsQ0FBQzs7ZUFBUSxJQUFJOzs7OzttQkFDM0Isc0JBaEI0RCxLQUFLLEVBZ0IzRCxVQUFVLENBQUM7O2VBQVUsSUFBSTs7Ozs7bUJBQy9CLHNCQWpCNEQsS0FBSyxFQWlCM0QsU0FBUyxDQUFDOztlQUFTLElBQUk7Ozs7O0FBTW5CLGFBZkEsZUFBZSxDQWVkLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQUpsRCxNQUFNLEdBQVEsRUFBRTtXQUNoQixRQUFRLEdBQU0sWUFuQlIsR0FBRyxDQW1CUyxzQkFBc0IsRUFBRTtXQUMxQyxXQUFXLEdBQUcsWUFwQlIsR0FBRyxDQW9CUyxhQUFhLENBQUMsb0JBQW9CLENBQUM7O0FBR25ELGFBQU8sR0FBRyxRQUFRLENBQUM7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsVUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWpCLFVBQUksQ0FBQyxZQUFZLEdBQUcsWUFBVztBQUM3QixjQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO09BQy9CLENBQUE7S0FDRjs7MEJBeEJVLGVBQWU7O2FBMEJuQixpQkFBQyxJQUFJLEVBQUU7QUFDWixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7T0FDN0M7OzthQUVPLG9CQUFHLEVBQ1Y7OzthQUVPLG9CQUFHLEVBQ1Y7OzthQUVRLHFCQUFFLEVBQUU7OzthQUVULGdCQUFHO0FBQ0wsZUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUM1QixvQkFBVSxFQUFFLE9BQU87U0FDcEIsQ0FBQyxDQUFBO09BQ0g7OzthQUNHLGdCQUFHO0FBQ0wsZUFBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUM1QixvQkFBVSxFQUFFLEdBQUc7U0FDaEIsQ0FBQyxDQUFBO09BQ0g7OzsyQkEvQ1UsZUFBZTtBQUFmLG1CQUFlLEdBRDNCLHNCQVAyQyxNQUFNLEVBTzFDLE9BQU8sb0JBUHFDLFNBQVMsWUFJckQsZ0JBQWdCLGlCQUZoQixNQUFNLENBS3VDLENBQ3hDLGVBQWUsS0FBZixlQUFlO0FBQWYsbUJBQWUsR0FGM0Isc0JBTmtCLGFBQWEsRUFNakIsV0FBVyxDQUFDLENBRWQsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0cmFuc2llbnQsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIENvbnRhaW5lciwgY2hpbGR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktbmF2YmFyJylcbkBpbmplY3QoRWxlbWVudCwgQ29udGFpbmVyLCBJbnRlcmZhY2VDaGFubmVsLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgQUlOYXZiYXJFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHNpemUgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBzbG90ICAgPSBudWxsO1xuICBAYmluZGFibGUgbmF2ICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHJvdXRlciA9IG51bGw7XG5cbiAgQGNoaWxkKCdbcmlnaHRdJykgcmlnaHQgPSBudWxsO1xuICBAY2hpbGQoJ1tsZWZ0XScpIGxlZnQgPSBudWxsO1xuICBAY2hpbGQoJ1tjZW50ZXJdJykgY2VudGVyID0gbnVsbDtcbiAgQGNoaWxkKCdbYnJhbmRdJykgYnJhbmQgPSBudWxsO1xuXG4gIGNvbmZpZyAgICAgID0ge307XG4gIGZyYWdtZW50ICAgID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgcGxhY2Vob2xkZXIgPSBET00uY3JlYXRlRWxlbWVudCgnbmF2YmFyLXBsYWNlaG9sZGVyJyk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyLCBfY2hhbm5lbCwgcm91dGVyKSB7XG4gICAgY2hhbm5lbCA9IF9jaGFubmVsO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb25maWcgPSB7fTtcblxuICAgIHRoaXMubmF2aWdhdGVCYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICByb3V0ZXIuaGlzdG9yeS5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmVsZW1lbnQuYXUuY29udHJvbGxlci52aWV3O1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgfVxuXG4gIGNvbmZpZ3VyZSgpe31cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBWZWxvY2l0eSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIHRyYW5zbGF0ZVk6ICctMTAwJScsXG4gICAgfSlcbiAgfVxuICBzaG93KCkge1xuICAgIHJldHVybiBWZWxvY2l0eSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIHRyYW5zbGF0ZVk6ICcwJyxcbiAgICB9KVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
