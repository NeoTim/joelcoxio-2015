/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-sidebar';
  var SIDE_BAR_ANIMATIONS = {
    'slide-over': 'slide-over',
    'slide-over-ios': 'slide-over-ios',
    'slide-over-android': 'slide-over-android',
    'slide-over-ai': 'slide-over-ai',
    'push-view': 'push-view',
    'push-view-ios': 'push-view-ios',
    'push-view-android': 'push-view-android',
    'push-view-ai': 'push-view-ai',
    'push-content': 'push-content',
    'push-content-ios': 'push-content-ios',
    'push-content-android': 'push-content-android',
    'push-content-ai': 'push-content-ai'
  };

  function isPushView(animation) {
    return (/push-view/gi.test(animation)
    );
  }

  var SidebarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SidebarElement, [{
      key: 'open',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'fold',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'side',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'animation',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'slide-over';
      },
      enumerable: true
    }], null, _instanceInitializers);

    function SidebarElement(element) {
      _classCallCheck(this, _SidebarElement);

      _defineDecoratedPropertyDescriptor(this, 'open', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'fold', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'side', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers);

      element.className += ' ' + className;
      this.element = element;
      var side = this.element.getAttribute('side');
      document.aureliaInterface.sidebars = document.aureliaInterface.sidebars || {};
      if (side) {
        document.aureliaInterface.sidebars[side] = this;
      }
    }

    _createDecoratedClass(SidebarElement, [{
      key: 'attached',
      value: function attached() {
        this.animationChanged(this.animation);

        if (document.documentElement.classList.contains('platform-ios')) {
          if (this.element.hasAttribute('push-view-ios')) {
            this.animation = 'push-view';
          } else if (this.element.hasAttribute('push-content-ios')) {
            this.animation = 'push-content';
          } else if (this.element.hasAttribute('slide-over-ios')) {
            this.animation = 'slide-over';
          }
        } else if (document.documentElement.classList.contains('platform-android') || document.documentElement.classList.contains('platform-ai')) {
          if (this.element.hasAttribute('push-view-android')) {
            this.animation = 'push-view';
          } else if (this.element.hasAttribute('push-content-android')) {
            this.animation = 'push-content';
          } else if (this.element.hasAttribute('slide-over-android')) {
            this.animation = 'slide-over';
          }
        } else {
          if (this.element.hasAttribute('push-view-ios')) {
            this.animation = 'push-view';
          } else if (this.element.hasAttribute('push-content-ios')) {
            this.animation = 'push-content';
          } else if (this.element.hasAttribute('slide-over-ios')) {
            this.animation = 'slide-over';
          }
        }
      }
    }, {
      key: 'openChanged',
      value: function openChanged(value) {
        var self = this;
        if (this.isPushView) {
          this.element.parentElement.classList[value ? 'add' : 'remove']('sidebar-push-view-open');
        } else {
          this.element.classList[value ? 'add' : 'remove']('open');
        }
      }
    }, {
      key: 'openSidebar',
      value: function openSidebar() {
        if (!this.open) {
          document.body.addEventListener('click', this.closeSidebar.bind(this), true);
        }
        this.open = true;
      }
    }, {
      key: 'closeSidebar',
      value: function closeSidebar() {
        document.body.removeEventListener('click', this.closeSidebar.bind(this), true);
        this.open = false;
      }
    }, {
      key: 'toggleSidebar',
      value: function toggleSidebar() {
        if (this.open) this.closeSidebar();else this.openSidebar();
      }
    }, {
      key: 'animationChanged',
      value: function animationChanged(animation, lastAnimation) {
        if (animation in SIDE_BAR_ANIMATIONS) {
          lastAnimation && this.element.classList.remove(lastAnimation);
          animation && this.element.classList.add(animation);
        }

        this.isPushView = isPushView(animation);
        if (this.isPushView && this.element.parentElement) {
          this.element.parentElement.classList.add('sidebar-' + animation);
        }
      }
    }], null, _instanceInitializers);

    var _SidebarElement = SidebarElement;
    SidebarElement = (0, _aureliaFramework.inject)(Element)(SidebarElement) || SidebarElement;
    SidebarElement = (0, _aureliaFramework.customElement)('ai-sidebar')(SidebarElement) || SidebarElement;
    return SidebarElement;
  })();

  exports.SidebarElement = SidebarElement;
});
//# sourceMappingURL=data:application/json;base64,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ZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuY29uc3QgY2xhc3NOYW1lID0gJ2FpLXNpZGViYXInO1xuY29uc3QgU0lERV9CQVJfQU5JTUFUSU9OUyA9IHtcbiAgJ3NsaWRlLW92ZXInOidzbGlkZS1vdmVyJyxcbiAgJ3NsaWRlLW92ZXItaW9zJzonc2xpZGUtb3Zlci1pb3MnLFxuICAnc2xpZGUtb3Zlci1hbmRyb2lkJzonc2xpZGUtb3Zlci1hbmRyb2lkJyxcbiAgJ3NsaWRlLW92ZXItYWknOidzbGlkZS1vdmVyLWFpJyxcbiAgJ3B1c2gtdmlldyc6J3B1c2gtdmlldycsXG4gICdwdXNoLXZpZXctaW9zJzoncHVzaC12aWV3LWlvcycsXG4gICdwdXNoLXZpZXctYW5kcm9pZCc6J3B1c2gtdmlldy1hbmRyb2lkJyxcbiAgJ3B1c2gtdmlldy1haSc6J3B1c2gtdmlldy1haScsXG4gICdwdXNoLWNvbnRlbnQnOidwdXNoLWNvbnRlbnQnLFxuICAncHVzaC1jb250ZW50LWlvcyc6J3B1c2gtY29udGVudC1pb3MnLFxuICAncHVzaC1jb250ZW50LWFuZHJvaWQnOidwdXNoLWNvbnRlbnQtYW5kcm9pZCcsXG4gICdwdXNoLWNvbnRlbnQtYWknOidwdXNoLWNvbnRlbnQtYWknXG59O1xuXG5mdW5jdGlvbiBpc1B1c2hWaWV3KGFuaW1hdGlvbikge1xuICByZXR1cm4gL3B1c2gtdmlldy9naS50ZXN0KGFuaW1hdGlvbik7XG59XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLXNpZGViYXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJFbGVtZW50IHtcbiAgQGJpbmRhYmxlIG9wZW4gPSBudWxsO1xuICBAYmluZGFibGUgZm9sZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBzaWRlID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFuaW1hdGlvbiA9ICdzbGlkZS1vdmVyJztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbGV0IHNpZGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzaWRlJyk7XG4gICAgZG9jdW1lbnQuYXVyZWxpYUludGVyZmFjZS5zaWRlYmFycyA9IGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2Uuc2lkZWJhcnMgfHwge307XG4gICAgaWYgKHNpZGUpIHtcbiAgICAgIGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2Uuc2lkZWJhcnNbc2lkZV0gPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKCl7XG4gICAgdGhpcy5hbmltYXRpb25DaGFuZ2VkKHRoaXMuYW5pbWF0aW9uKTtcblxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF0Zm9ybS1pb3MnKSkge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3B1c2gtdmlldy1pb3MnKSkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICdwdXNoLXZpZXcnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdwdXNoLWNvbnRlbnQtaW9zJykpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSAncHVzaC1jb250ZW50JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2xpZGUtb3Zlci1pb3MnKSkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICdzbGlkZS1vdmVyJztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxhdGZvcm0tYW5kcm9pZCcpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXRmb3JtLWFpJykpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdwdXNoLXZpZXctYW5kcm9pZCcpKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gJ3B1c2gtdmlldyc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3B1c2gtY29udGVudC1hbmRyb2lkJykpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSAncHVzaC1jb250ZW50JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2xpZGUtb3Zlci1hbmRyb2lkJykpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSAnc2xpZGUtb3Zlcic7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3B1c2gtdmlldy1pb3MnKSkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICdwdXNoLXZpZXcnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdwdXNoLWNvbnRlbnQtaW9zJykpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSAncHVzaC1jb250ZW50JztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2xpZGUtb3Zlci1pb3MnKSkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICdzbGlkZS1vdmVyJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvcGVuQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5pc1B1c2hWaWV3KSB7XG4gICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnc2lkZWJhci1wdXNoLXZpZXctb3BlbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5TaWRlYmFyKCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVNpZGViYXIuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gIH1cblxuICBjbG9zZVNpZGViYXIoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VTaWRlYmFyLmJpbmQodGhpcyksIHRydWUpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBpZiAodGhpcy5vcGVuKSB0aGlzLmNsb3NlU2lkZWJhcigpXG4gICAgZWxzZSB0aGlzLm9wZW5TaWRlYmFyKCk7XG4gIH1cblxuICBhbmltYXRpb25DaGFuZ2VkKGFuaW1hdGlvbiwgbGFzdEFuaW1hdGlvbikge1xuICAgIGlmIChhbmltYXRpb24gaW4gU0lERV9CQVJfQU5JTUFUSU9OUykge1xuICAgICAgbGFzdEFuaW1hdGlvbiAmJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYXN0QW5pbWF0aW9uKTtcbiAgICAgIGFuaW1hdGlvbiAmJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChhbmltYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuaXNQdXNoVmlldyA9IGlzUHVzaFZpZXcoYW5pbWF0aW9uKTtcbiAgICBpZiAodGhpcy5pc1B1c2hWaWV3ICYmIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBzaWRlYmFyLSR7YW5pbWF0aW9ufWApO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
