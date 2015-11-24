System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, SiteArticle;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      SiteArticle = (function () {
        var _instanceInitializers = {};

        function SiteArticle() {
          _classCallCheck(this, SiteArticle);

          _defineDecoratedPropertyDescriptor(this, 'isRow', _instanceInitializers);

          this.directionClass = 'is-column';
        }

        _createDecoratedClass(SiteArticle, [{
          key: 'isRowChanged',
          value: function isRowChanged(value) {
            this.directionClass = value ? 'is-row' : 'is-column';
          }
        }, {
          key: 'isRow',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return SiteArticle;
      })();

      _export('SiteArticle', SiteArticle);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2l0ZS9zaXRlLWFydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLFdBQVc7Ozs7Ozs7Ozs7bUNBRmhCLFFBQVE7OztBQUVILGlCQUFXOzs7aUJBQVgsV0FBVztnQ0FBWCxXQUFXOzs7O2VBR3RCLGNBQWMsR0FBRyxXQUFXOzs7OEJBSGpCLFdBQVc7O2lCQUtWLHNCQUFDLEtBQUssRUFBRTtBQUNsQixnQkFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQztXQUN0RDs7O3VCQU5BLFFBQVE7O21CQUFTLElBQUk7Ozs7O2VBRFgsV0FBVyIsImZpbGUiOiJjb21wb25lbnRzL3NpdGUvc2l0ZS1hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgU2l0ZUFydGljbGUge1xuICBAYmluZGFibGUgaXNSb3cgPSBudWxsO1xuXG4gIGRpcmVjdGlvbkNsYXNzID0gJ2lzLWNvbHVtbic7XG5cbiAgaXNSb3dDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5kaXJlY3Rpb25DbGFzcyA9IHZhbHVlID8gJ2lzLXJvdycgOiAnaXMtY29sdW1uJztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
