System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, AsideBar;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      AsideBar = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AsideBar, [{
          key: 'closed',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'expand',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'state',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AsideBar(element) {
          _classCallCheck(this, _AsideBar);

          _defineDecoratedPropertyDescriptor(this, 'closed', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'expand', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'state', _instanceInitializers);

          this.element = element;
        }

        _createDecoratedClass(AsideBar, [{
          key: 'attached',
          value: function attached() {
            this.closed = this.closed || this.element.hasAttribute('closed');
          }
        }, {
          key: 'expandChanged',
          value: function expandChanged(value) {
            if (value) this.state = 'expand';
          }
        }, {
          key: 'closedChanged',
          value: function closedChanged(value) {
            if (value) this.state = 'closed';
          }
        }, {
          key: 'stateChanged',
          value: function stateChanged(state) {
            this.stateClass = 'aside-bar--' + state;
          }
        }], null, _instanceInitializers);

        var _AsideBar = AsideBar;
        AsideBar = inject(Element)(AsideBar) || AsideBar;
        return AsideBar;
      })();

      _export('AsideBar', AsideBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNpZGUtYmFyL2FzaWRlLWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0JBS2EsUUFBUTs7Ozs7Ozs7OzttQ0FMYixRQUFRO2lDQUFFLE1BQU07OztBQUtYLGNBQVE7Ozs7OEJBQVIsUUFBUTs7dUJBQ2xCLFFBQVE7O21CQUFVLElBQUk7Ozs7O3VCQUN0QixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7QUFFWCxpQkFMQSxRQUFRLENBS1AsT0FBTyxFQUFFOzs7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzhCQVBVLFFBQVE7O2lCQVNYLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUNsRTs7O2lCQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixnQkFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7V0FDbEM7OztpQkFDWSx1QkFBQyxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1dBQ2xDOzs7aUJBRVcsc0JBQUMsS0FBSyxFQUFFO0FBQ2xCLGdCQUFJLENBQUMsVUFBVSxtQkFBaUIsS0FBSyxBQUFFLENBQUM7V0FDekM7Ozt3QkF0QlUsUUFBUTtBQUFSLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVEiLCJmaWxlIjoiY29tcG9uZW50cy9hc2lkZS1iYXIvYXNpZGUtYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgQXNpZGVCYXJ7XG4gIEBiaW5kYWJsZSBjbG9zZWQgPSBudWxsO1xuICBAYmluZGFibGUgZXhwYW5kID0gbnVsbDtcbiAgQGJpbmRhYmxlIHN0YXRlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuY2xvc2VkID0gdGhpcy5jbG9zZWQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY2xvc2VkJyk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB0aGlzLnN0YXRlID0gJ2V4cGFuZCc7XG4gIH1cbiAgY2xvc2VkQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkgdGhpcy5zdGF0ZSA9ICdjbG9zZWQnO1xuICB9XG5cbiAgc3RhdGVDaGFuZ2VkKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZUNsYXNzID0gYGFzaWRlLWJhci0tJHtzdGF0ZX1gO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
