/* */ 
define(['exports', 'aurelia-framework', './controller', './support/animation', './support/platform', './support/browser', './support/device', './support/tap', './support/tap-activator', './support/gesture', './ai-el'], function (exports, _aureliaFramework, _controller, _supportAnimation, _supportPlatform, _supportBrowser, _supportDevice, _supportTap, _supportTapActivator, _supportGesture, _aiEl) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  document.aureliaInterface = document.aureliaInterface || new Object();

  var AureliaInterface = (function () {
    function AureliaInterface(interfaceChannel) {
      _classCallCheck(this, AureliaInterface);

      this.tap = {};
      this.scroll = {};
      this.device = {};
      this.keyboard = {};
      this.platform = {};
      this.animation = {};
      this.activator = {};
      this.tapActivator = {};
      this.util = {};
      this.views = {};
      this.theme = 'light';

      document.aureliaInterface = this;
      this.channel = interfaceChannel;
      var ai = _aiEl.Ai;
      document.aureliaInterface.ai = _aiEl.Ai;
      window.Ai = _aiEl.Ai;
      window.ai = ai;

      this.init(this.tapActivator, this.animation = new _supportAnimation.InterfaceAnimationSupport(this), this.platform = new _supportPlatform.InterfacePlatformSupport(this), this.browser = new _supportBrowser.InterfaceBrowserSupport(this), this.device = new _supportDevice.InterfaceDeviceSupport(this), this.tap, this.Gestures);
      return this;
    }

    _createClass(AureliaInterface, [{
      key: 'init',
      value: function init(tapActivator, animation, platform, browser, device, tap, Gestures) {
        var _this = this;

        platform.init();
        browser.init();
        device.init();

        this.initListeners();
        this.setTheme(this.theme);

        this.channel.subscribe('init-controller', function (controller) {
          controller.init(_this);
          _this.controller = controller;
        });

        if (platform.isIOS() && !device.isWebView() && device.isMobile() && platform.version >= 7) {
          ai('meta[name="viewport"]').length > 0 && ai('meta[name="viewport"]').attr('content').indexOf('minimal-ui') >= 0;
        }
        this.setUtil();
      }
    }, {
      key: 'instruction',
      value: function instruction() {
        return {
          device: this.device,
          platform: this.platform.platform,
          deviceType: this.device.device
        };
      }
    }, {
      key: 'publish',
      value: function publish(eventName, payload) {
        return this.channel.publish(eventName, payload);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(eventName, payload) {
        return this.channel.subscribe(eventName, payload);
      }
    }, {
      key: 'initListeners',
      value: function initListeners() {
        var _this2 = this;

        this.subscribe('change-platform', function (payload) {
          var oldPlatform = _this2.platform;
          _this2.platform = payload.platform;
          _this2.setPlatform(payload.platform, oldPlatform);
        });

        this.subscribe('change-theme', function (payload) {
          var oldTheme = _this2.theme;
          _this2.theme = payload.theme;
          _this2.setTheme(payload.theme, oldTheme);
        });
      }
    }, {
      key: 'setTheme',
      value: function setTheme(newTheme, lastTheme) {
        lastTheme && document.documentElement.classList.remove('theme-' + lastTheme);
        newTheme && document.documentElement.classList.add('theme-' + newTheme);
        this.publish('theme-changed', this.deviceInstruction);
      }
    }, {
      key: 'setPlatform',
      value: function setPlatform(newPlatform, lastPlatform) {
        this.setOSX(newPlatform, lastPlatform);
        lastPlatform && document.documentElement.classList.remove('platform-' + lastPlatform);
        newPlatform && document.documentElement.classList.add('platform-' + newPlatform);
        this.publish('platform-changed', this.deviceInstruction);
      }
    }, {
      key: 'setOSX',
      value: function setOSX(newPlatform, lastPlatform) {
        newPlatform === 'osx' && document.documentElement.classList.remove('platform-ios');
        lastPlatform === 'osx' && document.documentElement.classList.add('platform-ios');
      }
    }, {
      key: 'trigger',
      value: function trigger(eventType, data, bubbles, cancelable) {
        var event = new CustomEvent(eventType, {
          detail: data,
          bubbles: !!bubbles,
          cancelable: !!cancelable
        });

        data && data.target && data.target.dispatchEvent && data.target.dispatchEvent(event) || window.dispatchEvent(event);
      }
    }, {
      key: 'setUtil',
      value: function setUtil() {
        this.util.isTouch = this.device.isTouch();
        this.util.clickEvent = this.util.isTouch ? 'touchstart' : 'click';
      }
    }]);

    return AureliaInterface;
  })();

  exports.AureliaInterface = AureliaInterface;

  Element.prototype.defaultduration = 0.4;
  Element.prototype.to = function (options) {
    var duration = options.duration || this.defaultduration;
    delete options.duration;
    return TweenMax.to(this, duration, options);
  };

  Element.prototype.set = function (options) {
    return TweenMax.set(this, options);
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDckg7OzthQUVPLG1CQUFHO0FBQ1QsWUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMxQyxZQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsT0FBTyxDQUFDO09BQ25FOzs7V0EzSlUsZ0JBQWdCOzs7OztBQThKN0IsU0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBQ3hDLFNBQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLFVBQVMsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUN4RCxXQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDeEIsV0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDN0MsQ0FBQzs7QUFFRixTQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUN4QyxXQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFHLE9BQU8sQ0FBQyxDQUFDO0dBQ3JDLENBQUMiLCJmaWxlIjoiYXVyZWxpYS1pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hdXJlbGlhSW50ZXJmYWNlID0gZG9jdW1lbnQuYXVyZWxpYUludGVyZmFjZSB8fCBuZXcgT2JqZWN0KCk7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQge0ludGVyZmFjZUNvbnRyb2xsZXJ9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQge0ludGVyZmFjZUFuaW1hdGlvblN1cHBvcnR9IGZyb20gJy4vc3VwcG9ydC9hbmltYXRpb24nO1xuaW1wb3J0IHtJbnRlcmZhY2VQbGF0Zm9ybVN1cHBvcnR9IGZyb20gJy4vc3VwcG9ydC9wbGF0Zm9ybSc7XG5pbXBvcnQge0ludGVyZmFjZUJyb3dzZXJTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQvYnJvd3Nlcic7XG5pbXBvcnQge0ludGVyZmFjZURldmljZVN1cHBvcnR9IGZyb20gJy4vc3VwcG9ydC9kZXZpY2UnO1xuaW1wb3J0IHtJbnRlcmZhY2VUYXBTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQvdGFwJztcbmltcG9ydCB7SW50ZXJmYWNlVGFwQWN0aXZhdG9yfSBmcm9tICcuL3N1cHBvcnQvdGFwLWFjdGl2YXRvcic7XG5pbXBvcnQge0ludGVyZmFjZUdlc3R1cmVzfSBmcm9tICcuL3N1cHBvcnQvZ2VzdHVyZSc7XG5pbXBvcnQge0FpfSBmcm9tICcuL2FpLWVsJztcblxuZXhwb3J0IGNsYXNzIEF1cmVsaWFJbnRlcmZhY2Uge1xuXG4gIHRhcCAgICAgID0ge307XG4gIHNjcm9sbCAgID0ge307XG4gIGRldmljZSAgID0ge307XG4gIGtleWJvYXJkID0ge307XG4gIHBsYXRmb3JtID0ge307XG4gIGFuaW1hdGlvbiA9IHt9O1xuICBhY3RpdmF0b3IgPSB7fTtcbiAgdGFwQWN0aXZhdG9yID0ge307XG4gIHV0aWwgPSB7fTtcbiAgdmlld3MgPSB7fTtcbiAgdGhlbWUgPSAnbGlnaHQnO1xuXG4gIGNvbnN0cnVjdG9yKGludGVyZmFjZUNoYW5uZWwpIHtcbiAgICBkb2N1bWVudC5hdXJlbGlhSW50ZXJmYWNlID0gdGhpcztcbiAgICB0aGlzLmNoYW5uZWwgPSBpbnRlcmZhY2VDaGFubmVsO1xuICAgIHZhciBhaSA9IEFpIC8vIEV4cG9ydCB0byBsb2NhbCBzY29wZVxuICAgIGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2UuYWkgPSBBaTsgLy8gRXhwb3J0IEFpIHRvIEF1cmVsaWFJbnRlcmZhY2VcbiAgICB3aW5kb3cuQWkgPSBBaTsgLy8gRXhwb3J0IHRvIGxvY2FsIHNjb3BlXG4gICAgd2luZG93LmFpID0gYWk7XG5cbiAgICB0aGlzLmluaXQoXG4gICAgICAgdGhpcy50YXBBY3RpdmF0b3IgLy89IG5ldyBJbnRlcmZhY2VUYXBBY3RpdmF0b3IodGhpcylcbiAgICAgICx0aGlzLmFuaW1hdGlvbiAgICA9IG5ldyBJbnRlcmZhY2VBbmltYXRpb25TdXBwb3J0KHRoaXMpXG4gICAgICAsdGhpcy5wbGF0Zm9ybSAgICAgPSBuZXcgSW50ZXJmYWNlUGxhdGZvcm1TdXBwb3J0KHRoaXMpXG4gICAgICAsdGhpcy5icm93c2VyICAgICAgPSBuZXcgSW50ZXJmYWNlQnJvd3NlclN1cHBvcnQodGhpcylcbiAgICAgICx0aGlzLmRldmljZSAgICAgICA9IG5ldyBJbnRlcmZhY2VEZXZpY2VTdXBwb3J0KHRoaXMpXG4gICAgICAsdGhpcy50YXAgICAgICAgICAgLy89IG5ldyBJbnRlcmZhY2VUYXBTdXBwb3J0KHRoaXMpXG4gICAgICAsdGhpcy5HZXN0dXJlcyAgICAgLy89IG5ldyBJbnRlcmZhY2VHZXN0dXJlcyh0aGlzKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbml0KHRhcEFjdGl2YXRvciwgYW5pbWF0aW9uLCBwbGF0Zm9ybSwgYnJvd3NlciwgZGV2aWNlLCB0YXAsIEdlc3R1cmVzKSB7XG4gICAgcGxhdGZvcm0uaW5pdCgpO1xuICAgIGJyb3dzZXIuaW5pdCgpO1xuICAgIGRldmljZS5pbml0KCk7XG4gICAgLy8gdGFwLnJlZ2lzdGVyKGRvY3VtZW50KTtcblxuICAgIHRoaXMuaW5pdExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0VGhlbWUodGhpcy50aGVtZSk7XG5cbiAgICB0aGlzLmNoYW5uZWwuc3Vic2NyaWJlKCdpbml0LWNvbnRyb2xsZXInLCAoY29udHJvbGxlcik9PiB7XG4gICAgICBjb250cm9sbGVyLmluaXQodGhpcyk7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIH0pO1xuXG4gICAgaWYgKHBsYXRmb3JtLmlzSU9TKCkgJiYgIWRldmljZS5pc1dlYlZpZXcoKSAmJiBkZXZpY2UuaXNNb2JpbGUoKSAmJiBwbGF0Zm9ybS52ZXJzaW9uID49IDcpIHtcbiAgICAgICAgYWkoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJykubGVuZ3RoID4gMCAmJiBhaSgnbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5hdHRyKCdjb250ZW50JykuaW5kZXhPZignbWluaW1hbC11aScpID49IDA7XG4gICAgfVxuICAgIHRoaXMuc2V0VXRpbCgpO1xuICB9XG5cbiAgaW5zdHJ1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldmljZTogdGhpcy5kZXZpY2UsXG4gICAgICBwbGF0Zm9ybTogdGhpcy5wbGF0Zm9ybS5wbGF0Zm9ybSxcbiAgICAgIGRldmljZVR5cGU6IHRoaXMuZGV2aWNlLmRldmljZSxcbiAgICB9XG4gIH1cblxuICBwdWJsaXNoKGV2ZW50TmFtZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWwucHVibGlzaChldmVudE5hbWUsIHBheWxvYWQpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWwuc3Vic2NyaWJlKGV2ZW50TmFtZSwgcGF5bG9hZCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IGluaXRMaXN0ZW5lcnNcbiAgICpcbiAgICogSW5pdGlhbGl6ZSBhbGwgTGlzdGVuZXJzIGZvciBjb21wb25lbnQgdXNhZ2VcbiAgICovXG4gIGluaXRMaXN0ZW5lcnMoKSB7XG5cbiAgICB0aGlzLnN1YnNjcmliZSgnY2hhbmdlLXBsYXRmb3JtJywgKHBheWxvYWQpPT4ge1xuICAgICAgbGV0IG9sZFBsYXRmb3JtID0gdGhpcy5wbGF0Zm9ybTtcbiAgICAgIHRoaXMucGxhdGZvcm0gPSBwYXlsb2FkLnBsYXRmb3JtO1xuICAgICAgdGhpcy5zZXRQbGF0Zm9ybShwYXlsb2FkLnBsYXRmb3JtLCBvbGRQbGF0Zm9ybSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmliZSgnY2hhbmdlLXRoZW1lJywgKHBheWxvYWQpPT4ge1xuICAgICAgbGV0IG9sZFRoZW1lID0gdGhpcy50aGVtZTtcbiAgICAgIHRoaXMudGhlbWUgPSBwYXlsb2FkLnRoZW1lO1xuICAgICAgdGhpcy5zZXRUaGVtZShwYXlsb2FkLnRoZW1lLCBvbGRUaGVtZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IHNldFRoZW1lXG4gICAqXG4gICAqIFNldCB0aGUgY3VycmVudCBpbnRlcmZhY2UgdGhlbWUsIGJ5XG4gICAqIC0gMSBTZXR0aW5nIGFuZCByZW1vdmluZyB0aGUgcHJvcGVyIGF0dHJpYnV0ZXMgdG8gYW5kIGZyb20gdGhlIGJvZHlcbiAgICogLSAyIFB1Ymxpc2hpbmcgdGhlIHByb3BlciBldmVudCB0byB0aGUgSW50ZXJmYWNlQ2hhbm5lbCwgaW4gb3JkZXIgdG8gbm90aWZ5IGFueSBjb21wb25lbnQgb2YgYSBUaGVtZSBjaGFuZ2VcbiAgICogLSAzIERpc3BhdGNoIHRoZSBzYW1lIGV2ZW50IG9uIHRoZSBkb2N1bWVudCwgZm9yIGFueXRoaW5nIGxpc3RlbmluZyB0byBkb2N1bWVudCBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbmV3VGhlbWVdICBbVGhlIG5ldyBuYW1lIG9mIHRoZSBpbnRlcmZhY2UtdGhlbWVdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbGFzdFRoZW1lXSBbVGhlIGxhc3QgbmFtZSBvZiB0aGUgaW50ZXJmYWNlLXRoZW1lLCBpbiBvcmRlciB1bmRvIHdoYXQgd2FzIGRvbmVdXG4gICAqL1xuICBzZXRUaGVtZShuZXdUaGVtZSwgbGFzdFRoZW1lKSB7XG4gICAgbGFzdFRoZW1lICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGB0aGVtZS0ke2xhc3RUaGVtZX1gKTtcbiAgICBuZXdUaGVtZSAgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHRoZW1lLSR7bmV3VGhlbWV9YCk7XG4gICAgdGhpcy5wdWJsaXNoKCd0aGVtZS1jaGFuZ2VkJywgdGhpcy5kZXZpY2VJbnN0cnVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IHNldFBsYXRmb3JtXG4gICAqXG4gICAqIFNldCB0aGUgY3VycmVudCBpbnRlcmZhY2UgcGxhdGZvcm0sIGJ5XG4gICAqIC0gMSBTZXR0aW5nIGFuZCByZW1vdmluZyB0aGUgcHJvcGVyIGF0dHJpYnV0ZXMgdG8gYW5kIGZyb20gdGhlIGJvZHlcbiAgICogLSAyIFB1Ymxpc2hpbmcgdGhlIHByb3BlciBldmVudCB0byB0aGUgSW50ZXJmYWNlQ2hhbm5lbCwgaW4gb3JkZXIgdG8gbm90aWZ5IGFueSBjb21wb25lbnQgb2YgYSBQbGF0Zm9ybSBjaGFuZ2VcbiAgICogLSAzIERpc3BhdGNoIHRoZSBzYW1lIGV2ZW50IG9uIHRoZSBkb2N1bWVudCwgZm9yIGFueXRoaW5nIGxpc3RlbmluZyB0byBkb2N1bWVudCBldmVudHMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbmV3UGxhdGZvcm1dICBbVGhlIG5ldyBuYW1lIG9mIHRoZSBpbnRlcmZhY2UtcGxhdGZvcm1dXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbGFzdFBsYXRmb3JtXSBbVGhlIGxhc3QgbmFtZSBvZiB0aGUgaW50ZXJmYWNlLXBsYXRmb3JtLCBpbiBvcmRlciB1bmRvIHdoYXQgd2FzIGRvbmVdXG4gICAqL1xuICBzZXRQbGF0Zm9ybShuZXdQbGF0Zm9ybSwgbGFzdFBsYXRmb3JtKSB7XG4gICAgdGhpcy5zZXRPU1gobmV3UGxhdGZvcm0sIGxhc3RQbGF0Zm9ybSk7XG4gICAgbGFzdFBsYXRmb3JtICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGBwbGF0Zm9ybS0ke2xhc3RQbGF0Zm9ybX1gKTtcbiAgICBuZXdQbGF0Zm9ybSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcGxhdGZvcm0tJHtuZXdQbGF0Zm9ybX1gKTtcbiAgICB0aGlzLnB1Ymxpc2goJ3BsYXRmb3JtLWNoYW5nZWQnLCB0aGlzLmRldmljZUluc3RydWN0aW9uKTtcbiAgfVxuXG4gIHNldE9TWChuZXdQbGF0Zm9ybSwgbGFzdFBsYXRmb3JtKSB7XG4gICAgbmV3UGxhdGZvcm0gPT09ICdvc3gnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF0Zm9ybS1pb3MnKTtcbiAgICBsYXN0UGxhdGZvcm0gPT09ICdvc3gnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwbGF0Zm9ybS1pb3MnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIFByb3RvdHlwZSgpOiB0cmlnZ2VyXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUcmlnZ2VyIGEgbmV3IGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIGV2ZW50IHRvIHRyaWdnZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgZXZlbnQuIEhpbnQ6IHBhc3MgaW5cbiAgICogICAgICAgYHt0YXJnZXQ6IHRhcmdldEVsZW1lbnR9YFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ1YmJsZXMgV2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJ1YmJsZSB1cCB0aGUgRE9NLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNhbmNlbGFibGUgV2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGNhbmNlbGFibGUuXG4gICAqL1xuICB0cmlnZ2VyKGV2ZW50VHlwZSwgZGF0YSwgYnViYmxlcywgY2FuY2VsYWJsZSkge1xuICAgIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudFR5cGUsIHtcbiAgICAgIGRldGFpbDogZGF0YSxcbiAgICAgIGJ1YmJsZXM6ICEhYnViYmxlcyxcbiAgICAgIGNhbmNlbGFibGU6ICEhY2FuY2VsYWJsZVxuICAgIH0pO1xuICAgIC8vIE1ha2Ugc3VyZSB0byB0cmlnZ2VyIHRoZSBldmVudCBvbiB0aGUgZ2l2ZW4gdGFyZ2V0LCBvciBkaXNwYXRjaCBpdCBmcm9tXG4gICAgLy8gdGhlIHdpbmRvdyBpZiB3ZSBkb24ndCBoYXZlIGFuIGV2ZW50IHRhcmdldFxuICAgIGRhdGEgJiYgZGF0YS50YXJnZXQgJiYgZGF0YS50YXJnZXQuZGlzcGF0Y2hFdmVudCAmJiBkYXRhLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50KSB8fCB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBzZXRVdGlsICgpIHtcbiAgICB0aGlzLnV0aWwuaXNUb3VjaCA9IHRoaXMuZGV2aWNlLmlzVG91Y2goKTtcbiAgICB0aGlzLnV0aWwuY2xpY2tFdmVudCA9IHRoaXMudXRpbC5pc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5kZWZhdWx0ZHVyYXRpb24gPSAwLjQ7XG5FbGVtZW50LnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiB8fCB0aGlzLmRlZmF1bHRkdXJhdGlvbjtcbiAgZGVsZXRlIG9wdGlvbnMuZHVyYXRpb247XG4gIHJldHVybiBUd2Vlbk1heC50byh0aGlzLCBkdXJhdGlvbiwgb3B0aW9ucyk7XG59O1xuXG5FbGVtZW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiBUd2Vlbk1heC5zZXQodGhpcywgIG9wdGlvbnMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
