/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var __ai, __tap, __util, __iselement;

  var config = {
    doc: undefined,

    activeEle: undefined,

    enabledTouchEvents: undefined,

    mouseResetTimer: undefined,

    pointerMoved: undefined,

    pointerStart: undefined,

    touchFocusedInput: undefined,

    lastTouchTarget: undefined,

    touchMoveListener: 'touchmove'
  };

  var defaults = {
    RELEASE_TOLERANCE: 12,

    RELEASE_BUTTON_TOLERANCE: 50
  };

  var TAP_EVENT_LISTENERS = {
    'click': tapClickGateKeeper,

    'mousedown': tapMouseDown,
    'mouseup': tapMouseUp,
    'mousemove': tapMouseMove,

    'touchstart': tapTouchStart,
    'touchend': tapTouchEnd,
    'touchcancel': tapTouchCancel,
    'touchmove': tapTouchMove,

    'pointerdown': tapTouchStart,
    'pointerup': tapTouchEnd,
    'pointercancel': tapTouchCancel,
    'pointermove': tapTouchMove,

    'MSPointerDown': tapTouchStart,
    'MSPointerUp': tapTouchEnd,
    'MSPointerCancel': tapTouchCancel,
    'MSPointerMove': tapTouchMove,

    'focusin': tapFocusIn,
    'focusout': tapFocusOut
  };

  var InterfaceTapUtil = (function () {
    function InterfaceTapUtil() {
      _classCallCheck(this, InterfaceTapUtil);
    }

    _createClass(InterfaceTapUtil, [{
      key: 'requiresNativeClick',
      value: function requiresNativeClick(element) {
        if (!element || element.disabled || /^(file|range)$/i.test(element.type) || /^(object|video)$/i.test(element.tagName) || __iselement.isLabelContainingFileInput(element)) {
          return true;
        }
        return __iselement.isElementTapDisabled(element);
      }
    }, {
      key: 'pointerCoord',
      value: function pointerCoord(event) {
        var c = { x: 0, y: 0 };
        if (event) {
          var touches = event.touches && event.touches.length ? event.touches : [event];
          var e = event.changedTouches && event.changedTouches[0] || touches[0];
          if (e) {
            c.x = e.clientX || e.pageX || 0;
            c.y = e.clientY || e.pageY || 0;
          }
        }
        return c;
      }
    }, {
      key: 'activeElement',
      value: function activeElement(ele) {
        if (arguments.length) {
          config.activeEle = ele;
        }
        return config.activeEle || document.activeElement;
      }
    }, {
      key: 'hasPointerMoved',
      value: function hasPointerMoved(endEvent) {
        if (!endEvent || endEvent.target.nodeType !== 1 || !config.pointerStart || config.pointerStart.x === 0 && config.pointerStart.y === 0) {
          return false;
        }
        var endCoordinates = __util.pointerCoord(endEvent);

        var hasClassList = !!(endEvent.target.classList && endEvent.target.classList.contains && typeof endEvent.target.classList.contains === 'function');
        var releaseTolerance = hasClassList && endEvent.target.classList.contains('button') ? defaults.RELEASE_BUTTON_TOLERANCE : defaults.RELEASE_TOLERANCE;

        return Math.abs(config.pointerStart.x - endCoordinates.x) > releaseTolerance || Math.abs(config.pointerStart.y - endCoordinates.y) > releaseTolerance;
      }
    }, {
      key: 'containingElement',
      value: function containingElement(element, allowSelf) {
        var climbEle = element;
        for (var x = 0; x < 6; x++) {
          if (!climbEle) break;
          if (climbEle.tagName === 'LABEL') return climbEle;
          climbEle = climbEle.parentElement;
        }
        if (allowSelf !== false) return element;
      }
    }, {
      key: 'targetElement',
      value: function targetElement(element) {
        if (element && element.tagName === 'LABEL') {
          if (element.control) return element.control;

          if (element.querySelector) {
            var control = element.querySelector('input,textarea,select');
            if (control) return control;
          }
        }
        return element;
      }
    }]);

    return InterfaceTapUtil;
  })();

  exports.InterfaceTapUtil = InterfaceTapUtil;
  ;

  var InterfaceTapIsElement = (function () {
    function InterfaceTapIsElement() {
      _classCallCheck(this, InterfaceTapIsElement);
    }

    _createClass(InterfaceTapIsElement, [{
      key: 'isElementTapDisabled',
      value: function isElementTapDisabled(element) {
        if (element && element.nodeType === 1) {
          while (element) {
            if ((element.dataset ? element.dataset.tapDisabled : element.getAttribute('data-tap-disabled')) == 'true') {
              return true;
            }
            element = element.parentElement;
          }
        }
        return false;
      }
    }, {
      key: 'isLabelContainingFileInput',
      value: function isLabelContainingFileInput(element) {
        var labelElement = __util.containingElement(element);
        if (labelElement.tagName !== 'LABEL') return false;
        var fileInput = labelElement.querySelector('input[type=file]');
        if (fileInput && fileInput.disabled === false) return true;
        return false;
      }
    }, {
      key: 'isTextInput',
      value: function isTextInput(element) {
        return !!element && (element.tagName == 'TEXTAREA' || element.contentEditable === 'true' || element.tagName == 'INPUT' && !/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(element.type));
      }
    }, {
      key: 'isDateInput',
      value: function isDateInput(element) {
        return !!element && (element.tagName == 'INPUT' && /^(date|time|datetime-local|month|week)$/i.test(element.type));
      }
    }, {
      key: 'isKeyboardElement',
      value: function isKeyboardElement(element) {
        if (!__ai.platform.isIOS() || __ai.platform.isIPad()) {
          return __tap.element.isTextInput(element) && !__iselement.isDateInput(element);
        } else {
          return __iselement.isTextInput(element) || !!element && element.tagName == "SELECT";
        }
      }
    }, {
      key: 'isLabelWithTextInput',
      value: function isLabelWithTextInput(element) {
        var container = __util.containingElement(element, false);

        return !!container && __iselement.isTextInput(__util.targetElement(container));
      }
    }, {
      key: 'containsOrIsTextInput',
      value: function containsOrIsTextInput(element) {
        return __iselement.isTextInput(element) || __iselement.isLabelWithTextInput(element);
      }
    }]);

    return InterfaceTapIsElement;
  })();

  exports.InterfaceTapIsElement = InterfaceTapIsElement;

  var InterfaceTapSupport = (function () {
    function InterfaceTapSupport(aureliaInterface) {
      _classCallCheck(this, InterfaceTapSupport);

      this.config = config;
      this.hasCheckedClone = false;

      __ai = aureliaInterface;
      __tap = this;
      __util = new InterfaceTapUtil();
      __iselement = new InterfaceTapIsElement();

      this.ai = __ai;
      this.util = __util;
      this.iselement = __iselement;

      return this;
    }

    _createClass(InterfaceTapSupport, [{
      key: 'register',
      value: function register(element) {
        config.doc = element;
        tapEventListener('click', true, true);
        tapEventListener('mouseup');
        tapEventListener('mousedown');

        if (window.navigator.pointerEnabled) {
          tapEventListener('pointerdown');
          tapEventListener('pointerup');
          tapEventListener('pointcancel');
          config.touchMoveListener = 'pointermove';
        } else if (window.navigator.msPointerEnabled) {
          tapEventListener('MSPointerDown');
          tapEventListener('MSPointerUp');
          tapEventListener('MSPointerCancel');
          config.touchMoveListener = 'MSPointerMove';
        } else {
          tapEventListener('touchstart');
          tapEventListener('touchend');
          tapEventListener('touchcancel');
        }

        tapEventListener('focusin');
        tapEventListener('focusout');

        return function () {
          for (var type in TAP_EVENT_LISTENERS) {
            tapEventListener(type, false);
          }
          config.doc = null;
          config.activeEle = null;
          config.enabledTouchEvents = false;
          config.pointerMoved = false;
          config.pointerStart = null;
        };
      }
    }, {
      key: 'ignoreScrollStart',
      value: function ignoreScrollStart(e) {
        return e.defaultPrevented || /^(file|range)$/i.test(e.target.type) || (e.target.dataset ? e.target.dataset.preventScroll : e.target.getAttribute('data-prevent-scroll')) == 'true' || !!/^(object|embed)$/i.test(e.target.tagName) || __iselement.isElementTapDisabled(e.target);
      }
    }, {
      key: 'removeClonedInputs',
      value: function removeClonedInputs(container) {
        this.hasCheckedClone = false;

        __ai.requestAnimationFrame(function () {
          var clonedInputs = container.querySelectorAll('.cloned-text-input');
          var previousInputFocus = container.querySelectorAll('.previous-input-focus');
          var x;

          for (x = 0; x < clonedInputs.length; x++) {
            clonedInputs[x].parentElement.removeChild(clonedInputs[x]);
          }

          for (x = 0; x < previousInputFocus.length; x++) {
            previousInputFocus[x].classList.remove('previous-input-focus');
            previousInputFocus[x].style.top = '';
            if (__ai.keyboard.isOpen && !__ai.keyboard.isClosing) previousInputFocus[x].focus();
          }
        });
      }
    }, {
      key: 'cloneFocusedInput',
      value: function cloneFocusedInput(container) {
        if (this.hasCheckedClone) return;
        this.hasCheckedClone = true;

        __ai.requestAnimationFrame(function () {
          var focusInput = container.querySelector(':focus');
          if (__iselement.isTextInput(focusInput) && !__iselement.isDateInput(focusInput)) {
            var clonedInput = focusInput.cloneNode(true);

            clonedInput.value = focusInput.value;
            clonedInput.classList.add('cloned-text-input');
            clonedInput.readOnly = true;
            if (focusInput.isContentEditable) {
              clonedInput.contentEditable = focusInput.contentEditable;
              clonedInput.innerHTML = focusInput.innerHTML;
            }
            focusInput.parentElement.insertBefore(clonedInput, focusInput);
            focusInput.classList.add('previous-input-focus');

            clonedInput.scrollTop = focusInput.scrollTop;
          }
        });
      }
    }, {
      key: 'setTolerance',
      value: function setTolerance(releaseTolerance, releaseButtonTolerance) {
        defaults.RELEASE_TOLERANCE = releaseTolerance;
        defaults.RELEASE_BUTTON_TOLERANCE = releaseButtonTolerance;
      }
    }, {
      key: 'cancelClick',
      value: function cancelClick() {
        config.pointerMoved = true;
      }
    }]);

    return InterfaceTapSupport;
  })();

  exports.InterfaceTapSupport = InterfaceTapSupport;

  function tapEventListener(type, enable, useCapture) {
    if (enable !== false) {
      config.doc.addEventListener(type, TAP_EVENT_LISTENERS[type], useCapture);
    } else {
      config.doc.removeEventListener(type, TAP_EVENT_LISTENERS[type]);
    }
  }

  function tapClick(e) {
    var container = __util.containingElement(e.target);
    var ele = __util.targetElement(container);

    if (__util.requiresNativeClick(ele) || config.pointerMoved) return false;

    var c = __util.pointerCoord(e);

    triggerMouseEvent('click', ele, c.x, c.y);

    tapHandleFocus(ele);
  }

  function triggerMouseEvent(type, ele, x, y) {
    var clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(type, true, true, window, 1, 0, 0, x, y, false, false, false, false, 0, null);
    clickEvent.isAiTap = true;
    ele.dispatchEvent(clickEvent);
  }

  function tapClickGateKeeper(e) {
    if (e.target.type == 'submit' && e.detail === 0) {
      return null;
    }

    if (__ai.scroll.isScrolling && __util.containsOrIsTextInput(e.target) || !e.isAiTap && !__util.requiresNativeClick(e.target)) {
      e.stopPropagation();

      if (!__iselement.isLabelWithTextInput(e.target)) {
        e.preventDefault();
      }
      return false;
    }
  }

  function tapMouseDown(e) {
    if (e.isAiTap || tapIgnoreEvent(e)) return null;

    if (config.enabledTouchEvents) {
      console.log('mousedown', 'stop event');
      e.stopPropagation();

      if ((!__iselement.isTextInput(e.target) || config.lastTouchTarget !== e.target) && !/^(select|option)$/i.test(e.target.tagName)) {
        e.preventDefault();
      }

      return false;
    }

    config.pointerMoved = false;
    config.pointerStart = __util.pointerCoord(e);

    tapEventListener('mousemove');
    __ai.tapActivator.start(e);
  }

  function tapMouseUp(e) {
    if (config.enabledTouchEvents) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }

    if (tapIgnoreEvent(e) || /^(select|option)$/i.test(e.target.tagName)) return false;

    if (!__util.hasPointerMoved(e)) {
      tapClick(e);
    }
    tapEventListener('mousemove', false);
    __ai.tapActivator.end();
    config.pointerMoved = false;
  }

  function tapMouseMove(e) {
    if (__util.hasPointerMoved(e)) {
      tapEventListener('mousemove', false);
      __ai.tapActivator.end();
      config.pointerMoved = true;
      return false;
    }
  }

  function tapTouchStart(e) {
    if (tapIgnoreEvent(e)) return;

    config.pointerMoved = false;

    tapEnableTouchEvents();
    config.pointerStart = __util.pointerCoord(e);

    tapEventListener(config.touchMoveListener);
    __ai.tapActivator.start(e);

    if (__ai.platform.isIOS() && __iselement.isLabelWithTextInput(e.target)) {

      var textInput = __util.targetElement(__util.containingElement(e.target));
      if (textInput !== tapActiveEle) {
        e.preventDefault();
      }
    }
  }

  function tapTouchEnd(e) {
    if (tapIgnoreEvent(e)) return;

    tapEnableTouchEvents();
    if (!__util.hasPointerMoved(e)) {
      tapClick(e);

      if (/^(select|option)$/i.test(e.target.tagName)) {
        e.preventDefault();
      }
    }

    config.lastTouchTarget = e.target;
    tapTouchCancel();
  }

  function tapTouchMove(e) {
    if (__util.hasPointerMoved(e)) {
      config.pointerMoved = true;
      tapEventListener(config.touchMoveListener, false);
      __ai.tapActivator.end();
      return false;
    }
  }

  function tapTouchCancel() {
    tapEventListener(config.touchMoveListener, false);
    __ai.tapActivator.end();
    config.pointerMoved = false;
  }

  function tapEnableTouchEvents() {
    config.enabledTouchEvents = true;
    clearTimeout(config.mouseResetTimer);
    config.mouseResetTimer = setTimeout(function () {
      config.enabledTouchEvents = false;
    }, 600);
  }

  function tapIgnoreEvent(e) {
    if (e.isTapHandled) return true;
    e.isTapHandled = true;

    if (__ai.scroll.isScrolling && __util.containsOrIsTextInput(e.target)) {
      e.preventDefault();
      return true;
    }
  }

  function tapHandleFocus(ele) {
    config.touchFocusedInput = null;

    var triggerFocusIn = false;

    if (ele.tagName == 'SELECT') {
      triggerMouseEvent('mousedown', ele, 0, 0);
      ele.focus && ele.focus();
      triggerFocusIn = true;
    } else if (__util.activeElement() === ele) {
      triggerFocusIn = true;
    } else if (/^(input|textarea)$/i.test(ele.tagName) || ele.isContentEditable) {
      triggerFocusIn = true;
      ele.focus && ele.focus();
      ele.value = ele.value;
      if (config.enabledTouchEvents) {
        config.touchFocusedInput = ele;
      }
    } else {
      tapFocusOutActive();
    }

    if (triggerFocusIn) {
      __util.activeElement(ele);
      __ai.trigger('ai.focusin', {
        target: ele
      }, true);
    }
  }

  function tapFocusOutActive() {
    var ele = __util.activeElement();
    if (ele && (/^(input|textarea|select)$/i.test(ele.tagName) || ele.isContentEditable)) {
      console.log('tapFocusOutActive', ele.tagName);
      ele.blur();
    }
    __util.activeElement(null);
  }

  function tapFocusIn(e) {

    if (config.enabledTouchEvents && __iselement.isTextInput(__util.activeElement()) && __iselement.isTextInput(config.touchFocusedInput) && config.touchFocusedInput !== e.target) {
      console.log('focusin', 'config.touchFocusedInput');
      config.touchFocusedInput.focus();
      config.touchFocusedInput = null;
    }
    __ai.scroll.isScrolling = false;
  }

  function tapFocusOut() {
    __util.activeElement(null);
  }
});
//# sourceMappingURL=data:application/json;base64,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VUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM1Qjs7QUFFRCxXQUFTLFVBQVUsQ0FBQyxDQUFDLEVBQUU7O0FBTXJCLFFBQUksTUFBTSxDQUFDLGtCQUFrQixJQUN6QixXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUMvQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUNqRCxNQUFNLENBQUMsaUJBQWlCLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQU16QyxhQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBQ25ELFlBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQyxZQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0tBQ2pDO0FBQ0QsUUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0dBQ2pDOztBQUVELFdBQVMsV0FBVyxHQUFHO0FBRXJCLFVBQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUIiLCJmaWxlIjoic3VwcG9ydC90YXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEF1cmVsaWEgSW50ZXJmYWNlIFRhcCBTdXBwb3J0XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBPbiB0b3VjaCBkZXZpY2VzIHN1Y2ggYXMgYSBwaG9uZSBvciB0YWJsZXQsIHNvbWUgYnJvd3NlcnMgaW1wbGVtZW50IGEgMzAwbXMgZGVsYXkgYmV0d2VlblxuICogdGhlIHRpbWUgdGhlIHVzZXIgc3RvcHMgdG91Y2hpbmcgdGhlIGRpc3BsYXkgYW5kIHRoZSBtb21lbnQgdGhlIGJyb3dzZXIgZXhlY3V0ZXMgdGhlXG4gKiBjbGljay4gVGhpcyBkZWxheSB3YXMgaW5pdGlhbGx5IGludHJvZHVjZWQgc28gdGhlIGJyb3dzZXIgY2FuIGtub3cgd2hldGhlciB0aGUgdXNlciB3YW50cyB0b1xuICogZG91YmxlLXRhcCB0byB6b29tIGluIG9uIHRoZSB3ZWJwYWdlLiAgQmFzaWNhbGx5LCB0aGUgYnJvd3NlciB3YWl0cyByb3VnaGx5IDMwMG1zIHRvIHNlZSBpZlxuICogdGhlIHVzZXIgaXMgZG91YmxlLXRhcHBpbmcsIG9yIGp1c3QgdGFwcGluZyBvbiB0aGUgZGlzcGxheSBvbmNlLlxuICpcbiAqIE91dCBvZiB0aGUgYm94LCBBdXJlbGlhIEludGVyZmFjZSBhdXRvbWF0aWNhbGx5IHJlbW92ZXMgdGhlIDMwMG1zIGRlbGF5IGluIG9yZGVyIHRvIG1ha2VcbiAqIENyb3NzLVBsYXRmb3JtIGFwcHMgZmVlbCBtb3JlIFwibmF0aXZlXCIgbGlrZS4gUmVzdWx0aW5nbHksIG90aGVyIHNvbHV0aW9ucyBzdWNoIGFzXG4gKiBbZmFzdGNsaWNrXShodHRwczovL2dpdGh1Yi5jb20vZnRsYWJzL2Zhc3RjbGljaykgYW5kIEFuZ3VsYXInc1xuICogW25nVG91Y2hdKGh0dHBzOi8vZG9jcy5hbmd1bGFyanMub3JnL2FwaS9uZ1RvdWNoKSBzaG91bGQgbm90IGJlIGluY2x1ZGVkLCB0byBhdm9pZCBjb25mbGljdHMuXG4gKlxuICogU29tZSBicm93c2VycyBhbHJlYWR5IHJlbW92ZSB0aGUgZGVsYXkgd2l0aCBjZXJ0YWluIHNldHRpbmdzLCBzdWNoIGFzIHRoZSBDU1MgcHJvcGVydHlcbiAqIGB0b3VjaC1ldmVudHM6IG5vbmVgIG9yIHdpdGggc3BlY2lmaWMgbWV0YSB0YWcgdmlld3BvcnQgdmFsdWVzLiBIb3dldmVyLCBlYWNoIG9mIHRoZXNlXG4gKiBicm93c2VycyBzdGlsbCBoYW5kbGUgY2xpY2tzIGRpZmZlcmVudGx5LCBzdWNoIGFzIHdoZW4gdG8gZmlyZSBvZmYgb3IgY2FuY2VsIHRoZSBldmVudFxuICogKGxpa2Ugc2Nyb2xsaW5nIHdoZW4gdGhlIHRhcmdldCBpcyBhIGJ1dHRvbiwgb3IgaG9sZGluZyBhIGJ1dHRvbiBkb3duKS5cbiAqIEZvciBicm93c2VycyB0aGF0IGFscmVhZHkgcmVtb3ZlIHRoZSAzMDBtcyBkZWxheSwgY29uc2lkZXIgQUkncyB0YXAgc3lzdGVtIGFzIGEgd2F5IHRvXG4gKiBub3JtYWxpemUgaG93IGNsaWNrcyBhcmUgaGFuZGxlZCBhY3Jvc3MgdGhlIHZhcmlvdXMgZGV2aWNlcyBzbyB0aGVyZSdzIGFuIGV4cGVjdGVkIHJlc3BvbnNlXG4gKiBubyBtYXR0ZXIgd2hhdCB0aGUgZGV2aWNlLCBwbGF0Zm9ybSBvciB2ZXJzaW9uLiBBZGRpdGlvbmFsbHksIEFJIHdpbGwgcHJldmVudFxuICogZ2hvc3RjbGlja3Mgd2hpY2ggZXZlbiBicm93c2VycyB0aGF0IHJlbW92ZSB0aGUgZGVsYXkgc3RpbGwgZXhwZXJpZW5jZS5cbiAqXG4gKiBJbiBzb21lIGNhc2VzLCB0aGlyZC1wYXJ0eSBsaWJyYXJpZXMgbWF5IGFsc28gYmUgd29ya2luZyB3aXRoIHRvdWNoIGV2ZW50cyB3aGljaCBjYW4gaW50ZXJmZXJlXG4gKiB3aXRoIHRoZSB0YXAgc3lzdGVtLiBGb3IgZXhhbXBsZSwgbWFwcGluZyBsaWJyYXJpZXMgbGlrZSBHb29nbGUgb3IgTGVhZmxldCBNYXBzIG9mdGVuIGltcGxlbWVudFxuICogYSB0b3VjaCBkZXRlY3Rpb24gc3lzdGVtIHdoaWNoIGNvbmZsaWN0cyB3aXRoIEFJJ3MgdGFwIHN5c3RlbS5cbiAqXG4gKiAjIyMgRGlzYWJsaW5nIHRoZSB0YXAgc3lzdGVtXG4gKlxuICogVG8gZGlzYWJsZSB0aGUgcXVpY2sgdG91Y2ggZm9yIGFuIGVsZW1lbnQgYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4gZWxlbWVudHMsXG4gKiBhZGQgdGhlIGF0dHJpYnV0ZSBgYWktdGFwLWRpc2FibGVkPVwidHJ1ZVwiYC5cbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IGFpLXRhcC1kaXNhYmxlZD1cInRydWVcIj48L2Rpdj5cbiAqIGBgYFxuICpcbiAqICMjIyBBZGRpdGlvbmFsIE5vdGVzOlxuICpcbiAqIC0gQUkgVEFQIHdvcmtzIHdpdGggQXVyZWxpYSBJbnRlcmZhY2UncyBTY3JvbGxpbmcgU3lzdGVtXG4gKiAtIEVsZW1lbnRzIGNhbiBjb21lIGFuZCBnbyBmcm9tIHRoZSBET00gYW5kIGFpLXRhcCBkb2Vzbid0IGtlZXAgYWRkaW5nIGFuZCByZW1vdmluZ1xuICogICBsaXN0ZW5lcnNcbiAqIC0gTm8gXCJ0YXAgZGVsYXlcIiBhZnRlciB0aGUgZmlyc3QgXCJ0YXBcIiAoeW91IGNhbiB0YXAgYXMgZmFzdCBhcyB5b3Ugd2FudCwgdGhleSBhbGwgY2xpY2spXG4gKiAtIE1pbmltYWwgZXZlbnRzIGxpc3RlbmVycywgb25seSBiZWluZyBhZGRlZCB0byBkb2N1bWVudFxuICogLSBDb3JyZWN0IGZvY3VzIGluL291dCBvbiBlYWNoIGlucHV0IHR5cGUgKHNlbGVjdCwgdGV4dGVhcmVhLCByYW5nZSkgb24gZWFjaCBwbGF0Zm9ybS9kZXZpY2VcbiAqIC0gU2hvd3MgYW5kIGhpZGVzIHZpcnR1YWwga2V5Ym9hcmQgY29ycmVjdGx5IGZvciBlYWNoIHBsYXRmb3JtL2RldmljZVxuICogLSBXb3JrcyB3aXRoIGxhYmVscyBzdXJyb3VuZGluZyBpbnB1dHNcbiAqIC0gRG9lcyBub3QgZmlyZSBvZmYgYSBjbGljayBpZiB0aGUgdXNlciBtb3ZlcyB0aGUgcG9pbnRlciB0b28gZmFyXG4gKiAtIEFkZHMgYW5kIHJlbW92ZXMgYW4gJ2FjdGl2YXRlZCcgY3NzIGNsYXNzXG4gKlxuICovXG4vKlxuXG4gQUkgVEFQXG4gLS0tLS0tLS0tLS0tLS0tXG4gLSBCb3RoIHRvdWNoIGFuZCBtb3VzZSBldmVudHMgYXJlIGFkZGVkIHRvIHRoZSBkb2N1bWVudC5ib2R5IG9uIERPTSByZWFkeVxuIC0gSWYgYSB0b3VjaCBldmVudCBoYXBwZW5zLCBpdCBkb2VzIG5vdCB1c2UgbW91c2UgZXZlbnQgbGlzdGVuZXJzXG4gLSBPbiB0b3VjaGVuZCwgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gc3RhcnQgYW5kIGVuZCB3YXMgc21hbGwsIHRyaWdnZXIgYSBjbGlja1xuIC0gSW4gdGhlIHRyaWdnZXJlZCBjbGljayBldmVudCwgYWRkIGEgJ2lzQWlUYXAnIHByb3BlcnR5XG4gLSBUaGUgdHJpZ2dlcmVkIGNsaWNrIHJlY2VpdmVzIHRoZSBzYW1lIHgseSBjb29yZGluYXRlcyBhcyBhcyB0aGUgZW5kIGV2ZW50XG4gLSBPbiBkb2N1bWVudC5ib2R5IGNsaWNrIGxpc3RlbmVyICh3aXRoIHVzZUNhcHR1cmU9dHJ1ZSksIG9ubHkgYWxsb3cgY2xpY2tzIHdpdGggJ2lzQWlUYXAnXG4gLSBUcmlnZ2VyaW5nIGNsaWNrcyB3aXRoIG1vdXNlIGV2ZW50cyB3b3JrIHRoZSBzYW1lIGFzIHRvdWNoLCBleGNlcHQgd2l0aCBtb3VzZWRvd24vbW91c2V1cFxuIC0gVGFwcGluZyBpbnB1dHMgaXMgZGlzYWJsZWQgZHVyaW5nIHNjcm9sbGluZ1xuKi9cbnZhciBfX2FpLCBfX3RhcCwgX191dGlsLCBfX2lzZWxlbWVudDtcblxuY29uc3QgY29uZmlnID0ge1xuICAvKipcbiAgICogUHJvcGVydHk6IGRvY1xuICAgKiBAZGVzY3JpcHRpb24gdGhlIGVsZW1lbnQgd2hpY2ggdGhlIGxpc3RlbmVycyBhcmUgb24gKGRvY3VtZW50LmJvZHkpXG4gICAqIEB0eXBlIHtFbGVtZW50fVxuICAgKi9cbiAgZG9jOiB1bmRlZmluZWQsXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5OiBhY3RpdmVFbGVcbiAgICogQGRlc2NyaXB0aW9uIHRoZSBlbGVtZW50IHdoaWNoIGlzIGFjdGl2ZSAocHJvYmFibHkgaGFzIGZvY3VzKVxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGFjdGl2ZUVsZTogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogZW5hYmxlZFRvdWNoRXZlbnRzXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBGbGFnIGZvciBlbmFibGluZyB0b3VjaCBmb2N1c1xuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIGVuYWJsZWRUb3VjaEV2ZW50czogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogbW91c2VSZXNldFRpbWVyXG4gICAqIEB0eXBlIHtUaW1lc3RhbXB9XG4gICAqL1xuICBtb3VzZVJlc2V0VGltZXI6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogUHJvcGVydHk6IHBvaW50ZXJNb3ZlZFxuICAgKi9cbiAgcG9pbnRlck1vdmVkOiB1bmRlZmluZWQsXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5OiBwb2ludGVyU3RhcnRcbiAgICovXG4gIHBvaW50ZXJTdGFydDogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogdG91Y2hGb2N1c2VkSW5wdXRcbiAgICovXG4gIHRvdWNoRm9jdXNlZElucHV0OiB1bmRlZmluZWQsXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5OiBsYXN0VG91Y2hUYXJnZXRcbiAgICovXG4gIGxhc3RUb3VjaFRhcmdldDogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogdG91Y2hNb3ZlTGlzdGVuZXJcbiAgICovXG4gIHRvdWNoTW92ZUxpc3RlbmVyOiAndG91Y2htb3ZlJyxcbn07XG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICAvKipcbiAgICogQGRlZmF1bHRcbiAgICogUHJvcGVydHk6IFJFTEVBU0VfVE9MRVJBTkNFIGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gaG93IG11Y2ggdGhlIGNvb3JkaW5hdGVzIGNhbiBiZSBvZmYgYmV0d2VlbiBzdGFydC9lbmQsIGJ1dCBzdGlsbCBhIGNsaWNrXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBSRUxFQVNFX1RPTEVSQU5DRTogMTIsXG5cbiAgLyoqXG4gICAqIEBkZWZhdWx0XG4gICAqIFByb3BlcnR5OiBSRUxFQVNFX0JVVFRPTl9UT0xFUkFOQ0VcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIGJ1dHRvbiBlbGVtZW50cyBzaG91bGQgaGF2ZSBhIGxhcmdlciB0b2xlcmFuY2VcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIFJFTEVBU0VfQlVUVE9OX1RPTEVSQU5DRTogNTBcbn07XG5cbmNvbnN0IFRBUF9FVkVOVF9MSVNURU5FUlMgPSB7XG4gICdjbGljayc6IHRhcENsaWNrR2F0ZUtlZXBlcixcblxuICAnbW91c2Vkb3duJzogdGFwTW91c2VEb3duLFxuICAnbW91c2V1cCc6IHRhcE1vdXNlVXAsXG4gICdtb3VzZW1vdmUnOiB0YXBNb3VzZU1vdmUsXG5cbiAgJ3RvdWNoc3RhcnQnOiB0YXBUb3VjaFN0YXJ0LFxuICAndG91Y2hlbmQnOiB0YXBUb3VjaEVuZCxcbiAgJ3RvdWNoY2FuY2VsJzogdGFwVG91Y2hDYW5jZWwsXG4gICd0b3VjaG1vdmUnOiB0YXBUb3VjaE1vdmUsXG5cbiAgJ3BvaW50ZXJkb3duJzogdGFwVG91Y2hTdGFydCxcbiAgJ3BvaW50ZXJ1cCc6IHRhcFRvdWNoRW5kLFxuICAncG9pbnRlcmNhbmNlbCc6IHRhcFRvdWNoQ2FuY2VsLFxuICAncG9pbnRlcm1vdmUnOiB0YXBUb3VjaE1vdmUsXG5cbiAgJ01TUG9pbnRlckRvd24nOiB0YXBUb3VjaFN0YXJ0LFxuICAnTVNQb2ludGVyVXAnOiB0YXBUb3VjaEVuZCxcbiAgJ01TUG9pbnRlckNhbmNlbCc6IHRhcFRvdWNoQ2FuY2VsLFxuICAnTVNQb2ludGVyTW92ZSc6IHRhcFRvdWNoTW92ZSxcblxuICAnZm9jdXNpbic6IHRhcEZvY3VzSW4sXG4gICdmb2N1c291dCc6IHRhcEZvY3VzT3V0XG59O1xuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlVGFwVXRpbCB7XG5cbiAgcmVxdWlyZXNOYXRpdmVDbGljayhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQuZGlzYWJsZWQgfHwgKC9eKGZpbGV8cmFuZ2UpJC9pKS50ZXN0KGVsZW1lbnQudHlwZSkgfHwgKC9eKG9iamVjdHx2aWRlbykkL2kpLnRlc3QoZWxlbWVudC50YWdOYW1lKSB8fCBfX2lzZWxlbWVudC5pc0xhYmVsQ29udGFpbmluZ0ZpbGVJbnB1dChlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBfX2lzZWxlbWVudC5pc0VsZW1lbnRUYXBEaXNhYmxlZChlbGVtZW50KTtcbiAgfVxuXG5cbiAgcG9pbnRlckNvb3JkKGV2ZW50KSB7XG4gICAgLy8gVGhpcyBtZXRob2QgY2FuIGdldCBjb29yZGluYXRlcyBmb3IgYm90aCBhIG1vdXNlIGNsaWNrXG4gICAgLy8gb3IgYSB0b3VjaCBkZXBlbmRpbmcgb24gdGhlIGdpdmVuIGV2ZW50XG4gICAgdmFyIGMgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHZhciB0b3VjaGVzID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA/IGV2ZW50LnRvdWNoZXMgOiBbZXZlbnRdO1xuICAgICAgdmFyIGUgPSAoZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0pIHx8IHRvdWNoZXNbMF07XG4gICAgICBpZiAoZSkge1xuICAgICAgICBjLnggPSBlLmNsaWVudFggfHwgZS5wYWdlWCB8fCAwO1xuICAgICAgICBjLnkgPSBlLmNsaWVudFkgfHwgZS5wYWdlWSB8fCAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYztcbiAgfVxuXG5cbiAgYWN0aXZlRWxlbWVudChlbGUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY29uZmlnLmFjdGl2ZUVsZSA9IGVsZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZy5hY3RpdmVFbGUgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGhhc1BvaW50ZXJNb3ZlZChlbmRFdmVudCkge1xuICAgIGlmICghZW5kRXZlbnQgfHwgZW5kRXZlbnQudGFyZ2V0Lm5vZGVUeXBlICE9PSAxIHx8ICFjb25maWcucG9pbnRlclN0YXJ0IHx8IChjb25maWcucG9pbnRlclN0YXJ0LnggPT09IDAgJiYgY29uZmlnLnBvaW50ZXJTdGFydC55ID09PSAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZW5kQ29vcmRpbmF0ZXMgPSBfX3V0aWwucG9pbnRlckNvb3JkKGVuZEV2ZW50KTtcblxuICAgIHZhciBoYXNDbGFzc0xpc3QgPSAhIShlbmRFdmVudC50YXJnZXQuY2xhc3NMaXN0ICYmIGVuZEV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMgJiZcbiAgICAgIHR5cGVvZiBlbmRFdmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zID09PSAnZnVuY3Rpb24nKTtcbiAgICB2YXIgcmVsZWFzZVRvbGVyYW5jZSA9IGhhc0NsYXNzTGlzdCAmJiBlbmRFdmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24nKSA/XG4gICAgICBkZWZhdWx0cy5SRUxFQVNFX0JVVFRPTl9UT0xFUkFOQ0UgOlxuICAgICAgZGVmYXVsdHMuUkVMRUFTRV9UT0xFUkFOQ0U7XG5cbiAgICByZXR1cm4gTWF0aC5hYnMoY29uZmlnLnBvaW50ZXJTdGFydC54IC0gZW5kQ29vcmRpbmF0ZXMueCkgPiByZWxlYXNlVG9sZXJhbmNlIHx8XG4gICAgICAgICAgIE1hdGguYWJzKGNvbmZpZy5wb2ludGVyU3RhcnQueSAtIGVuZENvb3JkaW5hdGVzLnkpID4gcmVsZWFzZVRvbGVyYW5jZTtcbiAgfVxuXG4gIGNvbnRhaW5pbmdFbGVtZW50KGVsZW1lbnQsIGFsbG93U2VsZikge1xuICAgIHZhciBjbGltYkVsZSA9IGVsZW1lbnQ7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCA2OyB4KyspIHtcbiAgICAgIGlmICghY2xpbWJFbGUpIGJyZWFrO1xuICAgICAgaWYgKGNsaW1iRWxlLnRhZ05hbWUgPT09ICdMQUJFTCcpIHJldHVybiBjbGltYkVsZTtcbiAgICAgIGNsaW1iRWxlID0gY2xpbWJFbGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgaWYgKGFsbG93U2VsZiAhPT0gZmFsc2UpIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdGFyZ2V0RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC50YWdOYW1lID09PSAnTEFCRUwnKSB7XG4gICAgICBpZiAoZWxlbWVudC5jb250cm9sKSByZXR1cm4gZWxlbWVudC5jb250cm9sO1xuXG4gICAgICAvLyBvbGRlciBkZXZpY2VzIGRvIG5vdCBzdXBwb3J0IHRoZSBcImNvbnRyb2xcIiBwcm9wZXJ0eVxuICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3Rvcikge1xuICAgICAgICB2YXIgY29udHJvbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQsdGV4dGFyZWEsc2VsZWN0Jyk7XG4gICAgICAgIGlmIChjb250cm9sKSByZXR1cm4gY29udHJvbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn07XG5cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVRhcElzRWxlbWVudCB7XG5cbiAgaXNFbGVtZW50VGFwRGlzYWJsZWQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmICgoZWxlbWVudC5kYXRhc2V0ID8gZWxlbWVudC5kYXRhc2V0LnRhcERpc2FibGVkIDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFwLWRpc2FibGVkJykpID09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzTGFiZWxDb250YWluaW5nRmlsZUlucHV0KGVsZW1lbnQpIHtcbiAgICB2YXIgbGFiZWxFbGVtZW50ID0gX191dGlsLmNvbnRhaW5pbmdFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChsYWJlbEVsZW1lbnQudGFnTmFtZSAhPT0gJ0xBQkVMJykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBmaWxlSW5wdXQgPSBsYWJlbEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1maWxlXScpO1xuICAgIGlmIChmaWxlSW5wdXQgJiYgZmlsZUlucHV0LmRpc2FibGVkID09PSBmYWxzZSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNUZXh0SW5wdXQoZWxlbWVudCkge1xuICAgIHJldHVybiAhIWVsZW1lbnQgJiZcbiAgICAgICAgICAgKGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8XG4gICAgICAgICAgICBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICAgICAoZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgJiYgISgvXihyYWRpb3xjaGVja2JveHxyYW5nZXxmaWxlfHN1Ym1pdHxyZXNldHxjb2xvcnxpbWFnZXxidXR0b24pJC9pKS50ZXN0KGVsZW1lbnQudHlwZSkpKTtcbiAgfVxuXG4gIGlzRGF0ZUlucHV0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gISFlbGVtZW50ICYmXG4gICAgICAgICAgICAoZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgJiYgKC9eKGRhdGV8dGltZXxkYXRldGltZS1sb2NhbHxtb250aHx3ZWVrKSQvaSkudGVzdChlbGVtZW50LnR5cGUpKTtcbiAgfVxuXG4gIGlzS2V5Ym9hcmRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoICFfX2FpLnBsYXRmb3JtLmlzSU9TKCkgfHwgX19haS5wbGF0Zm9ybS5pc0lQYWQoKSApIHtcbiAgICAgIHJldHVybiBfX3RhcC5lbGVtZW50LmlzVGV4dElucHV0KGVsZW1lbnQpICYmICFfX2lzZWxlbWVudC5pc0RhdGVJbnB1dChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9faXNlbGVtZW50LmlzVGV4dElucHV0KGVsZW1lbnQpIHx8ICggISFlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZSA9PSBcIlNFTEVDVFwiKTtcbiAgICB9XG4gIH1cblxuICBpc0xhYmVsV2l0aFRleHRJbnB1dChlbGVtZW50KSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IF9fdXRpbC5jb250YWluaW5nRWxlbWVudChlbGVtZW50LCBmYWxzZSk7XG5cbiAgICByZXR1cm4gISFjb250YWluZXIgJiZcbiAgICAgICAgICAgX19pc2VsZW1lbnQuaXNUZXh0SW5wdXQoX191dGlsLnRhcmdldEVsZW1lbnQoY29udGFpbmVyKSk7XG4gIH1cblxuICBjb250YWluc09ySXNUZXh0SW5wdXQoZWxlbWVudCkge1xuICAgIHJldHVybiBfX2lzZWxlbWVudC5pc1RleHRJbnB1dChlbGVtZW50KSB8fCBfX2lzZWxlbWVudC5pc0xhYmVsV2l0aFRleHRJbnB1dChlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlVGFwU3VwcG9ydCB7XG4gIGNvbmZpZyA9IGNvbmZpZztcbiAgaGFzQ2hlY2tlZENsb25lID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoYXVyZWxpYUludGVyZmFjZSkge1xuICAgIF9fYWkgPSBhdXJlbGlhSW50ZXJmYWNlO1xuICAgIF9fdGFwID0gdGhpcztcbiAgICBfX3V0aWwgPSBuZXcgSW50ZXJmYWNlVGFwVXRpbCgpO1xuICAgIF9faXNlbGVtZW50ID0gbmV3IEludGVyZmFjZVRhcElzRWxlbWVudCgpO1xuXG4gICAgdGhpcy5haSA9IF9fYWk7XG4gICAgdGhpcy51dGlsID0gX191dGlsXG4gICAgdGhpcy5pc2VsZW1lbnQgPSBfX2lzZWxlbWVudFxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IHJlZ2lzdGVyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBJbnRpYWxpemUgTGlzdGVuZXJzIG9uIFJvb3QgRWxlbWVudFxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBbZWxlbWVudF1cbiAgICovXG4gIHJlZ2lzdGVyKGVsZW1lbnQpIHtcbiAgICBjb25maWcuZG9jID0gZWxlbWVudDtcbiAgICB0YXBFdmVudExpc3RlbmVyKCdjbGljaycsIHRydWUsIHRydWUpO1xuICAgIHRhcEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnKTtcbiAgICB0YXBFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nKTtcblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkKSB7XG4gICAgICB0YXBFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicpO1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJyk7XG4gICAgICB0YXBFdmVudExpc3RlbmVyKCdwb2ludGNhbmNlbCcpO1xuICAgICAgY29uZmlnLnRvdWNoTW92ZUxpc3RlbmVyID0gJ3BvaW50ZXJtb3ZlJztcblxuICAgIH0gZWxzZSBpZiAod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XG4gICAgICB0YXBFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJyk7XG4gICAgICB0YXBFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJVcCcpO1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyQ2FuY2VsJyk7XG4gICAgICBjb25maWcudG91Y2hNb3ZlTGlzdGVuZXIgPSAnTVNQb2ludGVyTW92ZSc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcpO1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnKTtcbiAgICAgIHRhcEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgdGFwRXZlbnRMaXN0ZW5lcignZm9jdXNpbicpO1xuICAgIHRhcEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciB0eXBlIGluIFRBUF9FVkVOVF9MSVNURU5FUlMpIHtcbiAgICAgICAgdGFwRXZlbnRMaXN0ZW5lcih0eXBlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBjb25maWcuZG9jID0gbnVsbDtcbiAgICAgIGNvbmZpZy5hY3RpdmVFbGUgPSBudWxsO1xuICAgICAgY29uZmlnLmVuYWJsZWRUb3VjaEV2ZW50cyA9IGZhbHNlO1xuICAgICAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IGZhbHNlO1xuICAgICAgY29uZmlnLnBvaW50ZXJTdGFydCA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIGlnbm9yZVNjcm9sbFN0YXJ0KGUpIHtcbiAgICAvLyBkZWZhdWx0UHJldmVudGVkIGhhcyBiZWVuIGFzc2lnbmVkIGJ5IGFub3RoZXIgY29tcG9uZW50IGhhbmRsaW5nIHRoZSBldmVudFxuICAgIHJldHVybiAoZS5kZWZhdWx0UHJldmVudGVkKSB8fFxuICAgICAgICAgICAoL14oZmlsZXxyYW5nZSkkL2kpLnRlc3QoZS50YXJnZXQudHlwZSkgfHxcbiAgICAgICAgICAgLy8gbWFudWFsbHkgc2V0IHdpdGhpbiBhbiBlbGVtZW50cyBhdHRyaWJ1dGVzXG4gICAgICAgICAgIChlLnRhcmdldC5kYXRhc2V0ID8gZS50YXJnZXQuZGF0YXNldC5wcmV2ZW50U2Nyb2xsIDogZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZlbnQtc2Nyb2xsJykpID09ICd0cnVlJyB8fFxuICAgICAgICAgICAvLyBmbGFzaC9tb3ZpZS9vYmplY3QgdG91Y2hlcyBzaG91bGQgbm90IHRyeSB0byBzY3JvbGxcbiAgICAgICAgICAgKCEhKC9eKG9iamVjdHxlbWJlZCkkL2kpLnRlc3QoZS50YXJnZXQudGFnTmFtZSkpIHx8XG4gICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgZWxlbWVudCwgb3IgYW4gYW5jZXN0b3IsIGhhcyBgZGF0YS10YXAtZGlzYWJsZWRgIGF0dHJpYnV0ZVxuICAgICAgICAgICBfX2lzZWxlbWVudC5pc0VsZW1lbnRUYXBEaXNhYmxlZChlLnRhcmdldCk7XG4gIH1cblxuICByZW1vdmVDbG9uZWRJbnB1dHMoY29udGFpbmVyKSB7XG4gICAgdGhpcy5oYXNDaGVja2VkQ2xvbmUgPSBmYWxzZTtcblxuICAgIF9fYWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNsb25lZElucHV0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvbmVkLXRleHQtaW5wdXQnKTtcbiAgICAgIHZhciBwcmV2aW91c0lucHV0Rm9jdXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpb3VzLWlucHV0LWZvY3VzJyk7XG4gICAgICB2YXIgeDtcblxuICAgICAgZm9yICh4ID0gMDsgeCA8IGNsb25lZElucHV0cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBjbG9uZWRJbnB1dHNbeF0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjbG9uZWRJbnB1dHNbeF0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHggPSAwOyB4IDwgcHJldmlvdXNJbnB1dEZvY3VzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIHByZXZpb3VzSW5wdXRGb2N1c1t4XS5jbGFzc0xpc3QucmVtb3ZlKCdwcmV2aW91cy1pbnB1dC1mb2N1cycpO1xuICAgICAgICBwcmV2aW91c0lucHV0Rm9jdXNbeF0uc3R5bGUudG9wID0gJyc7XG4gICAgICAgIGlmICggX19haS5rZXlib2FyZC5pc09wZW4gJiYgIV9fYWkua2V5Ym9hcmQuaXNDbG9zaW5nICkgcHJldmlvdXNJbnB1dEZvY3VzW3hdLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbG9uZUZvY3VzZWRJbnB1dChjb250YWluZXIpIHtcbiAgICBpZiAodGhpcy5oYXNDaGVja2VkQ2xvbmUpIHJldHVybjtcbiAgICB0aGlzLmhhc0NoZWNrZWRDbG9uZSA9IHRydWU7XG5cbiAgICBfX2FpLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmb2N1c0lucHV0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpO1xuICAgICAgaWYgKF9faXNlbGVtZW50LmlzVGV4dElucHV0KGZvY3VzSW5wdXQpICYmICFfX2lzZWxlbWVudC5pc0RhdGVJbnB1dChmb2N1c0lucHV0KSkge1xuICAgICAgICB2YXIgY2xvbmVkSW5wdXQgPSBmb2N1c0lucHV0LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICBjbG9uZWRJbnB1dC52YWx1ZSA9IGZvY3VzSW5wdXQudmFsdWU7XG4gICAgICAgIGNsb25lZElucHV0LmNsYXNzTGlzdC5hZGQoJ2Nsb25lZC10ZXh0LWlucHV0Jyk7XG4gICAgICAgIGNsb25lZElucHV0LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZvY3VzSW5wdXQuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgICBjbG9uZWRJbnB1dC5jb250ZW50RWRpdGFibGUgPSBmb2N1c0lucHV0LmNvbnRlbnRFZGl0YWJsZTtcbiAgICAgICAgICBjbG9uZWRJbnB1dC5pbm5lckhUTUwgPSBmb2N1c0lucHV0LmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgICAgICBmb2N1c0lucHV0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNsb25lZElucHV0LCBmb2N1c0lucHV0KTtcbiAgICAgICAgZm9jdXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcmV2aW91cy1pbnB1dC1mb2N1cycpO1xuXG4gICAgICAgIGNsb25lZElucHV0LnNjcm9sbFRvcCA9IGZvY3VzSW5wdXQuc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9sZXJhbmNlKHJlbGVhc2VUb2xlcmFuY2UsIHJlbGVhc2VCdXR0b25Ub2xlcmFuY2UpIHtcbiAgICBkZWZhdWx0cy5SRUxFQVNFX1RPTEVSQU5DRSA9IHJlbGVhc2VUb2xlcmFuY2U7XG4gICAgZGVmYXVsdHMuUkVMRUFTRV9CVVRUT05fVE9MRVJBTkNFID0gcmVsZWFzZUJ1dHRvblRvbGVyYW5jZTtcbiAgfVxuXG4gIGNhbmNlbENsaWNrKCkge1xuICAgIC8vIHVzZWQgdG8gY2FuY2VsIGFueSBzaW11bGF0ZWQgY2xpY2tzIHdoaWNoIG1heSBoYXBwZW4gb24gYSB0b3VjaGVuZC9tb3VzZXVwXG4gICAgLy8gZ2VzdHVyZXMgdXNlcyB0aGlzIG1ldGhvZCB3aXRoaW4gaXRzIHRhcCBhbmQgaG9sZCBldmVudHNcbiAgICBjb25maWcucG9pbnRlck1vdmVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YXBFdmVudExpc3RlbmVyKHR5cGUsIGVuYWJsZSwgdXNlQ2FwdHVyZSkge1xuICBpZiAoZW5hYmxlICE9PSBmYWxzZSkge1xuICAgIGNvbmZpZy5kb2MuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBUQVBfRVZFTlRfTElTVEVORVJTW3R5cGVdLCB1c2VDYXB0dXJlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcuZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgVEFQX0VWRU5UX0xJU1RFTkVSU1t0eXBlXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwQ2xpY2soZSkge1xuICAvLyBzaW11bGF0ZSBhIG5vcm1hbCBjbGljayBieSBydW5uaW5nIHRoZSBlbGVtZW50J3MgY2xpY2sgbWV0aG9kIHRoZW4gZm9jdXMgb24gaXRcbiAgdmFyIGNvbnRhaW5lciA9IF9fdXRpbC5jb250YWluaW5nRWxlbWVudChlLnRhcmdldCk7XG4gIHZhciBlbGUgPSBfX3V0aWwudGFyZ2V0RWxlbWVudChjb250YWluZXIpO1xuXG4gIGlmIChfX3V0aWwucmVxdWlyZXNOYXRpdmVDbGljayhlbGUpIHx8IGNvbmZpZy5wb2ludGVyTW92ZWQpIHJldHVybiBmYWxzZTtcblxuICB2YXIgYyA9IF9fdXRpbC5wb2ludGVyQ29vcmQoZSk7XG5cbiAgLy9jb25zb2xlLmxvZygndGFwQ2xpY2snLCBlLnR5cGUsIGVsZS50YWdOYW1lLCAnKCcrYy54KycsJytjLnkrJyknKTtcbiAgdHJpZ2dlck1vdXNlRXZlbnQoJ2NsaWNrJywgZWxlLCBjLngsIGMueSk7XG5cbiAgLy8gaWYgaXQncyBhbiBpbnB1dCwgZm9jdXMgaW4gb24gdGhlIHRhcmdldCwgb3RoZXJ3aXNlIGJsdXJcbiAgdGFwSGFuZGxlRm9jdXMoZWxlKTtcbn1cblxuZnVuY3Rpb24gdHJpZ2dlck1vdXNlRXZlbnQodHlwZSwgZWxlLCB4LCB5KSB7XG4gIC8vIHVzaW5nIGluaXRNb3VzZUV2ZW50IGluc3RlYWQgb2YgTW91c2VFdmVudCBmb3Igb3VyIEFuZHJvaWQgZnJpZW5kc1xuICB2YXIgY2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7XG4gIGNsaWNrRXZlbnQuaW5pdE1vdXNlRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLCAwLCAwLCB4LCB5LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gIGNsaWNrRXZlbnQuaXNBaVRhcCA9IHRydWU7XG4gIGVsZS5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xufVxuXG5mdW5jdGlvbiB0YXBDbGlja0dhdGVLZWVwZXIoZSkge1xuICAvL2NvbnNvbGUubG9nKCdjbGljayAnICsgRGF0ZS5ub3coKSArICcgaXNBaVRhcDogJyArIChlLmlzQWlUYXAgPyB0cnVlIDogZmFsc2UpKTtcbiAgaWYgKGUudGFyZ2V0LnR5cGUgPT0gJ3N1Ym1pdCcgJiYgZS5kZXRhaWwgPT09IDApIHtcbiAgICAvLyBkbyBub3QgcHJldmVudCBjbGljayBpZiBpdCBjYW1lIGZyb20gYW4gXCJFbnRlclwiIG9yIFwiR29cIiBrZXlwcmVzcyBzdWJtaXRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIGRvIG5vdCBhbGxvdyB0aHJvdWdoIGFueSBjbGljayBldmVudHMgdGhhdCB3ZXJlIG5vdCBjcmVhdGVkIGJ5IF9fYWkudGFwXG4gIGlmICgoX19haS5zY3JvbGwuaXNTY3JvbGxpbmcgJiYgX191dGlsLmNvbnRhaW5zT3JJc1RleHRJbnB1dChlLnRhcmdldCkpIHx8XG4gICAgICAoIWUuaXNBaVRhcCAmJiAhX191dGlsLnJlcXVpcmVzTmF0aXZlQ2xpY2soZS50YXJnZXQpKSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NsaWNrUHJldmVudCcsIGUudGFyZ2V0LnRhZ05hbWUpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIV9faXNlbGVtZW50LmlzTGFiZWxXaXRoVGV4dElucHV0KGUudGFyZ2V0KSkge1xuICAgICAgLy8gbGFiZWxzIGNsaWNrcyBmcm9tIG5hdGl2ZSBzaG91bGQgbm90IHByZXZlbnREZWZhdWx0IG90aGVyc2l6ZSBrZXlib2FyZCB3aWxsIG5vdCBzaG93IG9uIGlucHV0IGZvY3VzXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBNT1VTRVxuZnVuY3Rpb24gdGFwTW91c2VEb3duKGUpIHtcbiAgLy9jb25zb2xlLmxvZygnbW91c2Vkb3duICcgKyBEYXRlLm5vdygpKTtcbiAgaWYgKGUuaXNBaVRhcCB8fCB0YXBJZ25vcmVFdmVudChlKSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKGNvbmZpZy5lbmFibGVkVG91Y2hFdmVudHMpIHtcbiAgICBjb25zb2xlLmxvZygnbW91c2Vkb3duJywgJ3N0b3AgZXZlbnQnKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCghX19pc2VsZW1lbnQuaXNUZXh0SW5wdXQoZS50YXJnZXQpIHx8IGNvbmZpZy5sYXN0VG91Y2hUYXJnZXQgIT09IGUudGFyZ2V0KSAmJiAhKC9eKHNlbGVjdHxvcHRpb24pJC9pKS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAvLyBJZiB5b3UgcHJldmVudERlZmF1bHQgb24gYSB0ZXh0IGlucHV0IHRoZW4geW91IGNhbm5vdCBtb3ZlIGl0cyB0ZXh0IGNhcmV0L2N1cnNvci5cbiAgICAgIC8vIEFsbG93IHRocm91Z2ggb25seSB0aGUgdGV4dCBpbnB1dCBkZWZhdWx0LiBIb3dldmVyLCB3aXRob3V0IHByZXZlbnREZWZhdWx0IG9uIGFuXG4gICAgICAvLyBpbnB1dCB0aGUgMzAwbXMgZGVsYXkgY2FuIGNoYW5nZSBmb2N1cyBvbiBpbnB1dHMgYWZ0ZXIgdGhlIGtleWJvYXJkIHNob3dzIHVwLlxuICAgICAgLy8gVGhlIGZvY3VzaW4gZXZlbnQgaGFuZGxlcyB0aGUgY2hhbmNlIG9mIGZvY3VzIGNoYW5naW5nIGFmdGVyIHRoZSBrZXlib2FyZCBzaG93cy5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25maWcucG9pbnRlck1vdmVkID0gZmFsc2U7XG4gIGNvbmZpZy5wb2ludGVyU3RhcnQgPSBfX3V0aWwucG9pbnRlckNvb3JkKGUpO1xuXG4gIHRhcEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScpO1xuICBfX2FpLnRhcEFjdGl2YXRvci5zdGFydChlKTtcbn1cblxuZnVuY3Rpb24gdGFwTW91c2VVcChlKSB7XG4gIC8vY29uc29sZS5sb2coXCJtb3VzZXVwIFwiICsgRGF0ZS5ub3coKSk7XG4gIGlmIChjb25maWcuZW5hYmxlZFRvdWNoRXZlbnRzKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRhcElnbm9yZUV2ZW50KGUpIHx8ICgvXihzZWxlY3R8b3B0aW9uKSQvaSkudGVzdChlLnRhcmdldC50YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICghX191dGlsLmhhc1BvaW50ZXJNb3ZlZChlKSkge1xuICAgIHRhcENsaWNrKGUpO1xuICB9XG4gIHRhcEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZhbHNlKTtcbiAgX19haS50YXBBY3RpdmF0b3IuZW5kKCk7XG4gIGNvbmZpZy5wb2ludGVyTW92ZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdGFwTW91c2VNb3ZlKGUpIHtcbiAgaWYgKF9fdXRpbC5oYXNQb2ludGVyTW92ZWQoZSkpIHtcbiAgICB0YXBFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmYWxzZSk7XG4gICAgX19haS50YXBBY3RpdmF0b3IuZW5kKCk7XG4gICAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblxuLy8gVE9VQ0hcbmZ1bmN0aW9uIHRhcFRvdWNoU3RhcnQoZSkge1xuICAvL2NvbnNvbGUubG9nKFwidG91Y2hzdGFydCBcIiArIERhdGUubm93KCkpO1xuICBpZiAodGFwSWdub3JlRXZlbnQoZSkpIHJldHVybjtcblxuICBjb25maWcucG9pbnRlck1vdmVkID0gZmFsc2U7XG5cbiAgdGFwRW5hYmxlVG91Y2hFdmVudHMoKTtcbiAgY29uZmlnLnBvaW50ZXJTdGFydCA9IF9fdXRpbC5wb2ludGVyQ29vcmQoZSk7XG5cbiAgdGFwRXZlbnRMaXN0ZW5lcihjb25maWcudG91Y2hNb3ZlTGlzdGVuZXIpO1xuICBfX2FpLnRhcEFjdGl2YXRvci5zdGFydChlKTtcblxuICBpZiAoX19haS5wbGF0Zm9ybS5pc0lPUygpICYmIF9faXNlbGVtZW50LmlzTGFiZWxXaXRoVGV4dElucHV0KGUudGFyZ2V0KSkge1xuICAgIC8vIGlmIHRoZSB0YXBwZWQgZWxlbWVudCBpcyBhIGxhYmVsLCB3aGljaCBoYXMgYSBjaGlsZCBpbnB1dFxuICAgIC8vIHRoZW4gcHJldmVudERlZmF1bHQgc28gaU9TIGRvZXNuJ3QgdWdseSBhdXRvIHNjcm9sbCB0byB0aGUgaW5wdXRcbiAgICAvLyBidXQgZG8gbm90IHByZXZlbnQgZGVmYXVsdCBvbiBBbmRyb2lkIG9yIGVsc2UgeW91IGNhbm5vdCBtb3ZlIHRoZSB0ZXh0IGNhcmV0XG4gICAgLy8gYW5kIGRvIG5vdCBwcmV2ZW50IGRlZmF1bHQgb24gQW5kcm9pZCBvciBlbHNlIG5vIHZpcnR1YWwga2V5Ym9hcmQgc2hvd3MgdXBcblxuICAgIHZhciB0ZXh0SW5wdXQgPSBfX3V0aWwudGFyZ2V0RWxlbWVudChfX3V0aWwuY29udGFpbmluZ0VsZW1lbnQoZS50YXJnZXQpKTtcbiAgICBpZiAodGV4dElucHV0ICE9PSB0YXBBY3RpdmVFbGUpIHtcbiAgICAgIC8vIGRvbid0IHByZXZlbnREZWZhdWx0IG9uIGFuIGFscmVhZHkgZm9jdXNlZCBpbnB1dCBvciBlbHNlIGlPUydzIHRleHQgY2FyZXQgaXNuJ3QgdXNhYmxlXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRhcFRvdWNoRW5kKGUpIHtcbiAgLy9jb25zb2xlLmxvZygndG91Y2hlbmQgJyArIERhdGUubm93KCkpO1xuICBpZiAodGFwSWdub3JlRXZlbnQoZSkpIHJldHVybjtcblxuICB0YXBFbmFibGVUb3VjaEV2ZW50cygpO1xuICBpZiAoIV9fdXRpbC5oYXNQb2ludGVyTW92ZWQoZSkpIHtcbiAgICB0YXBDbGljayhlKTtcblxuICAgIGlmICgoL14oc2VsZWN0fG9wdGlvbikkL2kpLnRlc3QoZS50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBjb25maWcubGFzdFRvdWNoVGFyZ2V0ID0gZS50YXJnZXQ7XG4gIHRhcFRvdWNoQ2FuY2VsKCk7XG59XG5cbmZ1bmN0aW9uIHRhcFRvdWNoTW92ZShlKSB7XG4gIGlmIChfX3V0aWwuaGFzUG9pbnRlck1vdmVkKGUpKSB7XG4gICAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IHRydWU7XG4gICAgdGFwRXZlbnRMaXN0ZW5lcihjb25maWcudG91Y2hNb3ZlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICBfX2FpLnRhcEFjdGl2YXRvci5lbmQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwVG91Y2hDYW5jZWwoKSB7XG4gIHRhcEV2ZW50TGlzdGVuZXIoY29uZmlnLnRvdWNoTW92ZUxpc3RlbmVyLCBmYWxzZSk7XG4gIF9fYWkudGFwQWN0aXZhdG9yLmVuZCgpO1xuICBjb25maWcucG9pbnRlck1vdmVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRhcEVuYWJsZVRvdWNoRXZlbnRzKCkge1xuICBjb25maWcuZW5hYmxlZFRvdWNoRXZlbnRzID0gdHJ1ZTtcbiAgY2xlYXJUaW1lb3V0KGNvbmZpZy5tb3VzZVJlc2V0VGltZXIpO1xuICBjb25maWcubW91c2VSZXNldFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25maWcuZW5hYmxlZFRvdWNoRXZlbnRzID0gZmFsc2U7XG4gIH0sIDYwMCk7XG59XG5cbmZ1bmN0aW9uIHRhcElnbm9yZUV2ZW50KGUpIHtcbiAgaWYgKGUuaXNUYXBIYW5kbGVkKSByZXR1cm4gdHJ1ZTtcbiAgZS5pc1RhcEhhbmRsZWQgPSB0cnVlO1xuXG4gIGlmIChfX2FpLnNjcm9sbC5pc1Njcm9sbGluZyAmJiBfX3V0aWwuY29udGFpbnNPcklzVGV4dElucHV0KGUudGFyZ2V0KSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YXBIYW5kbGVGb2N1cyhlbGUpIHtcbiAgY29uZmlnLnRvdWNoRm9jdXNlZElucHV0ID0gbnVsbDtcblxuICB2YXIgdHJpZ2dlckZvY3VzSW4gPSBmYWxzZTtcblxuICBpZiAoZWxlLnRhZ05hbWUgPT0gJ1NFTEVDVCcpIHtcbiAgICAvLyB0cmljayB0byBmb3JjZSBBbmRyb2lkIG9wdGlvbnMgdG8gc2hvdyB1cFxuICAgIHRyaWdnZXJNb3VzZUV2ZW50KCdtb3VzZWRvd24nLCBlbGUsIDAsIDApO1xuICAgIGVsZS5mb2N1cyAmJiBlbGUuZm9jdXMoKTtcbiAgICB0cmlnZ2VyRm9jdXNJbiA9IHRydWU7XG5cbiAgfSBlbHNlIGlmIChfX3V0aWwuYWN0aXZlRWxlbWVudCgpID09PSBlbGUpIHtcbiAgICAvLyBhbHJlYWR5IGlzIHRoZSBhY3RpdmUgZWxlbWVudCBhbmQgaGFzIGZvY3VzXG4gICAgdHJpZ2dlckZvY3VzSW4gPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoKC9eKGlucHV0fHRleHRhcmVhKSQvaSkudGVzdChlbGUudGFnTmFtZSkgfHwgZWxlLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgdHJpZ2dlckZvY3VzSW4gPSB0cnVlO1xuICAgIGVsZS5mb2N1cyAmJiBlbGUuZm9jdXMoKTtcbiAgICBlbGUudmFsdWUgPSBlbGUudmFsdWU7XG4gICAgaWYgKGNvbmZpZy5lbmFibGVkVG91Y2hFdmVudHMpIHtcbiAgICAgIGNvbmZpZy50b3VjaEZvY3VzZWRJbnB1dCA9IGVsZTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICB0YXBGb2N1c091dEFjdGl2ZSgpO1xuICB9XG5cbiAgaWYgKHRyaWdnZXJGb2N1c0luKSB7XG4gICAgX191dGlsLmFjdGl2ZUVsZW1lbnQoZWxlKTtcbiAgICBfX2FpLnRyaWdnZXIoJ2FpLmZvY3VzaW4nLCB7XG4gICAgICB0YXJnZXQ6IGVsZVxuICAgIH0sIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhcEZvY3VzT3V0QWN0aXZlKCkge1xuICB2YXIgZWxlID0gX191dGlsLmFjdGl2ZUVsZW1lbnQoKTtcbiAgaWYgKGVsZSAmJiAoKC9eKGlucHV0fHRleHRhcmVhfHNlbGVjdCkkL2kpLnRlc3QoZWxlLnRhZ05hbWUpIHx8IGVsZS5pc0NvbnRlbnRFZGl0YWJsZSkpIHtcbiAgICBjb25zb2xlLmxvZygndGFwRm9jdXNPdXRBY3RpdmUnLCBlbGUudGFnTmFtZSk7XG4gICAgZWxlLmJsdXIoKTtcbiAgfVxuICBfX3V0aWwuYWN0aXZlRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gdGFwRm9jdXNJbihlKSB7XG4gIC8vY29uc29sZS5sb2coJ2ZvY3VzaW4gJyArIERhdGUubm93KCkpO1xuICAvLyBCZWNhdXNlIGEgdGV4dCBpbnB1dCBkb2Vzbid0IHByZXZlbnREZWZhdWx0IChzbyB0aGUgY2FyZXQgc3RpbGwgd29ya3MpIHRoZXJlJ3MgYSBjaGFuY2VcbiAgLy8gdGhhdCBpdHMgbW91c2Vkb3duIGV2ZW50IDMwMG1zIGxhdGVyIHdpbGwgY2hhbmdlIHRoZSBmb2N1cyB0byBhbm90aGVyIGVsZW1lbnQgYWZ0ZXJcbiAgLy8gdGhlIGtleWJvYXJkIHNob3dzIHVwLlxuXG4gIGlmIChjb25maWcuZW5hYmxlZFRvdWNoRXZlbnRzICYmXG4gICAgICBfX2lzZWxlbWVudC5pc1RleHRJbnB1dChfX3V0aWwuYWN0aXZlRWxlbWVudCgpKSAmJlxuICAgICAgX19pc2VsZW1lbnQuaXNUZXh0SW5wdXQoY29uZmlnLnRvdWNoRm9jdXNlZElucHV0KSAmJlxuICAgICAgY29uZmlnLnRvdWNoRm9jdXNlZElucHV0ICE9PSBlLnRhcmdldCkge1xuXG4gICAgLy8gMSkgVGhlIHBvaW50ZXIgaXMgZnJvbSB0b3VjaCBldmVudHNcbiAgICAvLyAyKSBUaGVyZSBpcyBhbiBhY3RpdmUgZWxlbWVudCB3aGljaCBpcyBhIHRleHQgaW5wdXRcbiAgICAvLyAzKSBBIHRleHQgaW5wdXQgd2FzIGp1c3Qgc2V0IHRvIGJlIGZvY3VzZWQgb24gYnkgYSB0b3VjaCBldmVudFxuICAgIC8vIDQpIEEgbmV3IGZvY3VzIGhhcyBiZWVuIHNldCwgaG93ZXZlciB0aGUgdGFyZ2V0IGlzbid0IHRoZSBvbmUgdGhlIHRvdWNoIGV2ZW50IHdhbnRlZFxuICAgIGNvbnNvbGUubG9nKCdmb2N1c2luJywgJ2NvbmZpZy50b3VjaEZvY3VzZWRJbnB1dCcpO1xuICAgIGNvbmZpZy50b3VjaEZvY3VzZWRJbnB1dC5mb2N1cygpO1xuICAgIGNvbmZpZy50b3VjaEZvY3VzZWRJbnB1dCA9IG51bGw7XG4gIH1cbiAgX19haS5zY3JvbGwuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdGFwRm9jdXNPdXQoKSB7XG4gIC8vY29uc29sZS5sb2coXCJmb2N1c291dFwiKTtcbiAgX191dGlsLmFjdGl2ZUVsZW1lbnQobnVsbCk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
