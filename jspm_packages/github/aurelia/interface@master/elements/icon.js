/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var faRegex = /^fa\-/;
  function faPrefix(icon, isfa) {
    isfa = isfa || isFa(icon);
    return isfa ? icon : 'fa-' + icon;
  }

  function isFa(icon) {
    return faRegex.test(icon);
  }

  var aiRegex = /ai\-/gi;
  function aiPrefix(className) {
    return aiRegex.test(className) ? className : 'ai-' + className;
  }

  var IconElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(IconElement, [{
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'faIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'nextIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'next',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function IconElement(element) {
      _classCallCheck(this, _IconElement);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'faIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'nextIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'next', _instanceInitializers);

      this.taxtValue = null;
      this.className = 'ai-icon aicon';
      this.transformers = {
        scale: 1,
        rotate: 0,
        translateX: 0,
        translateY: 0,
        translateZ: 0
      };

      element.className += ' ' + this.className;
      this.element = element;
    }

    _createDecoratedClass(IconElement, [{
      key: 'attached',
      value: function attached() {
        if (!this.icon) {
          this.fetchIcon();
        }
        this.iel.setAttribute('data-text', this.textValue);
        this.iel.innerText = '';
      }
    }, {
      key: 'iconChanged',
      value: function iconChanged(icon) {
        this.iconClass = aiPrefix(icon.toLowerCase());
        this.actualClass = this.iconClass;
      }
    }, {
      key: 'nextIconChanged',
      value: function nextIconChanged(icon) {
        this.nextClass = aiPrefix(icon.toLowerCase());
      }
    }, {
      key: 'nextChanged',
      value: function nextChanged(value) {
        if (value) {
          this.element.style.transform = 'rotate(180deg)';
          this.actualClass = this.nextClass;
        } else {
          this.element.style.transform = 'rotate(0deg)';
          this.actualClass = this.iconClass;
        }
      }
    }, {
      key: 'fetchIcon',
      value: function fetchIcon() {
        var icon = '';
        icon = this.textValue || (this.iel ? this.iel.innerText : icon).toString().toLowerCase();
        this.textValue = icon;
        this.icon = icon;
      }
    }, {
      key: 'rotateChanged',
      value: function rotateChanged(rotate) {
        this.transformers.rotate = rotate;
        this.element.style.transform = this.transform;
      }
    }], null, _instanceInitializers);

    var _IconElement = IconElement;
    IconElement = (0, _aureliaFramework.inject)(Element)(IconElement) || IconElement;
    IconElement = (0, _aureliaFramework.inlineView)('<template class="${actualClass}"><i ref="iel"><content></content></i></template>')(IconElement) || IconElement;
    IconElement = (0, _aureliaFramework.customElement)('ai-icon')(IconElement) || IconElement;
    return IconElement;
  })();

  exports.IconElement = IconElement;
});
//# sourceMappingURL=data:application/json;base64,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QUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzRixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztPQUNsQjs7O2FBRVksdUJBQUMsTUFBTSxFQUFFO0FBQ3BCLFlBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNsQyxZQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztPQUMvQzs7O3VCQTVEVSxXQUFXO0FBQVgsZUFBVyxHQUR2QixzQkFsQmtDLE1BQU0sRUFrQmpDLE9BQU8sQ0FBQyxDQUNILFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUZ2QixzQkFqQk8sVUFBVSxFQWlCTixrRkFBa0YsQ0FBQyxDQUVsRixXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FIdkIsc0JBaEJtQixhQUFhLEVBZ0JsQixTQUFTLENBQUMsQ0FHWixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvaWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5saW5lVmlldywgY3VzdG9tRWxlbWVudCwgaW5qZWN0LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuY29uc3QgZmFSZWdleCA9IC9eZmFcXC0vO1xuZnVuY3Rpb24gZmFQcmVmaXgoaWNvbiwgaXNmYSkge1xuICBpc2ZhID0gaXNmYSB8fCBpc0ZhKGljb24pO1xuICByZXR1cm4gaXNmYSA/IGljb24gOiBgZmEtJHtpY29ufWA7XG59XG5cbmZ1bmN0aW9uIGlzRmEoaWNvbikge1xuICByZXR1cm4gZmFSZWdleC50ZXN0KGljb24pO1xufVxuXG5jb25zdCBhaVJlZ2V4ID0gL2FpXFwtL2dpO1xuZnVuY3Rpb24gYWlQcmVmaXgoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBhaVJlZ2V4LnRlc3QoY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSA6IGBhaS0ke2NsYXNzTmFtZX1gO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktaWNvbicpXG5AaW5saW5lVmlldygnPHRlbXBsYXRlIGNsYXNzPVwiJHthY3R1YWxDbGFzc31cIj48aSByZWY9XCJpZWxcIj48Y29udGVudD48L2NvbnRlbnQ+PC9pPjwvdGVtcGxhdGU+JylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBJY29uRWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlIGljb24gICA9IG51bGw7XG4gIEBiaW5kYWJsZSBmYUljb24gPSBudWxsO1xuICBAYmluZGFibGUgbmV4dEljb24gPSBudWxsO1xuICBAYmluZGFibGUgbmV4dCA9IG51bGw7XG5cbiAgdGF4dFZhbHVlID0gbnVsbDtcblxuICBjbGFzc05hbWUgPSAnYWktaWNvbiBhaWNvbic7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7dGhpcy5jbGFzc05hbWV9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgdHJhbnNmb3JtZXJzID0ge1xuICAgIHNjYWxlOiAxLFxuICAgIHJvdGF0ZTowLFxuICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgdHJhbnNsYXRlWTogMCxcbiAgICB0cmFuc2xhdGVaOiAwLFxuICB9O1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5pY29uKSB7XG4gICAgICB0aGlzLmZldGNoSWNvbigpO1xuICAgIH1cbiAgICB0aGlzLmllbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcsIHRoaXMudGV4dFZhbHVlKTtcbiAgICB0aGlzLmllbC5pbm5lclRleHQgPSAnJztcbiAgfVxuXG4gIGljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IGFpUHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5hY3R1YWxDbGFzcyA9IHRoaXMuaWNvbkNsYXNzO1xuICB9XG5cbiAgbmV4dEljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLm5leHRDbGFzcyA9IGFpUHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBuZXh0Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XG4gICAgICB0aGlzLmFjdHVhbENsYXNzID0gdGhpcy5uZXh0Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgIHRoaXMuYWN0dWFsQ2xhc3MgPSB0aGlzLmljb25DbGFzcztcbiAgICB9XG4gIH1cblxuICBmZXRjaEljb24oKSB7XG4gICAgbGV0IGljb24gPSAnJztcbiAgICBpY29uID0gdGhpcy50ZXh0VmFsdWUgfHwgKHRoaXMuaWVsID8gKHRoaXMuaWVsLmlubmVyVGV4dCkgOiBpY29uKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSBpY29uO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cblxuICByb3RhdGVDaGFuZ2VkKHJvdGF0ZSkge1xuICAgIHRoaXMudHJhbnNmb3JtZXJzLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
