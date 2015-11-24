/* */ 
define(['exports', './aurelia-interface', './channel', 'aurelia-event-aggregator', './elements/nav-bar', './controller'], function (exports, _aureliaInterface, _channel, _aureliaEventAggregator, _elementsNavBar, _controller) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  exports.Navbar = _elementsNavBar.Navbar;
  Object.defineProperty(exports, 'InterfaceController', {
    enumerable: true,
    get: function get() {
      return _controller.InterfaceController;
    }
  });

  function configure(framework, config) {
    var ea = framework.container.get(_aureliaEventAggregator.EventAggregator);
    var interfaceChannel = new _channel.InterfaceChannel(ea);
    var aureliaInterface = new _aureliaInterface.AureliaInterface(interfaceChannel);

    framework.instance(aureliaInterface, _aureliaInterface.AureliaInterface);
    framework.instance(interfaceChannel, _channel.InterfaceChannel);
    var _platform = aureliaInterface.platform.localName;

    framework.globalResources('./ai-activate');
    framework.globalResources('./ai-navigate');

    return config && typeof config === 'function' && config({
      icons: function icons() {
        framework.globalResources('./elements/icon');
        framework.globalResources('./elements/md-icon');
        framework.globalResources('core.css!');
      },
      core: function core() {
        framework.globalResources('core.css!');
        framework.globalResources('./elements/icon');
        framework.globalResources('./elements/md-icon');
        framework.globalResources('./elements/button');

        framework.globalResources('./elements/item');
        framework.globalResources('./elements/item-header');
        framework.globalResources('./elements/list');
        framework.globalResources('./elements/tile');
        framework.globalResources('./elements/help');
        framework.globalResources('./ai-activate');
      },
      elements: function elements() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        args.forEach(function (a) {
          framework.globalResources('./elements/' + a);
        });
      },
      layout: function layout() {
        framework.globalResources('./layout.css!');
        framework.globalResources('./components/view', './components/view-bar', './elements/nav-bar', './components/router-view');
      },
      platform: function platform(_platform2) {
        _platform2 = _platform2 || _platform;
        framework.globalResources(_platform2 + '.css!');
      },
      globalizeAll: function globalizeAll() {
        this.core();
        this.layout();
        framework.globalResources('./components/accordion');
        framework.globalResources('./forms/form');
      },
      theme: function theme(_theme) {
        interfaceChannel.publish('change-theme', { theme: _theme });
      },
      normalize: function normalize() {
        framework.globalResources('normalize.css!');
      },
      feature: function feature(feat) {
        framework.globalResources('./' + feat);
      }
    });
  }
});
//# sourceMappingURL=data:application/json;base64,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QyxDQUFDO0FBQ3BELGlCQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO09BQzNDO0FBQ0QsV0FBSyxFQUFBLGVBQUMsTUFBSyxFQUFFO0FBQ1gsd0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFDLEtBQUssRUFBTCxNQUFLLEVBQUMsQ0FBQyxDQUFBO09BQ2xEO0FBQ0QsZUFBUyxFQUFBLHFCQUFHO0FBQ1YsaUJBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztPQUM3QztBQUNELGFBQU8sRUFBQSxpQkFBQyxJQUFJLEVBQUU7QUFDWixpQkFBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7T0FDdEM7S0FDRixDQUFDLENBQUM7R0FDSiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7U3ludGF4SW50ZXJwcmV0ZXJ9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZy1iaW5kaW5nJztcbi8vIGltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG4gIC8vIHN5bnRheFsnYWN0aXZhdGUnXSA9IGFjdGl2YXRlUmVmLmJpbmQoc3ludGF4KTtcbiAgLy8gdmFyIHN5bnRheCA9IGZyYW1ld29yay5jb250YWluZXIuZ2V0KFN5bnRheEludGVycHJldGVyKTtcbmltcG9ydCB7QXVyZWxpYUludGVyZmFjZX0gZnJvbSAnLi9hdXJlbGlhLWludGVyZmFjZSc7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4vY2hhbm5lbCc7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7TmF2YmFyfSBmcm9tICcuL2VsZW1lbnRzL25hdi1iYXInO1xuZXhwb3J0IHtOYXZiYXJ9O1xuZXhwb3J0IHtJbnRlcmZhY2VDb250cm9sbGVyfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29yaywgY29uZmlnKSB7XG4gIHZhciBlYSA9IGZyYW1ld29yay5jb250YWluZXIuZ2V0KEV2ZW50QWdncmVnYXRvcik7XG4gIHZhciBpbnRlcmZhY2VDaGFubmVsID0gbmV3IEludGVyZmFjZUNoYW5uZWwoZWEpO1xuICB2YXIgYXVyZWxpYUludGVyZmFjZSA9IG5ldyBBdXJlbGlhSW50ZXJmYWNlKGludGVyZmFjZUNoYW5uZWwpO1xuXG4gIC8vIGZyYW1ld29yay5pbnN0YW5jZShhY3RpdmF0b3IsIEFjdGl2YXRvcik7XG4gIGZyYW1ld29yay5pbnN0YW5jZShhdXJlbGlhSW50ZXJmYWNlLCBBdXJlbGlhSW50ZXJmYWNlKTtcbiAgZnJhbWV3b3JrLmluc3RhbmNlKGludGVyZmFjZUNoYW5uZWwsIEludGVyZmFjZUNoYW5uZWwpO1xuICBsZXQgX3BsYXRmb3JtID0gYXVyZWxpYUludGVyZmFjZS5wbGF0Zm9ybS5sb2NhbE5hbWU7XG5cbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9haS1hY3RpdmF0ZScpO1xuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2FpLW5hdmlnYXRlJyk7XG5cbiAgcmV0dXJuIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykgJiYgY29uZmlnKHtcbiAgICBpY29ucygpIHtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvaWNvbicpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9tZC1pY29uJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCdjb3JlLmNzcyEnKTtcbiAgICB9LFxuICAgIGNvcmUoKSB7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKGBjb3JlLmNzcyFgKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvaWNvbicpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9tZC1pY29uJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2J1dHRvbicpO1xuXG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2l0ZW0nKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvaXRlbS1oZWFkZXInKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvbGlzdCcpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy90aWxlJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2hlbHAnKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vYWktYWN0aXZhdGUnKTtcbiAgICB9LFxuICAgIGVsZW1lbnRzKC4uLmFyZ3MpIHtcbiAgICAgIGFyZ3MuZm9yRWFjaChhID0+IHtcbiAgICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy8nK2EpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBsYXlvdXQoKSB7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2xheW91dC5jc3MhJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKFxuICAgICAgICAgJy4vY29tcG9uZW50cy92aWV3J1xuICAgICAgICAsJy4vY29tcG9uZW50cy92aWV3LWJhcidcbiAgICAgICAgLCcuL2VsZW1lbnRzL25hdi1iYXInXG4gICAgICAgICwnLi9jb21wb25lbnRzL3JvdXRlci12aWV3J1xuICAgICAgKTtcbiAgICB9LFxuICAgIHBsYXRmb3JtKHBsYXRmb3JtKSB7XG4gICAgICBwbGF0Zm9ybSA9IHBsYXRmb3JtIHx8IF9wbGF0Zm9ybTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoYCR7cGxhdGZvcm19LmNzcyFgKTtcbiAgICB9LFxuICAgIGdsb2JhbGl6ZUFsbCgpIHtcbiAgICAgIHRoaXMuY29yZSgpO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vY29tcG9uZW50cy9hY2NvcmRpb24nKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZm9ybXMvZm9ybScpO1xuICAgIH0sXG4gICAgdGhlbWUodGhlbWUpIHtcbiAgICAgIGludGVyZmFjZUNoYW5uZWwucHVibGlzaCgnY2hhbmdlLXRoZW1lJywge3RoZW1lfSlcbiAgICB9LFxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJ25vcm1hbGl6ZS5jc3MhJyk7XG4gICAgfSxcbiAgICBmZWF0dXJlKGZlYXQpIHtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vJytmZWF0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIGV4cG9ydCAqIGZyb20gJy4vdmlldy92aWV3LWNvbnRyb2xsZXInO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
