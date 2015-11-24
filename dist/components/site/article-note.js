System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, ArticleNote;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      ArticleNote = (function () {
        var _instanceInitializers = {};

        function ArticleNote() {
          _classCallCheck(this, ArticleNote);

          _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);
        }

        _createDecoratedClass(ArticleNote, [{
          key: 'icon',
          decorators: [bindable],
          initializer: function initializer() {
            return 'adjust';
          },
          enumerable: true
        }], null, _instanceInitializers);

        return ArticleNote;
      })();

      _export('ArticleNote', ArticleNote);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2l0ZS9hcnRpY2xlLW5vdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLFdBQVc7Ozs7Ozs7Ozs7bUNBRmhCLFFBQVE7OztBQUVILGlCQUFXOzs7aUJBQVgsV0FBVztnQ0FBWCxXQUFXOzs7Ozs4QkFBWCxXQUFXOzt1QkFDckIsUUFBUTs7bUJBQVEsUUFBUTs7Ozs7ZUFEZCxXQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvc2l0ZS9hcnRpY2xlLW5vdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBBcnRpY2xlTm90ZSB7XG4gIEBiaW5kYWJsZSBpY29uID0gJ2FkanVzdCc7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
