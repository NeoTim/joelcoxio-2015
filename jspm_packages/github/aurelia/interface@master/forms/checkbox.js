/* */ 
define(['exports', 'aurelia-framework', './form', 'lodash', './decorators/input-control'], function (exports, _aureliaFramework, _form, _lodash, _decoratorsInputControl) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-checkbox';

  var AiCheckbox = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AiCheckbox, [{
      key: 'checked',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
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
      key: 'id',
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
    }], null, _instanceInitializers);

    function AiCheckbox(element, form) {
      _classCallCheck(this, _AiCheckbox);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      this.isEnabled = false;

      element.className += ' ' + className;
      this.element = element;
      this.form = form;
    }

    _createDecoratedClass(AiCheckbox, [{
      key: 'attached',
      value: function attached() {
        this.selectLabel();
        this.createElementListeners();
        this.name = this.name || (0, _lodash.camelCase)(this.label);
        this.disabled = this.disabled || this.element.hasAttribute('disabled');
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.removeElementListeners();
      }
    }], null, _instanceInitializers);

    var _AiCheckbox = AiCheckbox;
    AiCheckbox = (0, _decoratorsInputControl.inputControl)(AiCheckbox) || AiCheckbox;
    AiCheckbox = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(AiCheckbox) || AiCheckbox;
    AiCheckbox = (0, _aureliaFramework.customElement)('ai-checkbox')(AiCheckbox) || AiCheckbox;
    return AiCheckbox;
  })();

  exports.AiCheckbox = AiCheckbox;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7O01BS25CLFVBQVU7Ozs7MEJBQVYsVUFBVTs7cUNBVmYsUUFBUTs7ZUFXTSxLQUFLOzs7OztxQ0FYbkIsUUFBUTs7ZUFZSSxJQUFJOzs7OztxQ0FaaEIsUUFBUTs7ZUFhSSxJQUFJOzs7OztxQ0FiaEIsUUFBUTs7ZUFjRyxJQUFJOzs7OztxQ0FkZixRQUFROztlQWVDLElBQUk7Ozs7O3FDQWZiLFFBQVE7O2VBZ0JPLElBQUk7Ozs7O0FBSWQsYUFWQSxVQUFVLENBVVQsT0FBTyxFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7O1dBRjNCLFNBQVMsR0FBRyxLQUFLOztBQUdmLGFBQU8sQ0FBQyxTQUFTLFVBQVEsU0FBUyxBQUFFLENBQUM7QUFDckMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDbEI7OzBCQWRVLFVBQVU7O2FBZ0JiLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLFlBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQzlCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxZQTNCckIsU0FBUyxFQTJCc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUN4RTs7O2FBRU8sb0JBQUc7QUFDVCxZQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztPQUMvQjs7O3NCQXpCVSxVQUFVO0FBQVYsY0FBVSwrQkFQZixZQUFZLEVBT1AsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBRnRCLHNCQVJpQixNQUFNLEVBUWhCLE9BQU8sUUFQUCxhQUFhLENBT1UsQ0FFbEIsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBSHRCLHNCQVB5QixhQUFhLEVBT3hCLGFBQWEsQ0FBQyxDQUdoQixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVUiLCJmaWxlIjoiZm9ybXMvY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7Y2FtZWxDYXNlfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtpbnB1dENvbnRyb2x9IGZyb20gJy4vZGVjb3JhdG9ycy9pbnB1dC1jb250cm9sJztcblxuY29uc3QgY2xhc3NOYW1lID0gJ2FpLWNoZWNrYm94JztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWNoZWNrYm94JylcbkBpbmplY3QoRWxlbWVudCwgRm9ybUNvbXBvbmVudClcbkBpbnB1dENvbnRyb2xcbmV4cG9ydCBjbGFzcyBBaUNoZWNrYm94e1xuICBAYmluZGFibGUgY2hlY2tlZCA9IGZhbHNlO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgbW9kZWwgPSBudWxsO1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IG51bGw7XG5cbiAgaXNFbmFibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9ybSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLnNlbGVjdExhYmVsKCk7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IGNhbWVsQ2FzZSh0aGlzLmxhYmVsKTtcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5yZW1vdmVFbGVtZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
