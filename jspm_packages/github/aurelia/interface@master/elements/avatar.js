/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-avatar';

  var AvatarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AvatarElement, [{
      key: 'src',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AvatarElement(element) {
      _classCallCheck(this, _AvatarElement);

      _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers);

      element.className += ' ' + className;
      this.element = element;
    }

    _createDecoratedClass(AvatarElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _AvatarElement = AvatarElement;
    AvatarElement = (0, _aureliaFramework.inject)(Element)(AvatarElement) || AvatarElement;
    AvatarElement = (0, _aureliaFramework.inlineView)('<template><div class="avatar-wrapper"><img src.bind="src"/></div></template>')(AvatarElement) || AvatarElement;
    AvatarElement = (0, _aureliaFramework.customElement)('ai-avatar')(AvatarElement) || AvatarElement;
    return AvatarElement;
  })();

  exports.AvatarElement = AvatarElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2F2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOztNQUtqQixhQUFhOzs7OzBCQUFiLGFBQWE7O3FDQVBTLFFBQVE7O2VBUXpCLElBQUk7Ozs7O0FBRVQsYUFIQSxhQUFhLENBR1osT0FBTyxFQUFFOzs7OztBQUNuQixhQUFPLENBQUMsU0FBUyxVQUFRLFNBQVMsQUFBRSxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzswQkFOVSxhQUFhOzthQVFoQixvQkFBRSxFQUFFOzs7eUJBUkQsYUFBYTtBQUFiLGlCQUFhLEdBRHpCLHNCQU40QyxNQUFNLEVBTTNDLE9BQU8sQ0FBQyxDQUNILGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FGekIsc0JBTE8sVUFBVSxFQUtOLDhFQUE4RSxDQUFDLENBRTlFLGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FIekIsc0JBSm1CLGFBQWEsRUFJbEIsV0FBVyxDQUFDLENBR2QsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImVsZW1lbnRzL2F2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5saW5lVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5jb25zdCBjbGFzc05hbWUgPSAnYWktYXZhdGFyJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWF2YXRhcicpXG5AaW5saW5lVmlldygnPHRlbXBsYXRlPjxkaXYgY2xhc3M9XCJhdmF0YXItd3JhcHBlclwiPjxpbWcgc3JjLmJpbmQ9XCJzcmNcIi8+PC9kaXY+PC90ZW1wbGF0ZT4nKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEF2YXRhckVsZW1lbnQge1xuICBAYmluZGFibGUgc3JjID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hlZCgpe31cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
