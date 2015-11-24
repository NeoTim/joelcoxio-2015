System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, SiteHeader;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      SiteHeader = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(SiteHeader, [{
          key: 'title',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'subtitle',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'isScrolled',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function SiteHeader(element) {
          _classCallCheck(this, _SiteHeader);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'subtitle', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'isScrolled', _instanceInitializers);

          this.element = element;
        }

        _createDecoratedClass(SiteHeader, [{
          key: 'attached',
          value: function attached() {}
        }, {
          key: 'isScrolledChanged',
          value: function isScrolledChanged() {
            console.log('Is-Scrolled');
          }
        }], null, _instanceInitializers);

        var _SiteHeader = SiteHeader;
        SiteHeader = inject(Element)(SiteHeader) || SiteHeader;
        return SiteHeader;
      })();

      _export('SiteHeader', SiteHeader);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2l0ZS9zaXRlLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0JBR2EsVUFBVTs7Ozs7Ozs7OzttQ0FIZixRQUFRO2lDQUFFLE1BQU07OztBQUdYLGdCQUFVOzs7OzhCQUFWLFVBQVU7O3VCQUNwQixRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVksSUFBSTs7Ozs7dUJBQ3hCLFFBQVE7O21CQUFjLElBQUk7Ozs7O0FBRWhCLGlCQUxBLFVBQVUsQ0FLVCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBUFUsVUFBVTs7aUJBU2Isb0JBQUcsRUFDVjs7O2lCQUVnQiw2QkFBRztBQUNsQixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztXQUM1Qjs7OzBCQWRVLFVBQVU7QUFBVixrQkFBVSxHQUR0QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVIiwiZmlsZSI6ImNvbXBvbmVudHMvc2l0ZS9zaXRlLWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgU2l0ZUhlYWRlciB7XG4gIEBiaW5kYWJsZSB0aXRsZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBzdWJ0aXRsZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpc1Njcm9sbGVkID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICB9XG5cbiAgaXNTY3JvbGxlZENoYW5nZWQoKSB7XG4gICAgY29uc29sZS5sb2coJ0lzLVNjcm9sbGVkJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
