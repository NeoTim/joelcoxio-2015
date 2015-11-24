/* */ 
define(['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-interface-platforms', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaInterfacePlatforms, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var prefix = 'interface:';
  var isDefaultChannel = false;

  function initializeDefaultEvents(channel) {
    isDefaultChannel = true;

    var clickEvent = _aureliaInterfacePlatforms.isTouch ? 'click' : 'touchstart';
    var scrollEvent;

    _aureliaPal.DOM.addEventListener(clickEvent, function (event) {
      channel.publish(new InterfaceClick(event));
    }, true);

    _aureliaPal.DOM.addEventListener('animationend', function (event) {
      channel.publish(new InterfaceAnimation(event));
    }, true);

    _aureliaPal.DOM.addEventListener('transitionend', function (event) {
      channel.publish(new InterfaceTransition(event));
    }, true);
  }

  var InterfaceEvent = (function () {
    function InterfaceEvent(event) {
      _classCallCheck(this, InterfaceEvent);

      this.original = event;
      this.target = event.target;
    }

    _createClass(InterfaceEvent, [{
      key: 'isTarget',
      value: function isTarget(element) {
        return element instanceof Element && element.isEqualNode(this.target);
      }
    }, {
      key: 'hasTarget',
      value: function hasTarget(element) {
        return element instanceof Element && element.contains(this.target);
      }
    }, {
      key: 'targetHas',
      value: function targetHas(element) {
        return element instanceof Element && this.target.contains(element);
      }
    }]);

    return InterfaceEvent;
  })();

  exports.InterfaceEvent = InterfaceEvent;

  var InterfaceScroll = (function (_InterfaceEvent) {
    _inherits(InterfaceScroll, _InterfaceEvent);

    function InterfaceScroll() {
      _classCallCheck(this, InterfaceScroll);

      _get(Object.getPrototypeOf(InterfaceScroll.prototype), 'constructor', this).apply(this, arguments);
    }

    return InterfaceScroll;
  })(InterfaceEvent);

  exports.InterfaceScroll = InterfaceScroll;

  var InterfaceClick = (function (_InterfaceEvent2) {
    _inherits(InterfaceClick, _InterfaceEvent2);

    function InterfaceClick() {
      _classCallCheck(this, InterfaceClick);

      _get(Object.getPrototypeOf(InterfaceClick.prototype), 'constructor', this).apply(this, arguments);
    }

    return InterfaceClick;
  })(InterfaceEvent);

  exports.InterfaceClick = InterfaceClick;

  var InterfaceAnimation = (function (_InterfaceEvent3) {
    _inherits(InterfaceAnimation, _InterfaceEvent3);

    function InterfaceAnimation(event) {
      _classCallCheck(this, InterfaceAnimation);

      _get(Object.getPrototypeOf(InterfaceAnimation.prototype), 'constructor', this).call(this, event);
      this.type = event.type;
    }

    return InterfaceAnimation;
  })(InterfaceEvent);

  exports.InterfaceAnimation = InterfaceAnimation;

  var InterfaceTransition = (function (_InterfaceEvent4) {
    _inherits(InterfaceTransition, _InterfaceEvent4);

    function InterfaceTransition(event) {
      _classCallCheck(this, InterfaceTransition);

      _get(Object.getPrototypeOf(InterfaceTransition.prototype), 'constructor', this).call(this, event);
      this.type = event.type;
    }

    return InterfaceTransition;
  })(InterfaceEvent);

  exports.InterfaceTransition = InterfaceTransition;

  var InterfaceChannel = (function () {
    _createClass(InterfaceChannel, null, [{
      key: 'Event',
      value: InterfaceEvent,
      enumerable: true
    }, {
      key: 'Click',
      value: InterfaceClick,
      enumerable: true
    }, {
      key: 'Animation',
      value: InterfaceAnimation,
      enumerable: true
    }, {
      key: 'Transition',
      value: InterfaceTransition,
      enumerable: true
    }]);

    function InterfaceChannel(eventAggregator, prefix) {
      _classCallCheck(this, _InterfaceChannel);

      this._prefix = 'interface';
      this._sep = ':';

      this.eventAggregator = eventAggregator;
      this._prefix = prefix || this._prefix;
      if (!isDefaultChannel) {
        initializeDefaultEvents(this);
      }
    }

    _createClass(InterfaceChannel, [{
      key: 'prefix',
      value: function prefix(name) {
        return this._prefix + this._sep + name;
      }
    }, {
      key: 'createChannel',
      value: function createChannel(channelName) {
        return new InterfaceChannel(this, channelName);
      }
    }, {
      key: 'publish',
      value: function publish(name, payload) {
        if (typeof name === 'string') name = this.prefix(name);
        return this.eventAggregator.publish(name, payload);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(name, callback, context) {
        if (typeof name === 'string') name = this.prefix(name);
        return this.eventAggregator.subscribe(name, context ? callback.bind(context) : callback);
      }
    }]);

    var _InterfaceChannel = InterfaceChannel;
    InterfaceChannel = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(InterfaceChannel) || InterfaceChannel;
    return InterfaceChannel;
  })();

  exports.InterfaceChannel = InterfaceChannel;
});
//# sourceMappingURL=data:application/json;base64,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QUMxRjs7OzRCQW5FVSxnQkFBZ0I7QUFBaEIsb0JBQWdCLEdBRDVCLHNCQWhFTyxNQUFNLDBCQUNOLGVBQWUsQ0ErREMsQ0FDWCxnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQiIsImZpbGUiOiJjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtpc1RvdWNofSBmcm9tICdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuY29uc3QgcHJlZml4ID0gJ2ludGVyZmFjZTonO1xubGV0IGlzRGVmYXVsdENoYW5uZWwgPSBmYWxzZTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURlZmF1bHRFdmVudHMoY2hhbm5lbCkge1xuICBpc0RlZmF1bHRDaGFubmVsID0gdHJ1ZTtcblxuICBjb25zdCBjbGlja0V2ZW50ID0gaXNUb3VjaCA/ICdjbGljaycgOiAndG91Y2hzdGFydCc7XG4gIHZhciBzY3JvbGxFdmVudDtcblxuICBET00uYWRkRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBmdW5jdGlvbihldmVudCkge1xuICAgIGNoYW5uZWwucHVibGlzaChuZXcgSW50ZXJmYWNlQ2xpY2soZXZlbnQpKTtcbiAgfSwgdHJ1ZSk7XG5cbiAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY2hhbm5lbC5wdWJsaXNoKG5ldyBJbnRlcmZhY2VBbmltYXRpb24oZXZlbnQpKTtcbiAgfSwgdHJ1ZSk7XG5cbiAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNoYW5uZWwucHVibGlzaChuZXcgSW50ZXJmYWNlVHJhbnNpdGlvbihldmVudCkpO1xuICB9LCB0cnVlKTtcbn1cblxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlRXZlbnQge1xuICBjb25zdHJ1Y3RvcihldmVudCkge1xuICAgIHRoaXMub3JpZ2luYWwgPSBldmVudDtcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIGlzVGFyZ2V0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZWxlbWVudC5pc0VxdWFsTm9kZSh0aGlzLnRhcmdldCk7XG4gIH1cblxuICBoYXNUYXJnZXQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbGVtZW50LmNvbnRhaW5zKHRoaXMudGFyZ2V0KTtcbiAgfVxuXG4gIHRhcmdldEhhcyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHRoaXMudGFyZ2V0LmNvbnRhaW5zKGVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VTY3JvbGwgZXh0ZW5kcyBJbnRlcmZhY2VFdmVudCB7fVxuZXhwb3J0IGNsYXNzIEludGVyZmFjZUNsaWNrIGV4dGVuZHMgSW50ZXJmYWNlRXZlbnQge31cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VBbmltYXRpb24gZXh0ZW5kcyBJbnRlcmZhY2VFdmVudCB7XG4gIGNvbnN0cnVjdG9yKGV2ZW50KSB7XG4gICAgc3VwZXIoZXZlbnQpO1xuICAgIHRoaXMudHlwZSA9IGV2ZW50LnR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVRyYW5zaXRpb24gZXh0ZW5kcyBJbnRlcmZhY2VFdmVudCB7XG4gIGNvbnN0cnVjdG9yKGV2ZW50KSB7XG4gICAgc3VwZXIoZXZlbnQpO1xuICAgIHRoaXMudHlwZSA9IGV2ZW50LnR5cGU7XG4gIH1cbn1cblxuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VDaGFubmVsIHtcblxuICBzdGF0aWMgRXZlbnQgPSBJbnRlcmZhY2VFdmVudDtcblxuICBzdGF0aWMgQ2xpY2sgPSBJbnRlcmZhY2VDbGljaztcblxuICBzdGF0aWMgQW5pbWF0aW9uID0gSW50ZXJmYWNlQW5pbWF0aW9uO1xuXG4gIHN0YXRpYyBUcmFuc2l0aW9uID0gSW50ZXJmYWNlVHJhbnNpdGlvbjtcblxuICAvKipcbiAgICogUHJvcGVydHk6IF9wcmVmaXhcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIENoYW5uZWwgTmFtZSBwcmVmaXhcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIF9wcmVmaXggPSAnaW50ZXJmYWNlJztcblxuICAvKipcbiAgICogUHJvcGVydHk6IF9zZXBcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFNlcGFyYXRvciBiZXR3ZWVuIHByZWZpeCBhbmQgY2hhbm5lbCBOYW1lXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBfc2VwID0gJzonO1xuXG5cbiAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yLCBwcmVmaXgpe1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeCB8fCB0aGlzLl9wcmVmaXg7XG4gICAgaWYgKCFpc0RlZmF1bHRDaGFubmVsKSB7XG4gICAgICBpbml0aWFsaXplRGVmYXVsdEV2ZW50cyh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IHByZWZpeFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gRXZlbnROYW1lIHRvIHByZWZpeCB3aXRoIHRoZSBjaGFubmVsIE5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbbmFtZV1cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgTW9kaWZpZWQgRXZlbnQgTmFtZVxuICAgKi9cbiAgcHJlZml4KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4K3RoaXMuX3NlcCtuYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBjcmVhdGVDaGFubmVsXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBuZXcgY2hhbm5lbCBwcmVmaXhpbmcgdGhlIGNoYW5uZWwgbmFtZSB3aXRoIHRoaXMgY2hhbm5lbE5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjaGFubmVsTmFtZVxuICAgKiBAcmV0dXJuIHtJbnN0YW5jZX0gICAgICAgICAgIE5ldyBDaGFubmVsIEluc3RhbmNlXG4gICAqL1xuICBjcmVhdGVDaGFubmVsKGNoYW5uZWxOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRlcmZhY2VDaGFubmVsKHRoaXMsIGNoYW5uZWxOYW1lKTtcbiAgfVxuXG4gIC8vIFB1Ymxpc2ggdG8gdGhlIGV2ZW50IGFnZ3JlZ2F0b3JcbiAgcHVibGlzaChuYW1lLCBwYXlsb2FkKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykgbmFtZSA9IHRoaXMucHJlZml4KG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5hbWUsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gU3Vic2NyaWJlIHRvIHRoZSBldmVudCBhZ2dyZWdhdG9yXG4gIHN1YnNjcmliZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIG5hbWUgPSB0aGlzLnByZWZpeChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKG5hbWUsIGNvbnRleHQgPyBjYWxsYmFjay5iaW5kKGNvbnRleHQpIDogY2FsbGJhY2spO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
