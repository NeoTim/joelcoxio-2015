/* */ 
define(['exports', './channel'], function (exports, _channel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var currentZIndex = 1000;
  var transitionEvent = (function () {
    var t = undefined;
    var el = document.createElement('fakeelement');

    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  })();

  function getNextZIndex() {
    return ++currentZIndex;
  }

  var ViewsService = (function () {
    function ViewsService(channel) {
      _classCallCheck(this, _ViewsService);

      this.channel = channel;
    }

    _createClass(ViewsService, [{
      key: 'createViewPort',
      value: function createViewPort(name) {
        this.viewPorts[name];
      }
    }]);

    var _ViewsService = ViewsService;
    ViewsService = inject(_channel.InterfaceChannel)(ViewsService) || ViewsService;
    return ViewsService;
  })();

  exports.ViewsService = ViewsService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsTUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLE1BQUksZUFBZSxHQUFHLENBQUMsWUFBVztBQUNoQyxRQUFJLENBQUMsWUFBQSxDQUFDO0FBQ04sUUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFL0MsUUFBSSxXQUFXLEdBQUc7QUFDaEIsa0JBQVksRUFBRSxlQUFlO0FBQzdCLG1CQUFhLEVBQUUsZ0JBQWdCO0FBQy9CLHFCQUFlLEVBQUUsZUFBZTtBQUNoQyx3QkFBa0IsRUFBRSxxQkFBcUI7S0FDMUMsQ0FBQzs7QUFFRixTQUFLLENBQUMsSUFBSSxXQUFXLEVBQUU7QUFDckIsVUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUM3QixlQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUN2QjtLQUNGO0dBQ0YsQ0FBQSxFQUFHLENBQUM7O0FBRUwsV0FBUyxhQUFhLEdBQUc7QUFDdkIsV0FBTyxFQUFFLGFBQWEsQ0FBQztHQUN4Qjs7TUFHWSxZQUFZO0FBRVosYUFGQSxZQUFZLENBRVgsT0FBTyxFQUFFOzs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7O2lCQUpVLFlBQVk7O2FBTVQsd0JBQUMsSUFBSSxFQUFFO0FBQ25CLFlBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7T0FDckI7Ozt3QkFSVSxZQUFZO0FBQVosZ0JBQVksR0FEeEIsTUFBTSxVQXhCQyxnQkFBZ0IsQ0F3QkMsQ0FDWixZQUFZLEtBQVosWUFBWTtXQUFaLFlBQVkiLCJmaWxlIjoidmlld3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4vY2hhbm5lbCc7XG5sZXQgY3VycmVudFpJbmRleCA9IDEwMDA7XG5sZXQgdHJhbnNpdGlvbkV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgdDtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcblxuICBsZXQgdHJhbnNpdGlvbnMgPSB7XG4gICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ09UcmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAnTW96VHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIGZvciAodCBpbiB0cmFuc2l0aW9ucykge1xuICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XG4gICAgfVxuICB9XG59KSgpO1xuXG5mdW5jdGlvbiBnZXROZXh0WkluZGV4KCkge1xuICByZXR1cm4gKytjdXJyZW50WkluZGV4O1xufVxuXG5AaW5qZWN0KEludGVyZmFjZUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgVmlld3NTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihjaGFubmVsKSB7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgfVxuXG4gIGNyZWF0ZVZpZXdQb3J0KG5hbWUpIHtcbiAgICB0aGlzLnZpZXdQb3J0c1tuYW1lXVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
