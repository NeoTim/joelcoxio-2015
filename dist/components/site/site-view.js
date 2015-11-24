System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, SiteView;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      SiteView = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(SiteView, [{
          key: 'column',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'row',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'align',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'justify',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'scroll',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function SiteView(element) {
          _classCallCheck(this, _SiteView);

          _defineDecoratedPropertyDescriptor(this, 'column', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'row', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'align', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'justify', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'scroll', _instanceInitializers);

          this.layoutClass = null;
          this.alignClass = null;
          this.justifyClass = null;

          this.element = element;
        }

        _createDecoratedClass(SiteView, [{
          key: 'attached',
          value: function attached() {
            this.column = this.column || this.element.hasAttribute('column');
            this.row = this.row || this.element.hasAttribute('row');
            this.scroll = this.scroll || this.element.hasAttribute('scroll');
          }
        }, {
          key: 'columnChanged',
          value: function columnChanged(value) {
            this.layoutClass = value ? 'site-view--is-column' : '';
          }
        }, {
          key: 'rowChanged',
          value: function rowChanged(value) {
            this.layoutClass = value ? 'site-view--is-row' : '';
          }
        }, {
          key: 'alignChanged',
          value: function alignChanged(value) {
            this.alignClass = value ? 'site-view--align-' + value : '';
          }
        }, {
          key: 'justifyChanged',
          value: function justifyChanged(value) {
            this.justifyClass = value ? 'site-view--justify-' + value : '';
          }
        }, {
          key: 'scrollChanged',
          value: function scrollChanged(scrollable) {
            this.scrollClass = scrollable ? 'site-view--scrollable' : '';
          }
        }], null, _instanceInitializers);

        var _SiteView = SiteView;
        SiteView = inject(Element)(SiteView) || SiteView;
        return SiteView;
      })();

      _export('SiteView', SiteView);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2l0ZS9zaXRlLXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dCQUdhLFFBQVE7Ozs7Ozs7Ozs7bUNBSGIsUUFBUTtpQ0FBRSxNQUFNOzs7QUFHWCxjQUFROzs7OzhCQUFSLFFBQVE7O3VCQUNsQixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQU8sSUFBSTs7Ozs7dUJBQ25CLFFBQVE7O21CQUFTLElBQUk7Ozs7O3VCQUNyQixRQUFROzttQkFBVyxJQUFJOzs7Ozt1QkFDdkIsUUFBUTs7bUJBQVUsSUFBSTs7Ozs7QUFNWixpQkFYQSxRQUFRLENBV1AsT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7O2VBSnJCLFdBQVcsR0FBSSxJQUFJO2VBQ25CLFVBQVUsR0FBSyxJQUFJO2VBQ25CLFlBQVksR0FBRyxJQUFJOztBQUdqQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBYlUsUUFBUTs7aUJBZVgsb0JBQUc7QUFDVCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLGdCQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEQsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUNsRTs7O2lCQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixnQkFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEdBQUcsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO1dBQ3hEOzs7aUJBRVMsb0JBQUMsS0FBSyxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBRyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7V0FDckQ7OztpQkFFVyxzQkFBQyxLQUFLLEVBQUU7QUFDbEIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyx5QkFBdUIsS0FBSyxHQUFLLEVBQUUsQ0FBQztXQUM1RDs7O2lCQUVhLHdCQUFDLEtBQUssRUFBRTtBQUNwQixnQkFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLDJCQUF5QixLQUFLLEdBQUssRUFBRSxDQUFDO1dBQ2hFOzs7aUJBRVksdUJBQUMsVUFBVSxFQUFFO0FBQ3hCLGdCQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsNkJBQTZCLEVBQUUsQ0FBQztXQUM5RDs7O3dCQXZDVSxRQUFRO0FBQVIsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUSIsImZpbGUiOiJjb21wb25lbnRzL3NpdGUvc2l0ZS12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBTaXRlVmlld3tcbiAgQGJpbmRhYmxlIGNvbHVtbiA9IG51bGw7XG4gIEBiaW5kYWJsZSByb3cgPSBudWxsO1xuICBAYmluZGFibGUgYWxpZ24gPSBudWxsO1xuICBAYmluZGFibGUganVzdGlmeSA9IG51bGw7XG4gIEBiaW5kYWJsZSBzY3JvbGwgPSBudWxsO1xuXG4gIGxheW91dENsYXNzICA9IG51bGw7XG4gIGFsaWduQ2xhc3MgICA9IG51bGw7XG4gIGp1c3RpZnlDbGFzcyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmNvbHVtbiA9IHRoaXMuY29sdW1uIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2NvbHVtbicpO1xuICAgIHRoaXMucm93ID0gdGhpcy5yb3cgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncm93Jyk7XG4gICAgdGhpcy5zY3JvbGwgPSB0aGlzLnNjcm9sbCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdzY3JvbGwnKTtcbiAgfVxuXG4gIGNvbHVtbkNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmxheW91dENsYXNzID0gdmFsdWUgPyAnc2l0ZS12aWV3LS1pcy1jb2x1bW4nIDogJyc7XG4gIH1cblxuICByb3dDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5sYXlvdXRDbGFzcyA9IHZhbHVlID8gJ3NpdGUtdmlldy0taXMtcm93JyA6ICcnO1xuICB9XG5cbiAgYWxpZ25DaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5hbGlnbkNsYXNzID0gdmFsdWUgPyBgc2l0ZS12aWV3LS1hbGlnbi0ke3ZhbHVlfWAgOiAnJztcbiAgfVxuXG4gIGp1c3RpZnlDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5qdXN0aWZ5Q2xhc3MgPSB2YWx1ZSA/IGBzaXRlLXZpZXctLWp1c3RpZnktJHt2YWx1ZX1gIDogJyc7XG4gIH1cblxuICBzY3JvbGxDaGFuZ2VkKHNjcm9sbGFibGUpIHtcbiAgICB0aGlzLnNjcm9sbENsYXNzID0gc2Nyb2xsYWJsZSA/IGBzaXRlLXZpZXctLXNjcm9sbGFibGVgIDogJyc7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
