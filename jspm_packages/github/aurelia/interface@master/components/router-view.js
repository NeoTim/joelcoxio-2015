/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-templating-router', 'aurelia-metadata', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaTemplatingRouter, _aureliaMetadata, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var RouterViewElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(RouterViewElement, [{
      key: 'name',
      decorators: [_aureliaTemplating.bindable],
      initializer: function initializer() {
        return "with";
      },
      enumerable: true
    }], null, _instanceInitializers);

    function RouterViewElement(element, container) {
      _classCallCheck(this, _RouterViewElement);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      this.element = element;
      this.container = container;
    }

    _createDecoratedClass(RouterViewElement, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.container.viewModel = bindingContext;
      }
    }], null, _instanceInitializers);

    var _RouterViewElement = RouterViewElement;
    RouterViewElement = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container)(RouterViewElement) || RouterViewElement;
    RouterViewElement = (0, _aureliaTemplating.inlineView)('<template><router-view name.bind="name"></router-view></template>')(RouterViewElement) || RouterViewElement;
    RouterViewElement = (0, _aureliaTemplating.customElement)('ai-view-port')(RouterViewElement) || RouterViewElement;
    return RouterViewElement;
  })();

  exports.RouterViewElement = RouterViewElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcm91dGVyLXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQVVhLGlCQUFpQjs7OzswQkFBakIsaUJBQWlCOztzQ0FUa0UsUUFBUTs7ZUFVckYsTUFBTTs7Ozs7QUFDWixhQUZBLGlCQUFpQixDQUVoQixPQUFPLEVBQUUsU0FBUyxFQUFFOzs7OztBQUM5QixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztLQUM1Qjs7MEJBTFUsaUJBQWlCOzthQU14QixjQUFDLGNBQWMsRUFBRTtBQUNuQixZQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7T0FDM0M7Ozs2QkFSVSxpQkFBaUI7QUFBakIscUJBQWlCLEdBRDdCLGdDQVRrQixNQUFNLEVBU2pCLFlBSkEsR0FBRyxDQUlDLE9BQU8sOEJBVFgsU0FBUyxDQVNjLENBQ2xCLGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIscUJBQWlCLEdBRjdCLHVCQVA4RCxVQUFVLEVBTzdELG1FQUFtRSxDQUFDLENBRW5FLGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIscUJBQWlCLEdBSDdCLHVCQU44QixhQUFhLEVBTTdCLGNBQWMsQ0FBQyxDQUdqQixpQkFBaUIsS0FBakIsaUJBQWlCO1dBQWpCLGlCQUFpQiIsImZpbGUiOiJjb21wb25lbnRzL3JvdXRlci12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXIsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1ZpZXdTbG90LCBWaWV3TG9jYXRvciwgY3VzdG9tRWxlbWVudCwgbm9WaWV3LCB1c2VWaWV3LCBpbmxpbmVWaWV3LCBCZWhhdmlvckluc3RydWN0aW9uLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge1JvdXRlclZpZXd9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZy1yb3V0ZXInO1xuaW1wb3J0IHtPcmlnaW59IGZyb20gJ2F1cmVsaWEtbWV0YWRhdGEnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLXZpZXctcG9ydCcpXG5AaW5saW5lVmlldygnPHRlbXBsYXRlPjxyb3V0ZXItdmlldyBuYW1lLmJpbmQ9XCJuYW1lXCI+PC9yb3V0ZXItdmlldz48L3RlbXBsYXRlPicpXG5AaW5qZWN0KERPTS5FbGVtZW50LCBDb250YWluZXIpXG5leHBvcnQgY2xhc3MgUm91dGVyVmlld0VsZW1lbnQge1xuICBAYmluZGFibGUgbmFtZSA9IFwid2l0aFwiO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICB9XG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRhaW5lci52aWV3TW9kZWwgPSBiaW5kaW5nQ29udGV4dDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
