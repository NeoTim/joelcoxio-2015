/* */ 
define(['exports', 'aurelia-framework', '../util/waves'], function (exports, _aureliaFramework, _utilWaves) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-button';
  var buttonsSettings = {
    classPrefix: 'button',
    classSeparator: '--',
    className: className,
    sizeAlias: {
      'sm': 'small',
      'md': 'medium',
      'lg': 'large'
    },
    colorAlias: {
      'primary': 'button--primary',
      'accent': 'button--accent',
      'success': 'button--success',
      'error': 'button--error',
      'link': 'button--link',
      'dark': 'button--dark',
      'disabled': 'button--disabled'
    }
  };

  var ButtonComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ButtonComponent, [{
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'iconRight',
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
      key: 'size',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'round',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'raised',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'flat',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'light',
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
      key: 'bordered',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'bg',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'reset',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'submit',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'button';
      },
      enumerable: true
    }, {
      key: 'attach',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'attachRight',
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
      key: 'text',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], [{
      key: 'settings',
      value: function settings(_settings) {
        buttonsSettings = Object.assign(buttonsSettings, _settings);
      }
    }], _instanceInitializers);

    function ButtonComponent(element, waves) {
      _classCallCheck(this, _ButtonComponent);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'iconRight', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'nextIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'round', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'raised', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'flat', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'light', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'bordered', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'bg', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'reset', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'submit', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'attach', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'attachRight', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'text', _instanceInitializers);

      this._last = {
        icon: null,
        color: null,
        bg: null
      };

      element.className += ' ' + className;
      this.waves = waves;
      this.element = element;
    }

    _createDecoratedClass(ButtonComponent, [{
      key: 'className',
      value: function className(value) {
        var prefix = buttonsSettings.classPrefix;
        var sep = buttonsSettings.classSeparator;
        return prefix + sep + value;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.bordered = this.bordered || this.element.hasAttribute('bordered');
        this.round = this.round || this.element.hasAttribute('round');
        this.light = this.light || this.element.hasAttribute('light');
        this.flat = this.flat || this.element.hasAttribute('flat');
        this.raised = this.raised || this.element.hasAttribute('raised');
        this.submit = this.submit || this.element.hasAttribute('submit');

        if (this.element.hasAttribute('ai-waves')) {
          this.element.classList.remove('waves-effect', 'waves-light');
          this.button.classList.add('waves-effect', 'waves-light');
          if (this.attachedContainer) {
            this.attachedContainer.classList.add('waves-effect', 'waves-light');
          }
        }

        this.size = this.size || 'medium';

        if (this.nextIcon) {
          this.element.addEventListener('mousenter', this.animateIcon.bind(this));
        }

        if (this.attachedElement) {
          this.attachedContainer.appendChild(this.attachedElement);
        }

        if (this.rightAttachedElement) {
          this.attachedContainer.appendChild(this.rightAttachedElement);
        }

        if (this.active) {
          this.activeChanged(this.active);
        }
      }
    }, {
      key: 'sizeChanged',
      value: function sizeChanged(size) {
        size = buttonsSettings.sizeAlias[size] || size;
        this.sizeClass = size ? this.className(size) : '';
      }
    }, {
      key: 'borderedChanged',
      value: function borderedChanged(bordered) {
        this.borderedClass = bordered ? this.className('bordered') : '';
      }
    }, {
      key: 'blockChanged',
      value: function blockChanged(block) {
        this.blockClass = block ? this.className('block') : '';
      }
    }, {
      key: 'roundChanged',
      value: function roundChanged(round) {
        this.roundClass = round ? this.className('round') : '';
      }
    }, {
      key: 'raisedChanged',
      value: function raisedChanged(raised) {
        this.raisedClass = raised ? this.className('raised') : '';
      }
    }, {
      key: 'flatChanged',
      value: function flatChanged(flat) {
        this.flatClass = flat ? this.className('flat') : '';
      }
    }, {
      key: 'lightChanged',
      value: function lightChanged(light) {
        this.lightClass = light ? this.className('light') : '';
      }
    }, {
      key: 'colorChanged',
      value: function colorChanged(color) {
        if (/primary|secondary|accent|success|error|warn/.test(color)) {
          this.colorClass = 'button--' + color;
        } else {
          this.colorClass = 'color-' + color;
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (!this.button) return;
        this.button.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'bgChanged',
      value: function bgChanged(bg) {
        if (bg) {
          this.element.setAttribute('bg', '');
          this.bgClass = buttonsSettings.colorAlias[bg] || 'bg-' + bg;
        } else {
          this.bgClass = '';
        }
      }
    }, {
      key: 'submitChanged',
      value: function submitChanged(value) {
        if (value) this.type = 'submit';
      }
    }, {
      key: 'resetChanged',
      value: function resetChanged(value) {
        if (value) this.type = 'reset';
      }
    }, {
      key: 'attachChanged',
      value: function attachChanged(attachment) {
        this.element.classList.add('button--has-attachment');
        var element = attachment instanceof Element ? attachment : attachment.element instanceof Element ? element = attachment.element : null;
        this.attachedElement = element;
      }
    }, {
      key: 'attachRightChanged',
      value: function attachRightChanged(attachment) {
        this.element.classList.add('button--has-attachment');
        var element = attachment instanceof Element ? attachment : attachment.element instanceof Element ? element = attachment.element : null;
        this.rightAttachedElement = element;
      }
    }, {
      key: 'animateIcon',
      value: function animateIcon() {
        this.active = true;
      }
    }], null, _instanceInitializers);

    var _ButtonComponent = ButtonComponent;
    ButtonComponent = (0, _aureliaFramework.inject)(Element, _utilWaves.Waves)(ButtonComponent) || ButtonComponent;
    ButtonComponent = (0, _aureliaFramework.customElement)('ai-button')(ButtonComponent) || ButtonComponent;
    return ButtonComponent;
  })();

  exports.ButtonComponent = ButtonComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsTUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzVCLE1BQUksZUFBZSxHQUFHO0FBQ3BCLGVBQVcsRUFBRSxRQUFRO0FBQ3JCLGtCQUFjLEVBQUUsSUFBSTtBQUNwQixhQUFTLEVBQUUsU0FBUztBQUNwQixhQUFTLEVBQUU7QUFDVCxVQUFJLEVBQUMsT0FBTztBQUNaLFVBQUksRUFBQyxRQUFRO0FBQ2IsVUFBSSxFQUFDLE9BQU87S0FDYjtBQUNELGNBQVUsRUFBRTtBQUNWLGVBQVMsRUFBQyxpQkFBaUI7QUFDM0IsY0FBUSxFQUFDLGdCQUFnQjtBQUN6QixlQUFTLEVBQUMsaUJBQWlCO0FBQzNCLGFBQU8sRUFBQyxlQUFlO0FBQ3ZCLFlBQU0sRUFBQyxjQUFjO0FBQ3JCLFlBQU0sRUFBQyxjQUFjO0FBQ3JCLGdCQUFVLEVBQUMsa0JBQWtCO0tBQzlCO0dBQ0YsQ0FBQTs7TUFJWSxlQUFlOzs7OzBCQUFmLGVBQWU7O3FDQXpCWixRQUFROztlQStCQSxJQUFJOzs7OztxQ0EvQlosUUFBUTs7ZUFnQ0EsSUFBSTs7Ozs7cUNBaENaLFFBQVE7O2VBaUNBLElBQUk7Ozs7O3FDQWpDWixRQUFROztlQWtDQSxJQUFJOzs7OztxQ0FsQ1osUUFBUTs7ZUFtQ0EsSUFBSTs7Ozs7cUNBbkNaLFFBQVE7O2VBb0NBLElBQUk7Ozs7O3FDQXBDWixRQUFROztlQXFDQSxJQUFJOzs7OztxQ0FyQ1osUUFBUTs7ZUFzQ0EsSUFBSTs7Ozs7cUNBdENaLFFBQVE7O2VBdUNBLElBQUk7Ozs7O3FDQXZDWixRQUFROztlQXdDQSxJQUFJOzs7OztxQ0F4Q1osUUFBUTs7ZUF5Q0EsSUFBSTs7Ozs7cUNBekNaLFFBQVE7O2VBMENBLElBQUk7Ozs7O3FDQTFDWixRQUFROztlQTJDQSxJQUFJOzs7OztxQ0EzQ1osUUFBUTs7ZUE0Q0EsUUFBUTs7Ozs7cUNBNUNoQixRQUFROztlQTZD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QUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELFlBQUksT0FBTyxHQUFHLFVBQVUsWUFBWSxPQUFPLEdBQ3ZDLFVBQVUsR0FDVixVQUFVLENBQUMsT0FBTyxZQUFZLE9BQU8sR0FDckMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQzVCLElBQUksQ0FBQztBQUNULFlBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO09BQ2hDOzs7YUFFaUIsNEJBQUMsVUFBVSxFQUFFO0FBQzdCLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELFlBQUksT0FBTyxHQUFHLFVBQVUsWUFBWSxPQUFPLEdBQ3ZDLFVBQVUsR0FDVixVQUFVLENBQUMsT0FBTyxZQUFZLE9BQU8sR0FDckMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQzVCLElBQUksQ0FBQztBQUNULFlBQUksQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUM7T0FDckM7OzthQVNVLHVCQUFHO0FBQ1osWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7T0FDcEI7OzsyQkF4S1UsZUFBZTtBQUFmLG1CQUFlLEdBRDNCLHNCQXhCTyxNQUFNLEVBd0JOLE9BQU8sYUF2QlAsS0FBSyxDQXVCVSxDQUNWLGVBQWUsS0FBZixlQUFlO0FBQWYsbUJBQWUsR0FGM0Isc0JBdkIwQyxhQUFhLEVBdUJ6QyxXQUFXLENBQUMsQ0FFZCxlQUFlLEtBQWYsZUFBZTtXQUFmLGVBQWUiLCJmaWxlIjoiZWxlbWVudHMvYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7V2F2ZXN9IGZyb20gJy4uL3V0aWwvd2F2ZXMnO1xubGV0IGNsYXNzTmFtZSA9ICdhaS1idXR0b24nO1xubGV0IGJ1dHRvbnNTZXR0aW5ncyA9IHtcbiAgY2xhc3NQcmVmaXg6ICdidXR0b24nLFxuICBjbGFzc1NlcGFyYXRvcjogJy0tJyxcbiAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gIHNpemVBbGlhczoge1xuICAgICdzbSc6J3NtYWxsJyxcbiAgICAnbWQnOidtZWRpdW0nLFxuICAgICdsZyc6J2xhcmdlJ1xuICB9LFxuICBjb2xvckFsaWFzOiB7XG4gICAgJ3ByaW1hcnknOididXR0b24tLXByaW1hcnknLFxuICAgICdhY2NlbnQnOididXR0b24tLWFjY2VudCcsXG4gICAgJ3N1Y2Nlc3MnOididXR0b24tLXN1Y2Nlc3MnLFxuICAgICdlcnJvcic6J2J1dHRvbi0tZXJyb3InLFxuICAgICdsaW5rJzonYnV0dG9uLS1saW5rJyxcbiAgICAnZGFyayc6J2J1dHRvbi0tZGFyaycsXG4gICAgJ2Rpc2FibGVkJzonYnV0dG9uLS1kaXNhYmxlZCdcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktYnV0dG9uJylcbkBpbmplY3QoRWxlbWVudCwgV2F2ZXMpXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcblxuICBzdGF0aWMgc2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgICBidXR0b25zU2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKGJ1dHRvbnNTZXR0aW5ncywgc2V0dGluZ3MpO1xuICB9XG5cbiAgQGJpbmRhYmxlIGljb24gICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBpY29uUmlnaHQgPSBudWxsO1xuICBAYmluZGFibGUgbmV4dEljb24gID0gbnVsbDtcbiAgQGJpbmRhYmxlIHNpemUgICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSByb3VuZCAgICAgPSBudWxsO1xuICBAYmluZGFibGUgcmFpc2VkICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGZsYXQgICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBsaWdodCAgICAgPSBudWxsO1xuICBAYmluZGFibGUgY29sb3IgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGJvcmRlcmVkICA9IG51bGw7XG4gIEBiaW5kYWJsZSBiZyAgICAgICAgPSBudWxsO1xuICBAYmluZGFibGUgcmVzZXQgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHN1Ym1pdCAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSB0eXBlICAgICAgPSAnYnV0dG9uJztcbiAgQGJpbmRhYmxlIGF0dGFjaCAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBhdHRhY2hSaWdodCA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHRleHQgICAgICAgPSBudWxsO1xuXG4gIF9sYXN0ID0ge1xuICAgICAgaWNvbjogbnVsbFxuICAgICwgY29sb3I6IG51bGxcbiAgICAsIGJnOiBudWxsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgd2F2ZXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgdGhpcy53YXZlcyA9IHdhdmVzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBjbGFzc05hbWUodmFsdWUpIHtcbiAgICBsZXQgcHJlZml4ID0gYnV0dG9uc1NldHRpbmdzLmNsYXNzUHJlZml4O1xuICAgIGxldCBzZXAgICAgPSBidXR0b25zU2V0dGluZ3MuY2xhc3NTZXBhcmF0b3I7XG4gICAgcmV0dXJuIHByZWZpeCArIHNlcCArIHZhbHVlO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG5cbiAgICAvLyB0aGlzLndhdmVzLmF0dGFjaCh0aGlzLmJ1dHRvbik7XG4gICAgdGhpcy5ib3JkZXJlZCA9IHRoaXMuYm9yZGVyZWQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYm9yZGVyZWQnKTtcbiAgICB0aGlzLnJvdW5kICAgID0gdGhpcy5yb3VuZCAgICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdyb3VuZCcpO1xuICAgIHRoaXMubGlnaHQgICAgPSB0aGlzLmxpZ2h0ICAgIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2xpZ2h0Jyk7XG4gICAgdGhpcy5mbGF0ICAgICA9IHRoaXMuZmxhdCAgICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZmxhdCcpO1xuICAgIHRoaXMucmFpc2VkICAgPSB0aGlzLnJhaXNlZCAgIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JhaXNlZCcpO1xuICAgIHRoaXMuc3VibWl0ICAgPSB0aGlzLnN1Ym1pdCAgIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3N1Ym1pdCcpO1xuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FpLXdhdmVzJykpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3YXZlcy1lZmZlY3QnLCAnd2F2ZXMtbGlnaHQnKTtcbiAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3dhdmVzLWVmZmVjdCcsICd3YXZlcy1saWdodCcpO1xuICAgICAgaWYgKHRoaXMuYXR0YWNoZWRDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3YXZlcy1lZmZlY3QnLCAnd2F2ZXMtbGlnaHQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUgfHwgJ21lZGl1bSc7XG5cbiAgICBpZiAodGhpcy5uZXh0SWNvbikge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbnRlcicsIHRoaXMuYW5pbWF0ZUljb24uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuYXR0YWNoZWRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5hdHRhY2hlZEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNoZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLmF0dGFjaGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmlnaHRBdHRhY2hlZEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmVDaGFuZ2VkKHRoaXMuYWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBzaXplQ2hhbmdlZChzaXplKSB7XG4gICAgc2l6ZSA9IGJ1dHRvbnNTZXR0aW5ncy5zaXplQWxpYXNbc2l6ZV0gfHwgc2l6ZTtcbiAgICB0aGlzLnNpemVDbGFzcyA9IHNpemUgPyB0aGlzLmNsYXNzTmFtZShzaXplKSA6ICcnO1xuICB9XG5cbiAgYm9yZGVyZWRDaGFuZ2VkKGJvcmRlcmVkKSB7XG4gICAgdGhpcy5ib3JkZXJlZENsYXNzID0gYm9yZGVyZWQgPyB0aGlzLmNsYXNzTmFtZSgnYm9yZGVyZWQnKSA6ICcnO1xuICB9XG5cbiAgYmxvY2tDaGFuZ2VkKGJsb2NrKSB7XG4gICAgdGhpcy5ibG9ja0NsYXNzID0gYmxvY2sgPyB0aGlzLmNsYXNzTmFtZSgnYmxvY2snKSA6ICcnO1xuICB9XG5cbiAgcm91bmRDaGFuZ2VkKHJvdW5kKSB7XG4gICAgdGhpcy5yb3VuZENsYXNzID0gcm91bmQgPyB0aGlzLmNsYXNzTmFtZSgncm91bmQnKSA6ICcnO1xuICB9XG5cbiAgcmFpc2VkQ2hhbmdlZChyYWlzZWQpIHtcbiAgICB0aGlzLnJhaXNlZENsYXNzID0gcmFpc2VkID8gdGhpcy5jbGFzc05hbWUoJ3JhaXNlZCcpIDogJyc7XG4gIH1cblxuICBmbGF0Q2hhbmdlZChmbGF0KSB7XG4gICAgdGhpcy5mbGF0Q2xhc3MgPSBmbGF0ID8gdGhpcy5jbGFzc05hbWUoJ2ZsYXQnKSA6ICcnO1xuICB9XG5cbiAgbGlnaHRDaGFuZ2VkKGxpZ2h0KSB7XG4gICAgdGhpcy5saWdodENsYXNzID0gbGlnaHQgPyB0aGlzLmNsYXNzTmFtZSgnbGlnaHQnKSA6ICcnO1xuICB9XG5cbiAgY29sb3JDaGFuZ2VkKGNvbG9yKSB7XG4gICAgaWYgKC9wcmltYXJ5fHNlY29uZGFyeXxhY2NlbnR8c3VjY2Vzc3xlcnJvcnx3YXJuLy50ZXN0KGNvbG9yKSkge1xuICAgICAgdGhpcy5jb2xvckNsYXNzID0gYGJ1dHRvbi0tJHtjb2xvcn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yQ2xhc3MgPSBgY29sb3ItJHtjb2xvcn1gO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYnV0dG9uKSByZXR1cm47XG4gICAgdGhpcy5idXR0b24uY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLWFjdGl2ZScpO1xuICB9XG5cbiAgYmdDaGFuZ2VkKGJnKSB7XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdiZycsICcnKVxuICAgICAgdGhpcy5iZ0NsYXNzID0gYnV0dG9uc1NldHRpbmdzLmNvbG9yQWxpYXNbYmddIHx8IGBiZy0ke2JnfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmdDbGFzcyA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdENoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHRoaXMudHlwZSA9ICdzdWJtaXQnO1xuICB9XG5cbiAgcmVzZXRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB0aGlzLnR5cGUgPSAncmVzZXQnO1xuICB9XG5cbiAgYXR0YWNoQ2hhbmdlZChhdHRhY2htZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0taGFzLWF0dGFjaG1lbnQnKVxuICAgIGxldCBlbGVtZW50ID0gYXR0YWNobWVudCBpbnN0YW5jZW9mIEVsZW1lbnRcbiAgICAgID8gYXR0YWNobWVudFxuICAgICAgOiBhdHRhY2htZW50LmVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgICA/IGVsZW1lbnQgPSBhdHRhY2htZW50LmVsZW1lbnRcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLmF0dGFjaGVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hSaWdodENoYW5nZWQoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidXR0b24tLWhhcy1hdHRhY2htZW50JylcbiAgICBsZXQgZWxlbWVudCA9IGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgICA/IGF0dGFjaG1lbnRcbiAgICAgIDogYXR0YWNobWVudC5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICAgPyBlbGVtZW50ID0gYXR0YWNobWVudC5lbGVtZW50XG4gICAgICA6IG51bGw7XG4gICAgdGhpcy5yaWdodEF0dGFjaGVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogaWNvbkNoYW5nZWRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSAgLSBUaGUgbmV3IEljb24gQ2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIEljb24gRWxlbWVudC5cbiAgICpcbiAgICogUmVtb3ZlIG9sZCBJY29uIGNsYXNzPyBpZiBpdCBleGlzdHMuXG4gICAqL1xuICBhbmltYXRlSWNvbigpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
