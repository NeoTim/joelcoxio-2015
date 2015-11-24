/* */ 
define(['exports', 'aurelia-framework', 'lodash/string/capitalize', 'lodash/string/camelCase', './form', 'lodash'], function (exports, _aureliaFramework, _lodashStringCapitalize, _lodashStringCamelCase, _form, _lodash) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _capitalize = _interopRequireDefault(_lodashStringCapitalize);

  var _camelCase = _interopRequireDefault(_lodashStringCamelCase);

  function isPlatform(string, attr) {
    var regex = new RegExp(attr + 's|' + attr + '-(ai|ios|android|win|windows)', 'gi');
    return regex.test(string);
  }

  function isPromise(value) {
    return typeof value === 'object' && typeof value.then === 'function';
  }

  function resolvePromise(pr, resolver, catcher) {
    catcher = catcher || resolver;
    return pr.then(function (data) {
      return resolver(data);
    })['catch'](function (err) {
      return catcher(err);
    });
  }

  var className = 'ai-input';

  var InputElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(InputElement, [{
      key: 'id',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'placeholder',
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
      key: 'value',
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
      key: 'min',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'max',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'required',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'false';
      },
      enumerable: true
    }, {
      key: 'readonly',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'disable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'password',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'resizable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'text';
      },
      enumerable: true
    }, {
      key: 'dataList',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function InputElement(element, form) {
      _classCallCheck(this, _InputElement);

      _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'placeholder', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'min', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'required', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'readonly', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'password', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'resizable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'dataList', _instanceInitializers);

      this.unBindableListeners = [];

      element.className += ' ' + className;
      this.element = element;

      if (form.isFormElement) {
        this.form = form;
      }
    }

    _createDecoratedClass(InputElement, [{
      key: 'attached',
      value: function attached() {
        if (!this.inputElement) this.inputElement = this.textarea;
        this.labelElement = this.selectLabel();
        this.name = this.name || this.label;
        this.name && (this.label = this.label || (0, _capitalize['default'])(this.name));

        this.resizable = this.resizable || this.element.hasAttribute('resizable');
        this.disable = this.disable || this.element.hasAttribute('disable');
        this.password = this.password || this.element.hasAttribute('password');
        this.required = this.required || this.element.hasAttribute('required');
        this.readonly = this.readonly || this.element.hasAttribute('readonly');

        this.placeholder = this.placeholder || this.label;

        if (this.disable) this.disableChanged(this.disable);
        if (this.value) this.valueChanged(this.value);

        if (this.name) this.name = this.name.toLowerCase();

        this.id = this.id || this.name && this.name.toLowerCase() || this.label && this.label.toLowerCase();

        if (this.id) this.id = (0, _camelCase['default'])(this.id);

        if (this.id && this.form) {
          this.form.addInput(this.id, this);
        }

        if (this.datalist && this.isDataListElement) {
          this.inputElement.setAttribute('data-list', this.listId);
        }

        this.listElement = this.setectDatalist();
      }
    }, {
      key: 'detached',
      value: function detached() {
        var unbindableIndex = undefined;
        for (unbindableIndex in this.unBindableListeners) {
          var listener = this.unBindableListeners[unbindableIndex];
          listener.element.removeEventListener(listener.type, listener.method);
        }
      }
    }, {
      key: 'selectLabel',
      value: function selectLabel() {
        var labelElement = this.element.querySelectorAll('label')[0];
        if (labelElement) {
          var label = labelElement.innerText || labelElement.innerHTML;
          this.label = label.trim();
        } else {
          labelElement = document.createElement('LABEL');
          if (this.name && !this.label) {
            this.label = (0, _capitalize['default'])(this.name);
          }
          labelElement.innerText = this.label;
        }
        return labelElement;
      }
    }, {
      key: 'setectDatalist',
      value: function setectDatalist() {
        var listElement = this.element.getElementsByTagName('datalist')[0];
        if (!listElement) return;

        var id = this.element.getAttribute('list') || listElement.id;
        if (!id) return;

        this.inputElement.setAttribute('list', id);
        listElement.setAttribute('id', id);
        return listElement;
      }
    }, {
      key: 'click',
      value: function click() {
        this.inputElement.focus();
      }
    }, {
      key: 'idChanged',
      value: function idChanged() {}
    }, {
      key: 'nameChanged',
      value: function nameChanged() {}
    }, {
      key: 'valueChanged',
      value: function valueChanged(value) {
        if (value && !this.element.classList.contains('has-value')) {
          this.element.classList.add('has-value');
        }
        if (!value) {
          this.element.classList.remove('has-value');
        }
        if (this.form) {
          this.form.setValue(this.name, value);
        }

        if (this.resizable && this.textarea) {
          this.textarea.style.cssText = 'height:auto; padding:0';
          var height = 'height:' + this.textarea.scrollHeight + 'px';
          this.textarea.style.cssText = height;
        }
      }
    }, {
      key: 'placeholderChanged',
      value: function placeholderChanged(placeholder) {
        if (this.inputElement) {
          placeholder ? this.inputElement.setAttribute('placeholder', placeholder) : this.inputElement.removeAttribute('placeholder');
        }
      }
    }, {
      key: 'passwordChanged',
      value: function passwordChanged(isPassword) {
        this.type = isPassword ? 'password' : 'text';
      }
    }, {
      key: 'disableChanged',
      value: function disableChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('input--disable');

        if (value && this.inputElement) {
          this.inputElement.disabled = true;
        }
      }
    }, {
      key: 'requiredChanged',
      value: function requiredChanged(value) {
        this.toggleAttribute('required', value);
      }
    }, {
      key: 'minChanged',
      value: function minChanged(value) {
        this.toggleAttribute('min', value);
      }
    }, {
      key: 'maxChanged',
      value: function maxChanged(value) {
        this.toggleAttribute('max', value);
      }
    }, {
      key: 'readonlyChanged',
      value: function readonlyChanged(value) {
        if (!this.inputElement) return;
        this.inputElement.readOnly = value ? true : '';
      }
    }, {
      key: 'toggleAttribute',
      value: function toggleAttribute(attrName, value) {
        if (value) this.inputElement.setAttribute(attrName, value);else this.inputElement.removeAttribute(attrName);
      }
    }, {
      key: 'dataListChanged',
      value: function dataListChanged(list) {
        this.isDataListElement = list instanceof Element;
        if (!this.listId) this.listId = (0, _lodash.uniqueId)(this.name || 'ai_input_');
        if (this.isDataListElement) {
          list.id = this.listId;
        }
      }
    }], null, _instanceInitializers);

    var _InputElement = InputElement;
    InputElement = (0, _aureliaFramework.customElement)('ai-input')(InputElement) || InputElement;
    InputElement = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(InputElement) || InputElement;
    return InputElement;
  })();

  exports.InputElement = InputElement;
});
//# sourceMappingURL=data:application/json;base64,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YUFFUyxvQkFBQyxLQUFLLEVBQUU7QUFDaEIsWUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7T0FDcEM7OzthQUVjLHlCQUFDLEtBQUssRUFBRTtBQUNyQixZQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPO0FBQy9CLFlBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO09BQ2hEOzs7YUFFYyx5QkFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFO0FBQy9CLFlBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNsRDs7O2FBRWMseUJBQUMsSUFBSSxFQUFFO0FBQ3BCLFlBQUksQ0FBQyxpQkFBaUIsR0FBSSxJQUFJLFlBQVksT0FBTyxBQUFDLENBQUM7QUFDbkQsWUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQWhNNUIsUUFBUSxFQWdNNkIsSUFBSSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQztBQUNuRSxZQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUMxQixjQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdkI7T0FDRjs7O3dCQS9LVSxZQUFZO0FBQVosZ0JBQVksR0FEeEIsc0JBeEJPLGFBQWEsRUF3Qk4sVUFBVSxDQUFDLENBQ2IsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUZ4QixzQkF2QmdDLE1BQU0sRUF1Qi9CLE9BQU8sUUFwQlAsYUFBYSxDQW9CVSxDQUVsQixZQUFZLEtBQVosWUFBWTtXQUFaLFlBQVkiLCJmaWxlIjoiZm9ybXMvaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FtZWxDYXNlJztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7dW5pcXVlSWR9IGZyb20gJ2xvZGFzaCc7XG5cblxuZnVuY3Rpb24gaXNQbGF0Zm9ybShzdHJpbmcsIGF0dHIpIHtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHthdHRyfVxcc3wke2F0dHJ9LShhaXxpb3N8YW5kcm9pZHx3aW58d2luZG93cylgLCAnZ2knKTtcbiAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwciwgcmVzb2x2ZXIsIGNhdGNoZXIpIHtcbiAgY2F0Y2hlciA9IGNhdGNoZXIgfHwgcmVzb2x2ZXI7XG4gIHJldHVybiBwci50aGVuKChkYXRhKT0+IHJlc29sdmVyKGRhdGEpKS5jYXRjaCgoZXJyKT0+IGNhdGNoZXIoZXJyKSk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZSA9ICdhaS1pbnB1dCc7XG5cbkBpbmplY3QoRWxlbWVudCwgRm9ybUNvbXBvbmVudClcbkBjdXN0b21FbGVtZW50KCdhaS1pbnB1dCcpXG5leHBvcnQgY2xhc3MgSW5wdXRFbGVtZW50IHtcblxuICBAYmluZGFibGUgaWQgPSBudWxsO1xuICBAYmluZGFibGUgcGxhY2Vob2xkZXIgPSBudWxsO1xuXG4gIEBiaW5kYWJsZSBtb2RlbCA9IG51bGw7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBuYW1lID0gbnVsbDtcblxuICBAYmluZGFibGUgbWluID0gJyc7XG4gIEBiaW5kYWJsZSBtYXggPSAnJztcbiAgQGJpbmRhYmxlIHJlcXVpcmVkID0gJ2ZhbHNlJztcbiAgQGJpbmRhYmxlIHJlYWRvbmx5ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGUgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHBhc3N3b3JkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSByZXNpemFibGUgPSBudWxsO1xuICBAYmluZGFibGUgdHlwZSA9ICd0ZXh0JztcbiAgQGJpbmRhYmxlIGRhdGFMaXN0ID0gbnVsbDtcblxuICB1bkJpbmRhYmxlTGlzdGVuZXJzID0gW107XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9ybSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgaWYgKGZvcm0uaXNGb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB0aGlzLmlucHV0RWxlbWVudCA9IHRoaXMudGV4dGFyZWE7XG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSB0aGlzLnNlbGVjdExhYmVsKCk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IHRoaXMubGFiZWw7XG4gICAgdGhpcy5uYW1lICYmICh0aGlzLmxhYmVsID0gdGhpcy5sYWJlbCB8fCBjYXBpdGFsaXplKHRoaXMubmFtZSkpO1xuXG4gICAgdGhpcy5yZXNpemFibGUgPSB0aGlzLnJlc2l6YWJsZSAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVzaXphYmxlJyk7XG4gICAgdGhpcy5kaXNhYmxlICA9IHRoaXMuZGlzYWJsZSAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZScpO1xuICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Bhc3N3b3JkJyk7XG4gICAgdGhpcy5yZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVxdWlyZWQnKTtcbiAgICB0aGlzLnJlYWRvbmx5ID0gdGhpcy5yZWFkb25seSB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xuXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5sYWJlbDtcblxuICAgIGlmICh0aGlzLmRpc2FibGUpXG4gICAgICB0aGlzLmRpc2FibGVDaGFuZ2VkKHRoaXMuZGlzYWJsZSk7XG4gICAgaWYgKHRoaXMudmFsdWUpXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcblxuICAgIGlmICh0aGlzLm5hbWUpIHRoaXMubmFtZSA9IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5pZCA9IHRoaXMuaWQgfHwgKHRoaXMubmFtZSAmJiB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSkgfHwgKHRoaXMubGFiZWwgJiYgdGhpcy5sYWJlbC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIGlmICh0aGlzLmlkKSB0aGlzLmlkID0gY2FtZWxDYXNlKHRoaXMuaWQpO1xuXG4gICAgaWYgKCB0aGlzLmlkICYmIHRoaXMuZm9ybSApIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRJbnB1dCh0aGlzLmlkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kYXRhbGlzdCAmJiB0aGlzLmlzRGF0YUxpc3RFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdCcsIHRoaXMubGlzdElkKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RFbGVtZW50ID0gdGhpcy5zZXRlY3REYXRhbGlzdCgpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgbGV0IHVuYmluZGFibGVJbmRleDtcbiAgICBmb3IodW5iaW5kYWJsZUluZGV4IGluIHRoaXMudW5CaW5kYWJsZUxpc3RlbmVycykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy51bkJpbmRhYmxlTGlzdGVuZXJzW3VuYmluZGFibGVJbmRleF07XG4gICAgICBsaXN0ZW5lci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIudHlwZSwgbGlzdGVuZXIubWV0aG9kKTtcbiAgICB9XG4gIH1cblxuICAvKiBRVUVSWSBTRUxFQ1RPUlMgKi9cbiAgc2VsZWN0TGFiZWwoKSB7XG4gICAgbGV0IGxhYmVsRWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpWzBdO1xuICAgIGlmIChsYWJlbEVsZW1lbnQpIHtcbiAgICAgIGxldCBsYWJlbCA9IGxhYmVsRWxlbWVudC5pbm5lclRleHQgfHwgbGFiZWxFbGVtZW50LmlubmVySFRNTDtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbC50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xBQkVMJyk7XG4gICAgICBpZiAodGhpcy5uYW1lICYmICF0aGlzLmxhYmVsKSB7XG4gICAgICAgIHRoaXMubGFiZWwgPSBjYXBpdGFsaXplKHRoaXMubmFtZSk7XG4gICAgICB9XG4gICAgICBsYWJlbEVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5sYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsRWxlbWVudDtcbiAgfVxuXG4gIHNldGVjdERhdGFsaXN0KCkge1xuICAgIGxldCBsaXN0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGF0YWxpc3QnKVswXTtcbiAgICBpZiAoIWxpc3RFbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgaWQgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsaXN0JykgfHwgbGlzdEVsZW1lbnQuaWQ7XG4gICAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsaXN0JywgaWQpO1xuICAgIGxpc3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgcmV0dXJuIGxpc3RFbGVtZW50O1xuICB9XG5cbiAgLyogRVZFTlQgSEFORExFUlMgKi9cbiAgY2xpY2soKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGlkQ2hhbmdlZCgpIHt9XG4gIG5hbWVDaGFuZ2VkKCkge31cblxuICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy12YWx1ZScpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdmFsdWUnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHRoaXMubmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc2l6YWJsZSAmJiB0aGlzLnRleHRhcmVhKSB7XG4gICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OmF1dG87IHBhZGRpbmc6MCc7XG4gICAgICBsZXQgaGVpZ2h0ID0gICdoZWlnaHQ6JyArIHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9IGhlaWdodDtcbiAgICB9XG4gIH1cblxuICBwbGFjZWhvbGRlckNoYW5nZWQocGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHBsYWNlaG9sZGVyID8gdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgfVxuICB9XG5cbiAgcGFzc3dvcmRDaGFuZ2VkKGlzUGFzc3dvcmQpIHtcbiAgICB0aGlzLnR5cGUgPSBpc1Bhc3N3b3JkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JztcbiAgfVxuXG4gIGRpc2FibGVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpbnB1dC0tZGlzYWJsZScpO1xuXG4gICAgaWYgKHZhbHVlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVxdWlyZWRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdmFsdWUpO1xuICB9XG5cbiAgbWluQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdtaW4nLCB2YWx1ZSk7XG4gIH1cblxuICBtYXhDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHJldHVybjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5yZWFkT25seSA9IHZhbHVlID8gdHJ1ZSA6ICcnO1xuICB9XG5cbiAgdG9nZ2xlQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgZWxzZSB0aGlzLmlucHV0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICB9XG5cbiAgZGF0YUxpc3RDaGFuZ2VkKGxpc3QpIHtcbiAgICB0aGlzLmlzRGF0YUxpc3RFbGVtZW50ID0gKGxpc3QgaW5zdGFuY2VvZiBFbGVtZW50KTtcbiAgICBpZiAoIXRoaXMubGlzdElkKSB0aGlzLmxpc3RJZCA9IHVuaXF1ZUlkKHRoaXMubmFtZSB8fCAnYWlfaW5wdXRfJyk7XG4gICAgaWYgKHRoaXMuaXNEYXRhTGlzdEVsZW1lbnQpIHtcbiAgICAgIGxpc3QuaWQgPSB0aGlzLmxpc3RJZDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
