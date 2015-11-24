/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var LayoutConfig = (function () {
    function LayoutConfig() {
      _classCallCheck(this, LayoutConfig);

      this.slots = {};
      this.templates = {};
      this.fragment = _aureliaPal.DOM.createDocumentFragment();
      this.view = undefined;
    }

    _createClass(LayoutConfig, [{
      key: 'registerView',
      value: function registerView(view) {
        this.view = view;
      }
    }, {
      key: 'registerTemplate',
      value: function registerTemplate(template, name) {
        name = name || 'default';
        this.templates[name] = template;
      }
    }, {
      key: 'registerViewSlot',
      value: function registerViewSlot(slot, name) {
        name = name || 'default';
        this.slots[name] = slot;
      }
    }, {
      key: 'add',
      value: function add(name, viewModel, view) {
        if (!view && name in this.templates) {
          view = this.templates[name].view;
        }

        if (name in this.view) {
          this.view[name] = view;
        }
      }
    }]);

    return LayoutConfig;
  })();

  exports.LayoutConfig = LayoutConfig;

  var LayoutElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(LayoutElement, [{
      key: 'navabr',
      decorators: [(0, _aureliaFramework.child)('ai-navbar')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function LayoutElement(element) {
      _classCallCheck(this, _LayoutElement);

      _defineDecoratedPropertyDescriptor(this, 'navabr', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(LayoutElement, [{
      key: 'created',
      value: function created() {}
    }, {
      key: 'bind',
      value: function bind() {}
    }, {
      key: 'unbind',
      value: function unbind() {}
    }, {
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'detached',
      value: function detached() {}
    }, {
      key: 'navbarChanged',
      value: function navbarChanged() {
        if (this.navbar) {
          this.element.insertBefore(this.navbar.placeholder, this.navbar.element);
        }
      }
    }], null, _instanceInitializers);

    var _LayoutElement = LayoutElement;
    LayoutElement = (0, _aureliaFramework.inject)(Element)(LayoutElement) || LayoutElement;
    LayoutElement = (0, _aureliaFramework.customElement)('ai-layout')(LayoutElement) || LayoutElement;
    return LayoutElement;
  })();

  exports.LayoutElement = LayoutElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUdhLFlBQVk7YUFBWixZQUFZOzRCQUFaLFlBQVk7O1dBQ3ZCLEtBQUssR0FBRyxFQUFFO1dBQ1YsU0FBUyxHQUFHLEVBQUU7V0FDZCxRQUFRLEdBQUcsWUFMTCxHQUFHLENBS00sc0JBQXNCLEVBQUU7V0FDdkMsSUFBSSxHQUFHLFNBQVM7OztpQkFKTCxZQUFZOzthQU1YLHNCQUFDLElBQUksRUFBRTtBQUNqQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztPQUNsQjs7O2FBRWUsMEJBQUMsUUFBUSxFQUFFLElBQUksRUFBRTtBQUMvQixZQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQTtBQUN4QixZQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztPQUNqQzs7O2FBRWUsMEJBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUMzQixZQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQTtBQUN4QixZQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztPQUN6Qjs7O2FBRUUsYUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtBQUN6QixZQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ25DLGNBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNsQzs7QUFFRCxZQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO09BQ0Y7OztXQTVCVSxZQUFZOzs7OztNQWlDWixhQUFhOzs7OzBCQUFiLGFBQWE7O21CQUV2QixzQkF0Q2dELEtBQUssRUFzQy9DLFdBQVcsQ0FBQzs7ZUFBVSxJQUFJOzs7OztBQUV0QixhQUpBLGFBQWEsQ0FJWixPQUFPLEVBQUU7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzswQkFOVSxhQUFhOzthQVFqQixtQkFBRyxFQUFFOzs7YUFDUixnQkFBRyxFQUFFOzs7YUFDSCxrQkFBRyxFQUFFOzs7YUFFSCxvQkFBRyxFQUFFOzs7YUFDTCxvQkFBRyxFQUFFOzs7YUFFQSx5QkFBRztBQUNkLFlBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNmLGNBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekU7T0FDRjs7O3lCQW5CVSxhQUFhO0FBQWIsaUJBQWEsR0FEekIsc0JBbkNnQyxNQUFNLEVBbUMvQixPQUFPLENBQUMsQ0FDSCxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBRnpCLHNCQWxDTyxhQUFhLEVBa0NOLFdBQVcsQ0FBQyxDQUVkLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgVmlld1Nsb3QsIGNoaWxkfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29uZmlnIHtcbiAgc2xvdHMgPSB7fTtcbiAgdGVtcGxhdGVzID0ge307XG4gIGZyYWdtZW50ID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmlldyA9IHVuZGVmaW5lZDtcblxuICByZWdpc3RlclZpZXcodmlldykge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gIH1cblxuICByZWdpc3RlclRlbXBsYXRlKHRlbXBsYXRlLCBuYW1lKSB7XG4gICAgbmFtZSA9IG5hbWUgfHwgJ2RlZmF1bHQnXG4gICAgdGhpcy50ZW1wbGF0ZXNbbmFtZV0gPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyVmlld1Nsb3Qoc2xvdCwgbmFtZSkge1xuICAgIG5hbWUgPSBuYW1lIHx8ICdkZWZhdWx0J1xuICAgIHRoaXMuc2xvdHNbbmFtZV0gPSBzbG90O1xuICB9XG5cbiAgYWRkKG5hbWUsIHZpZXdNb2RlbCwgdmlldykge1xuICAgIGlmICghdmlldyAmJiBuYW1lIGluIHRoaXMudGVtcGxhdGVzKSB7XG4gICAgICB2aWV3ID0gdGhpcy50ZW1wbGF0ZXNbbmFtZV0udmlldztcbiAgICB9XG5cbiAgICBpZiAobmFtZSBpbiB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMudmlld1tuYW1lXSA9IHZpZXc7XG4gICAgfVxuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdhaS1sYXlvdXQnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIExheW91dEVsZW1lbnQge1xuXG4gIEBjaGlsZCgnYWktbmF2YmFyJykgbmF2YWJyID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBiaW5kKCkge31cbiAgdW5iaW5kKCkge31cblxuICBhdHRhY2hlZCgpIHt9XG4gIGRldGFjaGVkKCkge31cblxuICBuYXZiYXJDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLm5hdmJhcikge1xuICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLm5hdmJhci5wbGFjZWhvbGRlciwgdGhpcy5uYXZiYXIuZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
