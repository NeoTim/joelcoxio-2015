System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, ArticleHeader;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      ArticleHeader = (function () {
        var _instanceInitializers = {};

        function ArticleHeader() {
          _classCallCheck(this, ArticleHeader);

          _defineDecoratedPropertyDescriptor(this, 'date', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'link', _instanceInitializers);
        }

        _createDecoratedClass(ArticleHeader, [{
          key: 'date',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'link',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return ArticleHeader;
      })();

      _export('ArticleHeader', ArticleHeader);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2l0ZS9hcnRpY2xlLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsYUFBYTs7Ozs7Ozs7OzttQ0FGbEIsUUFBUTs7O0FBRUgsbUJBQWE7OztpQkFBYixhQUFhO2dDQUFiLGFBQWE7Ozs7Ozs7OEJBQWIsYUFBYTs7dUJBQ3ZCLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBUSxJQUFJOzs7OztlQUZWLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9zaXRlL2FydGljbGUtaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZUhlYWRlciB7XG4gIEBiaW5kYWJsZSBkYXRlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGxpbmsgPSBudWxsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
