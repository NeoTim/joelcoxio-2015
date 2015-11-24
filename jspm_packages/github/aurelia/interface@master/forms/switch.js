/* */ 
define(['exports', 'aurelia-framework', './form', './decorators/input-control', 'lodash'], function (exports, _aureliaFramework, _form, _decoratorsInputControl, _lodash) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var SwitchElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SwitchElement, [{
      key: 'checked',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'model',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'label',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'ios',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'color',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'disabled',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'changed',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'ax_aria',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function SwitchElement(element, form) {
      _classCallCheck(this, _SwitchElement);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'label', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ios', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'changed', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ax_aria', _instanceInitializers);

      this.element = element;
      this.form = form;
    }

    _createDecoratedClass(SwitchElement, [{
      key: 'attached',
      value: function attached() {
        var _this = this;

        this.selectLabel();
        this.createElementListeners();
        this.name = this.name || (0, _lodash.camelCase)(this.label);
        this.disabled = this.disabled || this.element.hasAttribute('disabled');

        if (this.changed) {
          this.inputElement.addEventListener('change', function (event) {
            _this.changed(event, _this);
          });
        }
      }
    }], null, _instanceInitializers);

    var _SwitchElement = SwitchElement;
    SwitchElement = (0, _decoratorsInputControl.inputControl)(SwitchElement) || SwitchElement;
    SwitchElement = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(SwitchElement) || SwitchElement;
    SwitchElement = (0, _aureliaFramework.customElement)('ai-switch')(SwitchElement) || SwitchElement;
    return SwitchElement;
  })();

  exports.SwitchElement = SwitchElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL3N3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BUWEsYUFBYTs7OzswQkFBYixhQUFhOztxQ0FSbEIsUUFBUTs7ZUFVTSxJQUFJOzs7OztxQ0FWbEIsUUFBUTs7ZUFXSSxJQUFJOzs7OztxQ0FYaEIsUUFBUTs7ZUFZSSxJQUFJOzs7OztxQ0FaaEIsUUFBUTs7ZUFhSSxJQUFJOzs7OztxQ0FiaEIsUUFBUTs7ZUFjSSxJQUFJOzs7OztxQ0FkaEIsUUFBUTs7ZUFlRSxJQUFJOzs7OztxQ0FmZCxRQUFROztlQWdCSSxJQUFJOzs7OztxQ0FoQmhCLFFBQVE7O2VBaUJPLElBQUk7Ozs7O3FDQWpCbkIsUUFBUTs7ZUFrQk0sSUFBSTs7Ozs7cUNBbEJsQixRQUFROztlQW9CTSxFQUFFOzs7OztBQUVYLGFBZEEsYUFBYSxDQWNaLE9BQU8sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pCLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzswQkFqQlUsYUFBYTs7YUFtQmhCLG9CQUFHOzs7QUFDVCxZQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkIsWUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDOUIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBM0JyQixTQUFTLEVBMkJzQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUV2RSxZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDaEIsY0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUk7QUFDckQsa0JBQUssT0FBTyxDQUFDLEtBQUssUUFBTyxDQUFDO1dBQzNCLENBQUMsQ0FBQztTQUNKO09BQ0Y7Ozt5QkE5QlUsYUFBYTtBQUFiLGlCQUFhLCtCQU5sQixZQUFZLEVBTVAsYUFBYSxLQUFiLGFBQWE7QUFBYixpQkFBYSxHQUZ6QixzQkFOaUIsTUFBTSxFQU1oQixPQUFPLFFBTFAsYUFBYSxDQUtVLENBRWxCLGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FIekIsc0JBTHlCLGFBQWEsRUFLeEIsV0FBVyxDQUFDLENBR2QsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImZvcm1zL3N3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgY3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtGb3JtQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHtpbnB1dENvbnRyb2x9IGZyb20gJy4vZGVjb3JhdG9ycy9pbnB1dC1jb250cm9sJztcbmltcG9ydCB7Y2FtZWxDYXNlfSBmcm9tICdsb2Rhc2gnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktc3dpdGNoJylcbkBpbmplY3QoRWxlbWVudCwgRm9ybUNvbXBvbmVudClcbkBpbnB1dENvbnRyb2xcbmV4cG9ydCBjbGFzcyBTd2l0Y2hFbGVtZW50e1xuXG4gIEBiaW5kYWJsZSBjaGVja2VkID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIG1vZGVsID0gbnVsbDtcbiAgQGJpbmRhYmxlIG5hbWUgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGxhYmVsID0gbnVsbDtcbiAgQGJpbmRhYmxlIGlvcyA9IG51bGw7XG4gIEBiaW5kYWJsZSBjb2xvciA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBjaGFuZ2VkID0gbnVsbDtcbiAgLy8gQWNjZXNzaWJpbGl0eSBUZXh0IFNlcnZpY2VzXG4gIEBiaW5kYWJsZSBheF9hcmlhID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9ybSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuc2VsZWN0TGFiZWwoKTtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgY2FtZWxDYXNlKHRoaXMubGFiZWwpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VkKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQoZXZlbnQsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
