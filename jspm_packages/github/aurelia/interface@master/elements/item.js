/* */ 
define(['exports', 'aurelia-framework', 'aurelia-router', '../util/events'], function (exports, _aureliaFramework, _aureliaRouter, _utilEvents) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ItemElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ItemElement, [{
      key: 'accordion',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'href',
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
    }], null, _instanceInitializers);

    function ItemElement(element, router) {
      _classCallCheck(this, _ItemElement);

      _defineDecoratedPropertyDescriptor(this, 'accordion', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'href', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.eventListeners = [];
      this.isItem = true;

      element.tabIndex = '0';
      this.element = element;
      this.go = function (href) {
        router.navigate(href);
      };
    }

    _createDecoratedClass(ItemElement, [{
      key: 'attached',
      value: function attached() {
        this.element.appendChild(this.accordionContainer);
        this.initialHeight = this.element.clientHeight;
        this.containerHeight = this.container.clientHeight;
      }
    }, {
      key: 'accordionChanged',
      value: function accordionChanged(accordion) {
        this.isAccordionItem = true;
        if (this.header) this.header.isAccordionItem = true;
      }
    }, {
      key: 'hrefChanged',
      value: function hrefChanged(href) {
        var _this = this;

        if (href && !this.isHrefCallback) {
          this.isHrefCallback = true;
          this.onClick(function (event) {
            return _this.go(_this.href);
          });
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'setHeader',
      value: function setHeader(header) {
        this.header = header;
      }
    }, {
      key: 'onClick',
      value: function onClick(cb) {
        this.eventListeners.push(cb);
      }
    }, {
      key: '_click',
      value: function _click(event) {
        var _this2 = this;

        this.eventListeners.forEach(function (cb) {
          cb(event, _this2);
        });
      }
    }], null, _instanceInitializers);

    var _ItemElement = ItemElement;
    ItemElement = (0, _aureliaFramework.inject)(Element, _aureliaRouter.Router)(ItemElement) || ItemElement;
    ItemElement = (0, _aureliaFramework.customElement)('ai-item')(ItemElement) || ItemElement;
    return ItemElement;
  })();

  exports.ItemElement = ItemElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQU1hLFdBQVc7Ozs7MEJBQVgsV0FBVzs7cUNBTlcsUUFBUTs7ZUFPbkIsSUFBSTs7Ozs7cUNBUE8sUUFBUTs7ZUFReEIsSUFBSTs7Ozs7cUNBUlksUUFBUTs7ZUFTdEIsSUFBSTs7Ozs7QUFLWixhQVJBLFdBQVcsQ0FRVixPQUFPLEVBQUUsTUFBTSxFQUFFOzs7Ozs7Ozs7V0FIN0IsY0FBYyxHQUFHLEVBQUU7V0FDbkIsTUFBTSxHQUFHLElBQUk7O0FBR1gsYUFBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDdkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFDLElBQUksRUFBSTtBQUNqQixjQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ3ZCLENBQUE7S0FDRjs7MEJBZFUsV0FBVzs7YUFnQmQsb0JBQUc7QUFDVCxZQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNsRCxZQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQy9DLFlBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7T0FDcEQ7OzthQUVlLDBCQUFDLFNBQVMsRUFBRTtBQUMxQixZQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUM1QixZQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO09BQ3JEOzs7YUFFVSxxQkFBQyxJQUFJLEVBQUU7OztBQUNoQixZQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDaEMsY0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDM0IsY0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7bUJBQUksTUFBSyxFQUFFLENBQUMsTUFBSyxJQUFJLENBQUM7V0FBQSxDQUFFLENBQUM7U0FDNUM7T0FDRjs7O2FBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDL0Q7OzthQUVRLG1CQUFDLE1BQU0sRUFBRTtBQUNoQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztPQUN0Qjs7O2FBRU0saUJBQUMsRUFBRSxFQUFFO0FBQ1YsWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7T0FDOUI7OzthQUVLLGdCQUFDLEtBQUssRUFBRTs7O0FBQ1osWUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLEVBQUk7QUFDaEMsWUFBRSxDQUFDLEtBQUssU0FBTyxDQUFDO1NBQ2pCLENBQUMsQ0FBQTtPQUNIOzs7dUJBbERVLFdBQVc7QUFBWCxlQUFXLEdBRHZCLHNCQUw0QyxNQUFNLEVBSzNDLE9BQU8saUJBSlAsTUFBTSxDQUlVLENBQ1gsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLHNCQUptQixhQUFhLEVBSWxCLFNBQVMsQ0FBQyxDQUVaLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJlbGVtZW50cy9pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7RXZlbnRIYW5kbGVyc30gZnJvbSAnLi4vdXRpbC9ldmVudHMnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktaXRlbScpXG5AaW5qZWN0KEVsZW1lbnQsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBJdGVtRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBhY2NvcmRpb24gPSBudWxsO1xuICBAYmluZGFibGUgaHJlZiA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuXG4gIGV2ZW50TGlzdGVuZXJzID0gW107XG4gIGlzSXRlbSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcm91dGVyKSB7XG4gICAgZWxlbWVudC50YWJJbmRleCA9ICcwJztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ28gPSAoaHJlZik9PiB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoaHJlZik7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYWNjb3JkaW9uQ29udGFpbmVyKTtcbiAgICB0aGlzLmluaXRpYWxIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgYWNjb3JkaW9uQ2hhbmdlZChhY2NvcmRpb24pIHtcbiAgICB0aGlzLmlzQWNjb3JkaW9uSXRlbSA9IHRydWU7XG4gICAgaWYgKHRoaXMuaGVhZGVyKSB0aGlzLmhlYWRlci5pc0FjY29yZGlvbkl0ZW0gPSB0cnVlO1xuICB9XG5cbiAgaHJlZkNoYW5nZWQoaHJlZikge1xuICAgIGlmIChocmVmICYmICF0aGlzLmlzSHJlZkNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmlzSHJlZkNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMub25DbGljayhldmVudCA9PiB0aGlzLmdvKHRoaXMuaHJlZikgKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1hY3RpdmUnKTtcbiAgfVxuXG4gIHNldEhlYWRlcihoZWFkZXIpIHtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIG9uQ2xpY2soY2IpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goY2IpO1xuICB9XG5cbiAgX2NsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKGNiID0+IHtcbiAgICAgIGNiKGV2ZW50LCB0aGlzKTtcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
