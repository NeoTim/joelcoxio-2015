/* */ 
define(['exports', 'aurelia-framework', '../channel', 'aurelia-pal'], function (exports, _aureliaFramework, _channel, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MenuComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(MenuComponent, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'items',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'title',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'position',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'options',
      decorators: [(0, _aureliaFramework.children)('option')],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function MenuComponent(element, channel) {
      _classCallCheck(this, _MenuComponent);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'position', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.channel = channel;
      this.onClick = this.onClick.bind(this);
    }

    _createDecoratedClass(MenuComponent, [{
      key: '_bindEventListeners',
      value: function _bindEventListeners() {
        if (this.isListening) return;
        this.isListening = true;
        this.clickEvent = this.channel.subscribe(_channel.InterfaceChannel.Click, this.onClick);
      }
    }, {
      key: '_unbindEventListeners',
      value: function _unbindEventListeners() {
        if (!this.isListening) {
          this.isListening = false;
          this.clickEvent.dispose();
        }
      }
    }, {
      key: '_setContainerHeight',
      value: function _setContainerHeight(zero) {
        if (zero === 0) return this.container.style.height = '';
        var height = this.container.scrollHeight + 'px';
        if (height !== '0px') {
          this.container.style.height = height;
        }
      }
    }, {
      key: '_setPosition',
      value: function _setPosition() {
        var w = window.screen.width;
        var h = window.screen.height;
        var left = this.element.offsetLeft;
        var top = this.element.offsetTop;
        var valign = undefined;
        var halign = undefined;
        if (left > w / 2) {
          halign = 'right';
        } else {
          halign = 'left';
        }

        if (top > h / 2) {
          valign = 'bottom';
        } else {
          valign = 'top';
        }

        halign && valign && this.element.classList.add('position-' + valign + '-' + halign);
      }
    }, {
      key: 'open',
      value: function open() {
        this.active = true;
      }
    }, {
      key: 'close',
      value: function close() {
        this.active = false;
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this._setPosition();
          this._bindEventListeners();
          this._setContainerHeight();
          this.element.classList.add('active');
        } else {
          this._setContainerHeight(0);
          this._unbindEventListeners();
          this.element.classList.remove('active');
        }
      }
    }, {
      key: 'optionsChanged',
      value: function optionsChanged(options) {
        var _this = this;

        this.options.forEach(function (o) {
          if (!o.value) o.value = (o.innerText || o.innerHTML).trim();
          _this.container.appendChild(o);
        });
      }
    }, {
      key: 'onClick',
      value: function onClick(event) {
        this.active = false;
        if (event.hasTarget(this.element) && event.target.nodeName === 'OPTION') {
          this.value = event.target.value;
          return true;
        }
      }
    }], null, _instanceInitializers);

    var _MenuComponent = MenuComponent;
    MenuComponent = (0, _aureliaFramework.inject)(Element, _channel.InterfaceChannel)(MenuComponent) || MenuComponent;
    MenuComponent = (0, _aureliaFramework.customElement)('ai-menu')(MenuComponent) || MenuComponent;
    return MenuComponent;
  })();

  exports.MenuComponent = MenuComponent;
});
//# sourceMappingURL=data:application/json;base64,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Rjs7O3lCQTVGVSxhQUFhO0FBQWIsaUJBQWEsR0FEekIsc0JBTGdDLE1BQU0sRUFLL0IsT0FBTyxXQUpQLGdCQUFnQixDQUlVLENBQ3JCLGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FGekIsc0JBSk8sYUFBYSxFQUlOLFNBQVMsQ0FBQyxDQUVaLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLW1lbnUnKVxuQGluamVjdChFbGVtZW50LCBJbnRlcmZhY2VDaGFubmVsKVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xuICBAYmluZGFibGUgdmFsdWUgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGl0ZW1zICA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuICBAYmluZGFibGUgdGl0bGUgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGljb24gICA9IG51bGw7XG4gIEBiaW5kYWJsZSBwb3NpdGlvbiA9IG51bGw7XG4gIEBjaGlsZHJlbignb3B0aW9uJykgb3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMub25DbGljayAgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9iaW5kRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuaXNMaXN0ZW5pbmcpIHJldHVybjtcbiAgICB0aGlzLmlzTGlzdGVuaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmNsaWNrRXZlbnQgID0gdGhpcy5jaGFubmVsLnN1YnNjcmliZShJbnRlcmZhY2VDaGFubmVsLkNsaWNrLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cbiAgX3VuYmluZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5pc0xpc3RlbmluZykge1xuICAgICAgdGhpcy5pc0xpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja0V2ZW50LmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBfc2V0Q29udGFpbmVySGVpZ2h0KHplcm8pIHtcbiAgICBpZiAoemVybyA9PT0gMCkgcmV0dXJuIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIGxldCBoZWlnaHQgPSAodGhpcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgaWYgKGhlaWdodCAhPT0gJzBweCcpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cblxuICBfc2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IHcgPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgIGxldCBoID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICBsZXQgdG9wICA9IHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgbGV0IHZhbGlnbjtcbiAgICBsZXQgaGFsaWduO1xuICAgIGlmIChsZWZ0ID4gKHcgLyAyKSkge1xuICAgICAgaGFsaWduID0gJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgaGFsaWduID0gJ2xlZnQnO1xuICAgIH1cblxuICAgIGlmICh0b3AgPiAoaCAvIDIpKSB7XG4gICAgICB2YWxpZ24gPSAnYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWduID0gJ3RvcCc7XG4gICAgfVxuICAgIC8vIGhhbGlnbiAmJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcG9zaXRpb24tJHtoYWxpZ259YCk7XG4gICAgLy8gdmFsaWduICYmIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwb3NpdGlvbi0ke3ZhbGlnbn1gKTtcbiAgICBoYWxpZ24gJiYgdmFsaWduICYmIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwb3NpdGlvbi0ke3ZhbGlnbn0tJHtoYWxpZ259YCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX2JpbmRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5fc2V0Q29udGFpbmVySGVpZ2h0KCk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldENvbnRhaW5lckhlaWdodCgwKTtcbiAgICAgIHRoaXMuX3VuYmluZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgb3B0aW9uc0NoYW5nZWQob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG8gPT4ge1xuICAgICAgaWYgKCFvLnZhbHVlKSBvLnZhbHVlID0gKG8uaW5uZXJUZXh0IHx8IG8uaW5uZXJIVE1MKS50cmltKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChvKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChldmVudC5oYXNUYXJnZXQodGhpcy5lbGVtZW50KSAmJiBldmVudC50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRJT04nKXtcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
