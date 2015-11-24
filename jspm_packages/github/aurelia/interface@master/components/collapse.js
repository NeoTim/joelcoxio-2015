/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function HandleTransition(element, trigger) {
    return new Promise(function (resolve) {
      element.addEventListener('transitionend', handle);
      trigger();
      function handle() {
        element.removeEventListener('transitionend', handle);
        resolve();
      }
    });
  }

  var CollapseComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(CollapseComponent, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'view',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'viewModel',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function CollapseComponent(element) {
      _classCallCheck(this, _CollapseComponent);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'viewModel', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(CollapseComponent, [{
      key: '_runTransition',
      value: function _runTransition(value) {
        var _this = this;

        var height = (value ? this.container.clientHeight || this.container.style.height : 0) + 'px';
        height = height.replace(/pxpx/g, 'px');
        return HandleTransition(this.element, function () {
          console.log(height);
          _this.element.style.height = height;
        });
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        var _this2 = this;

        this._runTransition(value).then(function () {
          _this2.element.classList[value ? 'add' : 'remove']('is-active');
        });
      }
    }, {
      key: 'open',
      value: function open() {
        this.active = true;
      }
    }, {
      key: 'close',
      value: function close() {
        this.active = false;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this.active = !this.active;
      }
    }], null, _instanceInitializers);

    var _CollapseComponent = CollapseComponent;
    CollapseComponent = (0, _aureliaFramework.inject)(Element)(CollapseComponent) || CollapseComponent;
    CollapseComponent = (0, _aureliaFramework.customElement)('ai-collapse')(CollapseComponent) || CollapseComponent;
    return CollapseComponent;
  })();

  exports.CollapseComponent = CollapseComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLFdBQVMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUMxQyxXQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLGFBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEQsYUFBTyxFQUFFLENBQUM7QUFDVixlQUFTLE1BQU0sR0FBRztBQUNoQixlQUFPLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ3BELGVBQU8sRUFBRSxDQUFDO09BQ1g7S0FDRixDQUFDLENBQUE7R0FDSDs7TUFJWSxpQkFBaUI7Ozs7MEJBQWpCLGlCQUFpQjs7cUNBZlAsUUFBUTs7ZUFnQlYsS0FBSzs7Ozs7cUNBaEJILFFBQVE7O2VBaUJaLEtBQUs7Ozs7O3FDQWpCRCxRQUFROztlQWtCUCxLQUFLOzs7OztBQUVoQixhQUxBLGlCQUFpQixDQUtoQixPQUFPLEVBQUU7Ozs7Ozs7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBUFUsaUJBQWlCOzthQVNkLHdCQUFDLEtBQUssRUFBRTs7O0FBQ3BCLFlBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBSSxDQUFDLENBQUEsR0FBSSxJQUFJLENBQUE7QUFDOUYsY0FBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLGVBQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFNO0FBQzFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ25CLGdCQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUNwQyxDQUFDLENBQUE7T0FDSDs7O2FBRVksdUJBQUMsS0FBSyxFQUFFOzs7QUFDbkIsWUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBSztBQUNuQyxpQkFBSyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0QsQ0FBQyxDQUFDO09BQ0o7OzthQUVHLGdCQUFHO0FBQUMsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7T0FBQzs7O2FBQ3RCLGlCQUFHO0FBQUMsWUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7T0FBQzs7O2FBQ3ZCLGtCQUFHO0FBQUMsWUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7T0FBQzs7OzZCQTFCMUIsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUQ3QixzQkFkZ0MsTUFBTSxFQWMvQixPQUFPLENBQUMsQ0FDSCxpQkFBaUIsS0FBakIsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUY3QixzQkFiTyxhQUFhLEVBYU4sYUFBYSxDQUFDLENBRWhCLGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29sbGFwc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZnVuY3Rpb24gSGFuZGxlVHJhbnNpdGlvbihlbGVtZW50LCB0cmlnZ2VyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGUpO1xuICAgIHRyaWdnZXIoKTtcbiAgICBmdW5jdGlvbiBoYW5kbGUoKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGUpXG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktY29sbGFwc2UnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlQ29tcG9uZW50IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IGZhbHNlO1xuICBAYmluZGFibGUgdmlldyA9IGZhbHNlO1xuICBAYmluZGFibGUgdmlld01vZGVsID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBfcnVuVHJhbnNpdGlvbih2YWx1ZSkge1xuICAgIGxldCBoZWlnaHQgPSAodmFsdWUgPyAodGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IHx8IHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCkgOiAwKSArICdweCdcbiAgICBoZWlnaHQgPSBoZWlnaHQucmVwbGFjZSgvcHhweC9nLCAncHgnKTtcbiAgICByZXR1cm4gSGFuZGxlVHJhbnNpdGlvbih0aGlzLmVsZW1lbnQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGhlaWdodClcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfSlcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLl9ydW5UcmFuc2l0aW9uKHZhbHVlKS50aGVuKCgpPT4ge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW4oKSB7dGhpcy5hY3RpdmUgPSB0cnVlfVxuICBjbG9zZSgpIHt0aGlzLmFjdGl2ZSA9IGZhbHNlfVxuICB0b2dnbGUoKSB7dGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmV9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
