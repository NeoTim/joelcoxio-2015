System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, AsideLink;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      AsideLink = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(AsideLink, [{
          key: 'link',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AsideLink(element) {
          _classCallCheck(this, _AsideLink);

          _defineDecoratedPropertyDescriptor(this, 'link', _instanceInitializers);

          this.element = element;
        }

        var _AsideLink = AsideLink;
        AsideLink = inject(Element)(AsideLink) || AsideLink;
        return AsideLink;
      })();

      _export('AsideLink', AsideLink);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNpZGUtYmFyL2FzaWRlLWxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dCQUdhLFNBQVM7Ozs7Ozs7Ozs7bUNBSGQsUUFBUTtpQ0FBRSxNQUFNOzs7QUFHWCxlQUFTOzs7OEJBQVQsU0FBUzs7dUJBQ25CLFFBQVE7O21CQUFRLElBQUk7Ozs7O0FBRVYsaUJBSEEsU0FBUyxDQUdSLE9BQU8sRUFBRTs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3lCQUxVLFNBQVM7QUFBVCxpQkFBUyxHQURyQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTIiwiZmlsZSI6ImNvbXBvbmVudHMvYXNpZGUtYmFyL2FzaWRlLWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEFzaWRlTGlua3tcbiAgQGJpbmRhYmxlIGxpbmsgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
