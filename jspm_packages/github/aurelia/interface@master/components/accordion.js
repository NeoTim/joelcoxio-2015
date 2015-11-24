/* */ 
define(['exports', 'aurelia-framework', '../util/events', 'aurelia-pal'], function (exports, _aureliaFramework, _utilEvents, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AccordionElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AccordionElement, [{
      key: 'expandable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'activeItem',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'items',
      decorators: [(0, _aureliaFramework.children)('ai-item')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AccordionElement(element) {
      _classCallCheck(this, _AccordionElement);

      _defineDecoratedPropertyDescriptor(this, 'expandable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'activeItem', _instanceInitializers);

      this.isAccordion = true;
      this._items = [];

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(AccordionElement, [{
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this = this;

        this.items.forEach(function (item) {
          item.onClick(function (event) {
            return _this.setActive(event, item);
          });
        });
      }
    }, {
      key: 'setActive',
      value: function setActive(event, item) {
        this.activeItem = item;
        if (item.element.classList.contains('is-active')) {
          item.element.classList.remove('is-active');
          Velocity(item.container, "slideUp", { duration: 200 });
        } else {
          item.element.classList.add('is-active');
          Velocity(item.container, "slideDown", { duration: 200 });
        }
      }
    }, {
      key: 'activeItemChanged',
      value: function activeItemChanged(item, lastItem) {
        if (lastItem) {
          lastItem.element.classList.remove('is-active');
          Velocity(lastItem.container, "slideUp", { duration: 200 });
        }
      }
    }], null, _instanceInitializers);

    var _AccordionElement = AccordionElement;
    AccordionElement = (0, _aureliaFramework.inject)(Element)(AccordionElement) || AccordionElement;
    AccordionElement = (0, _aureliaFramework.useView)('./content.html')(AccordionElement) || AccordionElement;
    AccordionElement = (0, _aureliaFramework.customElement)('ai-accordion')(AccordionElement) || AccordionElement;
    return AccordionElement;
  })();

  exports.AccordionElement = AccordionElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFPYSxnQkFBZ0I7Ozs7MEJBQWhCLGdCQUFnQjs7cUNBUEcsUUFBUTs7ZUFRZixJQUFJOzs7OztxQ0FSRyxRQUFROztlQVNmLElBQUk7Ozs7O21CQUcxQixzQkFaK0MsUUFBUSxFQVk5QyxTQUFTLENBQUM7O2VBQVMsRUFBRTs7Ozs7QUFFcEIsYUFQQSxnQkFBZ0IsQ0FPZixPQUFPLEVBQUU7Ozs7Ozs7V0FKckIsV0FBVyxHQUFHLElBQUk7V0FDbEIsTUFBTSxHQUFHLEVBQUU7Ozs7QUFJVCxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBVFUsZ0JBQWdCOzthQVdmLHdCQUFHOzs7QUFDYixZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN6QixjQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSzttQkFBSyxNQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1dBQUEsQ0FBQyxDQUFDO1NBQ3RELENBQUMsQ0FBQTtPQUNIOzs7YUFFUSxtQkFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQ3JCLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFlBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ2hELGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDdkQsTUFBTTtBQUNMLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxrQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7U0FDekQ7T0FDRjs7O2FBRWdCLDJCQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDaEMsWUFBSSxRQUFRLEVBQUU7QUFDWixrQkFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQy9DLGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtTQUMzRDtPQUNGOzs7NEJBakNVLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FENUIsc0JBTnlDLE1BQU0sRUFNeEMsT0FBTyxDQUFDLENBQ0gsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FGNUIsc0JBTE8sT0FBTyxFQUtOLGdCQUFnQixDQUFDLENBRWIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FINUIsc0JBSmdCLGFBQWEsRUFJZixjQUFjLENBQUMsQ0FHakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtXQUFoQixnQkFBZ0IiLCJmaWxlIjoiY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge29uQ2xpY2t9IGZyb20gJy4uL3V0aWwvZXZlbnRzJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1hY2NvcmRpb24nKVxuQHVzZVZpZXcoJy4vY29udGVudC5odG1sJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25FbGVtZW50IHtcbiAgQGJpbmRhYmxlIGV4cGFuZGFibGUgPSBudWxsXG4gIEBiaW5kYWJsZSBhY3RpdmVJdGVtID0gbnVsbDtcbiAgaXNBY2NvcmRpb24gPSB0cnVlO1xuICBfaXRlbXMgPSBbXTtcbiAgQGNoaWxkcmVuKCdhaS1pdGVtJykgaXRlbXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLm9uQ2xpY2soKGV2ZW50KSA9PiB0aGlzLnNldEFjdGl2ZShldmVudCwgaXRlbSkpO1xuICAgIH0pXG4gIH1cblxuICBzZXRBY3RpdmUoZXZlbnQsIGl0ZW0pIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xuICAgIGlmIChpdGVtLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgICAgaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgVmVsb2NpdHkoaXRlbS5jb250YWluZXIsIFwic2xpZGVVcFwiLCB7IGR1cmF0aW9uOiAyMDAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgVmVsb2NpdHkoaXRlbS5jb250YWluZXIsIFwic2xpZGVEb3duXCIsIHsgZHVyYXRpb246IDIwMCB9KVxuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUl0ZW1DaGFuZ2VkKGl0ZW0sIGxhc3RJdGVtKSB7XG4gICAgaWYgKGxhc3RJdGVtKSB7XG4gICAgICBsYXN0SXRlbS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgVmVsb2NpdHkobGFzdEl0ZW0uY29udGFpbmVyLCBcInNsaWRlVXBcIiwgeyBkdXJhdGlvbjogMjAwIH0pXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
