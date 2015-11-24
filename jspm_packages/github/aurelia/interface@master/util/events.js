/* */ 
define(['exports', 'aurelia-interface-platforms'], function (exports, _aureliaInterfacePlatforms) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.onClick = onClick;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var clickEvent = _aureliaInterfacePlatforms.isTouch ? 'touchstart' : 'click';

  var EventHandlers = (function () {
    _createClass(EventHandlers, null, [{
      key: 'on',
      value: function on(element) {
        return new EventHandlers(element);
      }
    }]);

    function EventHandlers(element) {
      _classCallCheck(this, EventHandlers);

      this.element = element;
    }

    _createClass(EventHandlers, [{
      key: '_event',
      value: function _event(name, bubble, _handler) {
        var element = this.element;
        return {
          bind: function bind() {
            element.addEventListener(name, _handler, bubble);
          },
          unbind: function unbind() {
            element.removeEventListener(name, _handler, bubble);
          }
        };
      }
    }, {
      key: 'click',
      value: function click(cb, bubble) {
        return this._event(clickEvent, bubble, cb);
      }
    }]);

    return EventHandlers;
  })();

  exports.EventHandlers = EventHandlers;

  function onClick(element, bubble) {
    var _resolve = function _resolve() {};

    var _event = { bind: bind, unbind: unbind };
    return _event;

    function bind() {
      element.addEventListener(clickEvent, _handler, bubble);
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }

    function unbind() {
      element.removeEventListener(clickEvent, _handler, bubble);
    }

    function _handler(event) {
      _resolve(event);
    }
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvZXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsR0FBRywyQkFGWCxPQUFPLEdBRWMsWUFBWSxHQUFHLE9BQU8sQ0FBQzs7TUFFdkMsYUFBYTtpQkFBYixhQUFhOzthQUVmLFlBQUMsT0FBTyxFQUFFO0FBQ2pCLGVBQU8sSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDbkM7OztBQUVVLGFBTkEsYUFBYSxDQU1aLE9BQU8sRUFBRTs0QkFOVixhQUFhOztBQU1GLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0tBQUM7O2lCQU5sQyxhQUFhOzthQVFsQixnQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUM3QixZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzNCLGVBQU87QUFDTCxjQUFJLEVBQUEsZ0JBQUc7QUFDTCxtQkFBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7V0FDbEQ7QUFDRCxnQkFBTSxFQUFBLGtCQUFHO0FBQ1AsbUJBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1dBQ3JEO1NBQ0YsQ0FBQztPQUNIOzs7YUFFSSxlQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUU7QUFDaEIsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDNUM7OztXQXRCVSxhQUFhOzs7OztBQXlCbkIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN2QyxRQUFJLFFBQVEsR0FBRyxvQkFBVyxFQUFFLENBQUE7O0FBRTVCLFFBQUksTUFBTSxHQUFHLEVBQUMsSUFBSSxFQUFKLElBQUksRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFDLENBQUM7QUFDNUIsV0FBTyxNQUFNLENBQUM7O0FBRWQsYUFBUyxJQUFJLEdBQUc7QUFDZCxhQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2RCxhQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLGdCQUFRLEdBQUcsT0FBTyxDQUFDO09BQ3BCLENBQUMsQ0FBQztLQUNKOztBQUVELGFBQVMsTUFBTSxHQUFHO0FBQ2hCLGFBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzNEOztBQUVELGFBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUN2QixjQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakI7R0FDRiIsImZpbGUiOiJ1dGlsL2V2ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNUb3VjaH0gZnJvbSAnYXVyZWxpYS1pbnRlcmZhY2UtcGxhdGZvcm1zJztcblxuY29uc3QgY2xpY2tFdmVudCA9IGlzVG91Y2ggPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRIYW5kbGVycyB7XG5cbiAgc3RhdGljIG9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50SGFuZGxlcnMoZWxlbWVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7dGhpcy5lbGVtZW50ID0gZWxlbWVudH1cblxuICBfZXZlbnQobmFtZSwgYnViYmxlLCBfaGFuZGxlcikge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kKCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgX2hhbmRsZXIsIGJ1YmJsZSk7XG4gICAgICB9LFxuICAgICAgdW5iaW5kKCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgX2hhbmRsZXIsIGJ1YmJsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNsaWNrKGNiLCBidWJibGUpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnQoY2xpY2tFdmVudCwgYnViYmxlLCBjYik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2soZWxlbWVudCwgYnViYmxlKSB7XG4gIGxldCBfcmVzb2x2ZSA9IGZ1bmN0aW9uKCkge31cblxuICBsZXQgX2V2ZW50ID0ge2JpbmQsIHVuYmluZH07XG4gIHJldHVybiBfZXZlbnQ7XG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgX2hhbmRsZXIsIGJ1YmJsZSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBfaGFuZGxlciwgYnViYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9oYW5kbGVyKGV2ZW50KSB7XG4gICAgX3Jlc29sdmUoZXZlbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
